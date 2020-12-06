import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import { getUsers } from './api/users';
import { UsersList } from './components/UsersList';
import { PostsList } from './components/PostsList';

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((allUsers) => setUsers(allUsers));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UsersList users={users} />
        </Route>
        <Route path="/user:userId">
          {users.length > 0 && (
            <PostsList users={users} />
          )}
        </Route>
      </Switch>
    </div>
  );
};
