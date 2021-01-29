import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import 'bootstrap/dist/css/bootstrap.css';
import './ejemplo.css';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);
  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h1>
        Counter: <Small value={counter} />
      </h1>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
