import React, { useState, useEffect } from "react";

import "./effect.css";
import { Message } from "./Message";

//Es un hook donde nos va apermiter a dar un efecto segundario, cuando algo suceda en nuetro componente

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: "", email: "" });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("formState cambio");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambio");
  }, [email]);

  const handleInputChange = ({ target }) => {
    // console.log([target.name]);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <input type="text" name="email" className="form-control" placeholder="email@gmail.com" autoComplete="off" value={email} onChange={handleInputChange} />
      </div>
      {name === "123" && <Message />}
    </>
  );
};
