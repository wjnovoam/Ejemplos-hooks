import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

import './ejemplo.css';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //     setCounter( counter + 1 );
  // }

  const increment = useCallback(
    num => {
      setCounter(c => c + num);
    },
    [setCounter]
  );

  useEffect(() => {
    // ???
    console.log('Se utilizo useEffec');
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
