export const compositionExamples = [
  {
    id: "basic-composition",
    name: "Basic Composition",
    description:
      "React apps are built by composing components. A parent component can render child components as part of its output.",
    code: `function Header() {
    return <header>Header</header>;
  }
  
  function Footer() {
    return <footer>Footer</footer>;
  }
  
  function Layout() {
    return (
      <>
        <Header />
        <main>Main content</main>
        <Footer />
      </>
    );
  }`,
    usage: `const output = ["Header", "Main content", "Footer"].join(" | ");`,
    run: () => {
      return "Header | Main content | Footer";
    },
  },
  {
    id: "children-prop",
    name: "Children Prop",
    description:
      "The special `children` prop allows components to wrap content passed to them.",
    code: `function Card({ children }) {
    return <div className="card">{children}</div>;
  }
  
  function App() {
    return (
      <Card>
        <p>This is inside the card</p>
      </Card>
    );
  }`,
    usage: `const content = "This is inside the card";`,
    run: () => {
      return "This is inside the card";
    },
  },
  {
    id: "slots-via-props",
    name: "Slots via Props",
    description:
      "You can pass custom components into different regions (slots) of a layout using named props.",
    code: `function Page({ header, body, footer }) {
    return (
      <div>
        <div>{header}</div>
        <div>{body}</div>
        <div>{footer}</div>
      </div>
    );
  }
  
  function App() {
    return (
      <Page
        header={<h1>Title</h1>}
        body={<p>Main content here</p>}
        footer={<small>© 2025</small>}
      />
    );
  }`,
    usage: `const result = "Title + Main content here + © 2025";`,
    run: () => {
      return "Title + Main content here + © 2025";
    },
  },
];
