import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

import './UsersList.scss';

export const UsersList = ({ users, setSelectedUserId }) => (
  <ul className="user-list">
    {users.map((user) => (
      <User
        user={user}
        key={user.id}
        setSelectedUserId={setSelectedUserId}
      />
    ))}
  </ul>

);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSelectedUserId: PropTypes.func.isRequired,
};
