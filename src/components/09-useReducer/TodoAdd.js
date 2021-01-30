import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={description}
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender ..."
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-outline-primary form-control mt-2"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
