import React, { useState, createContext } from 'react';

// Creating Context Object
export const CounterContext = createContext();

// Creating a Provider for components to consume and subscribe to changes
export const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  return <CounterContext.Provider value={[count, setCount]}>{props.children}</CounterContext.Provider>;
}
