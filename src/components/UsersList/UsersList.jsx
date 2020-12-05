import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

import './UsersList.scss';

export const UsersList = ({ users }) => (
  <div className="user-list">
    {users.map((user) => (
      <User
        user={user}
        key={user.id}
      />
    ))}
  </div>

);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
