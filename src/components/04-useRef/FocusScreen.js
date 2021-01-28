import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ejemplo.css';

//useRef es una referencia mutable

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>useRef</h1>
      <hr />

      <input ref={inputRef} className="form-control" placeholder="Su nombre" type="text" />

      <button className="btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
