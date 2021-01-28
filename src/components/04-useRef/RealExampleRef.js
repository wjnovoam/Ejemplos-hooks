import React, { useState } from 'react';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';
import './ejemplo.css';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Real Example Ref</h1>
      <hr />

      {show && <MultipleCustomHook />}

      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show / Hide
      </button>
    </>
  );
};
