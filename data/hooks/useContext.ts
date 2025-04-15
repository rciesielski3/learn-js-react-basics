import { ExampleHookData } from "@/components/shared/types";

export const useContextData: ExampleHookData = {
  sampleSnippet: `import React from 'react';

const ThemeContext = React.createContext('light');

function ThemedComponent() {
  const theme = React.useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}`,
  visualReprezentation: `Context created: ThemeContext = "light"

ThemeContext.Provider provides value = "dark"
ThemedComponent consumes context:
➡ useContext(ThemeContext) → "dark"
Render: "Current theme: dark"`,
};
