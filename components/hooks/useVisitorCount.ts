import React from 'react';

import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useVisitorCount() {
  const [count, setCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    const updateCount = async () => {
      try {
        const docRef = doc(db, 'visitors', 'counter');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          await updateDoc(docRef, { count: increment(1) });
          const updatedSnap = await getDoc(docRef);
          setCount(updatedSnap.data()?.count);
        } else {
          await setDoc(docRef, { count: 1 });
          setCount(1);
        }

        localStorage.setItem('hasVisited', 'true');
      } catch (error) {
        console.error('Failed to update visitor count:', error);
      }
    };

    const fetchCount = async () => {
      try {
        const docRef = doc(db, 'visitors', 'counter');
        const docSnap = await getDoc(docRef);
        setCount(docSnap.exists() ? docSnap.data()?.count : 0);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    if (!hasVisited) {
      updateCount();
    } else {
      fetchCount();
    }
  }, []);

  return count;
}
