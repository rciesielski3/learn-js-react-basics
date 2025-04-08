import React from "react";

export function LifecycleChild({
  count,
  log,
}: {
  count: number;
  log: (msg: string) => void;
}) {
  React.useEffect(() => {
    log("[CHILD] Mounted");
    return () => log("[CHILD] Unmounted");
  }, [log]);

  React.useEffect(() => {
    log(`[CHILD] Count changed: ${count}`);
  }, [count, log]);

  return (
    <p className="text-sm text-orange-600">👶 I&apos;m a child component!</p>
  );
}
