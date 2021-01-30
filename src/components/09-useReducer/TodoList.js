import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          i={i}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};
