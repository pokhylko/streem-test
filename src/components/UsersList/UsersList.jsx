import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export const UsersList = ({ users }) => (
  <ul>
    {users.map((user) => (<User user={user} key={user.id} />))}
  </ul>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
