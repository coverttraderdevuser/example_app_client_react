const { useState , useEffect } = React;

function Timer({ setParentCounter }) {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    let countersystem;
    countersystem = setTimeout(() => setCounter(counter + 1), 1000);

    return () => {
      clearTimeout(countersystem);
    };
  }, [counter]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setParentCounter(counter);
        }}
      >
        Set parent counter value
      </button>
      <hr />
      <div>Child Counter: {counter}</div>
    </div>
  );
}

function App() {
  const [parentCounter, setParentCounter] = useState(0);

  return (
    <div className="App">
      Parent Counter: {parentCounter}
      <hr />
      <Timer setParentCounter={setParentCounter} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-root'));