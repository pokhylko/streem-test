import React, { useState, useEffect } from 'react';
import './App.scss';

import { getUsers } from './api/users';
import { UsersList } from './components/UsersList';

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((allUsers) => setUsers(allUsers));
  }, []);

  return (
    <div className="App">
      <UsersList users={users} />
    </div>
  );
};
