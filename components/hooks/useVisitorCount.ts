import React from 'react';

import { doc, getDoc, runTransaction } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const VISITED_KEY = 'hasVisited';

/* localStorage can throw (private mode, blocked storage). Treat that as "not visited"
   for reads and skip the write, so the counter never breaks rendering. */
function hasVisitedFlag(): boolean {
  try {
    return localStorage.getItem(VISITED_KEY) === 'true';
  } catch {
    return false;
  }
}

function setVisitedFlag(): void {
  try {
    localStorage.setItem(VISITED_KEY, 'true');
  } catch {
    // storage unavailable: the visit simply is not remembered
  }
}

/* One request per page load, shared by every caller. StrictMode double-runs effects
   and remounts would otherwise increment the counter twice for a single visit. */
let countRequest: Promise<number> | null = null;

function recordVisit(): Promise<number> {
  if (countRequest) return countRequest;

  countRequest = (async () => {
    const ref = doc(db, 'visitors', 'counter');

    if (hasVisitedFlag()) {
      const snap = await getDoc(ref);
      return Number(snap.data()?.count ?? 0);
    }

    // Read and write in one transaction, so two first-time visitors cannot overwrite each other.
    const next = await runTransaction(db, async (tx) => {
      const snap = await tx.get(ref);
      const value = Number(snap.data()?.count ?? 0) + 1;
      tx.set(ref, { count: value });
      return value;
    });

    setVisitedFlag();
    return next;
  })();

  // Allow a retry on the next mount if this attempt failed.
  countRequest.catch(() => {
    countRequest = null;
  });

  return countRequest;
}

export function useVisitorCount() {
  const [count, setCount] = React.useState<number | null>(null);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    let active = true;

    recordVisit()
      .then((value) => {
        if (active) setCount(value);
      })
      .catch((error) => {
        console.error('Failed to update visitor count:', error);
        if (active) setFailed(true);
      });

    return () => {
      active = false;
    };
  }, []);

  return { count, failed };
}
