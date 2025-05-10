export const portalsExamples = [
  {
    id: 'create-portal',
    name: 'Render with createPortal',
    description:
      'ReactDOM.createPortal lets you render UI outside the root component, while maintaining React context and events.',
    code: `import ReactDOM from "react-dom";
  
  function Modal({ children }) {
    return ReactDOM.createPortal(
      <div className="modal">{children}</div>,
      document.getElementById("modal-root")
    );
  }
  
  function App() {
    return (
      <>
        <p>Normal content</p>
        <Modal>
          <p>I’m in a portal!</p>
        </Modal>
      </>
    );
  }`,
    usage: `const result = "Portal content rendered in #modal-root";`,
    run: () => 'Portal content rendered in #modal-root'
  },
  {
    id: 'event-bubbling',
    name: 'Event Bubbling with Portals',
    description:
      'Events inside portals still bubble to their React parents — great for handling clicks globally.',
    code: `function App() {
    const handleClick = () => console.log("Clicked modal (bubbled to App)");
  
    return (
      <div onClick={handleClick}>
        <Modal>
          <button>Click me</button>
        </Modal>
      </div>
    );
  }`,
    usage: `const result = "Event bubbles to React parent";`,
    run: () => 'Event bubbles to React parent'
  }
];
