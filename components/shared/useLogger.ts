import React from "react";

/**
 * Reusable logging hook that updates a log state and logs to console.
 *
 * @param setLogs - React state setter for logs array
 * @returns function that logs messages to both console and the UI
 */
export function useLogger(
  setLogs: React.Dispatch<React.SetStateAction<string[]>>
) {
  return React.useCallback(
    (msg: string) => {
      const timestamp = new Date().toLocaleTimeString();
      console.log(msg);
      setLogs((prev) => [...prev, `[${timestamp}] ${msg}`]);
    },
    [setLogs]
  );
}
