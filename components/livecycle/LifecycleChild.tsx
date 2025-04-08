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
  }, []);

  React.useEffect(() => {
    log(`[CHILD] Count changed: ${count}`);
  }, [count]);

  return (
    <p className="text-sm text-orange-600 mt-2">👶 I'm a child component!</p>
  );
}
