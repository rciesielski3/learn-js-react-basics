export const errorBoundaryExamples = [
  {
    id: "basic-error-boundary",
    name: "Basic Error Boundary",
    description:
      "Error Boundaries are class components that catch errors in their child tree using `componentDidCatch` and `getDerivedStateFromError`.",
    code: `import React from "react";
  
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      console.error("Caught error:", error, info);
    }
  
    render() {
      if (this.state.hasError) {
        return <h2>Something went wrong.</h2>;
      }
      return this.props.children;
    }
  }
  
  function BuggyComponent() {
    throw new Error("Boom!");
  }
  
  function App() {
    return (
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    );
  }`,
    usage: `const result = "Error caught and fallback rendered";`,
    run: () => "Error caught and fallback rendered",
  },
  {
    id: "multiple-boundaries",
    name: "Isolated Boundaries",
    description:
      "You can wrap parts of your UI in separate Error Boundaries to isolate failures.",
    code: `function App() {
    return (
      <>
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
        <ErrorBoundary>
          <WorkingComponent />
        </ErrorBoundary>
      </>
    );
  }`,
    usage: `const result = "Only the broken part fails";`,
    run: () => "Only the broken part fails",
  },
];
