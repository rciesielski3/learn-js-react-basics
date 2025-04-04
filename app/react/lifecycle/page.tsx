"use client";
import ReactLifeCycleDemo from "../../../components/ReactLifeCycleDemo";

export default function ReactLifecyclePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">React Lifecycle Demo</h1>
      <p className="mb-4">
        This example demonstrates how React components mount, update, and
        unmount using <code>useEffect</code>.
      </p>
      <ReactLifeCycleDemo />
    </div>
  );
}
