"use client";
import VirtualDomVisualizer from "../../../components/VirtualDomVisualizer";

export default function VirtualDomPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Virtual DOM Visualizer</h1>
      <p className="mb-4">
        This tool demonstrates how React only updates changed parts of the DOM
        when state changes.
      </p>
      <VirtualDomVisualizer />
    </div>
  );
}
