import React, { memo, useEffect } from 'react';

export const Item = memo(({ user, handlerDelete }) => {
  useEffect(() => {
    console.log('Item render' + user.name);
  });
  return (
    <li>
      {user.name}
      <button onClick={() => handlerDelete(user.id)}>Eliminar</button>
    </li>
  );
});

// https://www.youtube.com/watch?v=maUZjMJ4bF4
