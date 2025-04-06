type Props = {
  id: string;
  name: string;
  code: string;
  usage: string;
  result: string;
};

export function ExampleBlock({ name, code, usage, result }: Props) {
  return (
    <div className="bg-gray-800 p-4 rounded mb-6">
      <h2 className="font-semibold text-lg mb-2">{name}</h2>

      <div className="mb-2">
        <span className="text-sm font-medium text-gray-400">Code block:</span>
        <pre className="bg-gray-700 text-green-300 p-2 rounded text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>

      <div className="mb-2">
        <span className="text-sm font-medium text-gray-400">
          Example usage:
        </span>
        <pre className="bg-gray-700 text-blue-300 p-2 rounded text-sm">
          <code>{usage}</code>
        </pre>
      </div>

      <div>
        <span className="text-sm font-medium text-gray-400">Output:</span>
        <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
          <code>{result ?? "..."}</code>
        </pre>
      </div>
    </div>
  );
}
