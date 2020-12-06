import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { User } from '../User';

import './UsersList.scss';

export const UsersList = ({ users }) => (
  <div className="user-list">
    {users.map((user) => (
      <Link
        to={`/user${user.id}`}
        key={user.id}
      >
        <User user={user} />
      </Link>
    ))}
  </div>

);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
