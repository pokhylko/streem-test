import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ user, setSelectedUserId }) => {
  const {
    id, createdAt, name, avatar, phone, city, role,
  } = user;

  return (
    <li className="user">
      <img className="user__image" src={avatar} alt={name} />
      <h2 className="user__name">{name}</h2>
      <p>{`ID: ${id}`}</p>
      <p>{`createdAt: ${createdAt}`}</p>
      <p>{`phone: ${phone}`}</p>
      <p>{`city: ${city}`}</p>
      <p>{`role: ${role}`}</p>
      <button
        type="button"
        onClick={() => setSelectedUserId(id)}
      >
        Get posts
      </button>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    createdAt: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  setSelectedUserId: PropTypes.func.isRequired,
};
