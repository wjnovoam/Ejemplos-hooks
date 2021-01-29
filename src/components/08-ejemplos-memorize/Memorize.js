import React, { useState, useEffect, useMemo } from 'react';
import { List } from './List';

import './ejemplo.css';

const initialUsers = [
  { id: 1, name: 'Luis' },
  { id: 2, name: 'william' },
];
export const Memorize = () => {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter(user => {
        // console.log('Filter process');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, users]
  );

  const handlerDelete = userId => {
    setUsers(users.filter(user => user.id != userId));
  };

  useEffect(() => {
    console.log('App render');
  });

  // console.log(users);

  return (
    <>
      <h1>Otro ejemplo de React memo, useMemo y useCallback</h1>
      <hr />
      <div>
        <input type="text" name="nombre" id="" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSearch}>Search</button>
        <List users={filteredUsers} handlerDelete={handlerDelete} />
      </div>
    </>
  );
};
