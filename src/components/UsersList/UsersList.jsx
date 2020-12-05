import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export const UsersList = ({ users, setSelectedUserId }) => (
  <ul>
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
