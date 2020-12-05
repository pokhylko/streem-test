import React, { useState, useEffect } from 'react';
import './App.scss';

import { getUsers } from './api/users';
import { UsersList } from './components/UsersList';
import { PostsList } from './components/PostsList';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(0);

  useEffect(() => {
    getUsers()
      .then((allUsers) => setUsers(allUsers));
  }, []);

  console.log(selectedUserId);

  return (
    <div className="App">
      <UsersList users={users} setSelectedUserId={setSelectedUserId} />

      {selectedUserId !== 0 && (
        <PostsList selectedUserId={selectedUserId} />
      )}
    </div>
  );
};
