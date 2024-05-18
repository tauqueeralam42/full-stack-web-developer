import React, { useState, useEffect, useContext, useRef, useReducer, useCallback, useMemo } from 'react';

// Example of useContext
const ThemeContext = React.createContext();

// Example of useReducer
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

function HookExplorer() {
  // Example of useState
  const [count, setCount] = useState(0);

  // Example of useEffect
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // Example of useRef
  const inputRef = useRef();

  // Example of useCallback
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  // Example of useMemo
  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>Hook Explorer</h1>
      <h3>useState</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br/>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Log</button>
      <p>Memoized Value: {memoizedValue}</p>
      <Counter />
    </div>
  );
}

// Example of useContext
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme.background, color: theme.foreground }}>Themed Button</button>;
}

function App() {
  return (
    <ThemeContext.Provider value={{ background: 'black', foreground: 'white' }}>
      <div>
        <HookExplorer />
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
