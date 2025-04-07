import { Dispatch, SetStateAction } from "react";

/**
 * Reusable logging hook that updates a log state and logs to console.
 *
 * @param setLogs - React state setter for logs array
 * @returns function that logs messages to both console and the UI
 */
export function useLogger(setLogs: Dispatch<SetStateAction<string[]>>) {
  return (message: string) => {
    console.log(message);
    setLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] ${message}`,
    ]);
  };
}
