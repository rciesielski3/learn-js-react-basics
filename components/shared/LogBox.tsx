export function LogBox({ logs }: { logs: string[] }) {
  return (
    <div className="bg-black text-green-400 font-mono text-xs p-3 rounded h-48 overflow-auto border border-gray-700">
      {logs.length === 0 ? (
        <p className="text-gray-500">No logs yet.</p>
      ) : (
        logs.map((log, i) => <div key={i}>{log}</div>)
      )}
    </div>
  );
}
