import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import 'bootstrap/dist/css/bootstrap.css';

export const HomeScreen = () => {
  const { user } = useContext(UserContext);

  // console.log(userContext);
  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </div>
  );
};
