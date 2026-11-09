import { ui } from "./theme";

export function LogBox({ logs }: { logs: string[] }) {
  return (
    <div className="h-48 overflow-auto rounded-xl border border-white/10 bg-black/50 p-3 font-mono text-xs text-accent">
      {logs.length === 0 ? (
        <p className={ui.muted}>No logs yet.</p>
      ) : (
        logs.map((log, i) => <div key={i}>{log}</div>)
      )}
    </div>
  );
}
