import React, { memo, useEffect } from 'react';
import { Item } from './Item';

export const List = memo(({ users, handlerDelete }) => {
  useEffect(() => {
    // console.log('List render');
  });

  return (
    <ul>
      {users.map(user => (
        <Item key={user.id} user={user} handlerDelete={handlerDelete} />
      ))}
    </ul>
  );
});
