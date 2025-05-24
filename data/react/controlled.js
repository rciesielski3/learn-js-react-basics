export const controlledExamples = [
  {
    id: 'controlled-input',
    name: 'Controlled Input',
    description: 'An input whose value is controlled by React state.',
    code: `function ControlledInput() {
  const [value, setValue] = useState("");
  return (
    <input value={value} onChange={(e) => setValue(e.target.value)} />
  );
}`,
    usage: `<ControlledInput />`,
    run: () => 'Value is always synced to React state'
  },
  {
    id: 'uncontrolled-input',
    name: 'Uncontrolled Input',
    description: 'An input that manages its own state using a ref.',
    code: `function UncontrolledInput() {
  const inputRef = useRef();
  return <input ref={inputRef} />;
}`,
    usage: `<UncontrolledInput />`,
    run: () => 'DOM handles value; React does not track it'
  },
  {
    id: 'mixed-form',
    name: 'Mix Controlled and Uncontrolled',
    description: 'Example showing what happens when you mix both approaches.',
    code: `function Form() {
  const [name, setName] = useState("");
  const emailRef = useRef();
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input ref={emailRef} />
    </>
  );
}`,
    usage: `<Form />`,
    run: () => 'Use with caution — behavior can get inconsistent'
  }
];
