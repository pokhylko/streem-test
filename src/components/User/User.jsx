import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  const {
    id, createdAt, name, avatar, phone, city, role,
  } = user;

  return (
    <li>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{`ID: ${id}`}</p>
      <p>{`createdAt: ${createdAt}`}</p>
      <p>{`phone: ${phone}`}</p>
      <p>{`city: ${city}`}</p>
      <p>{`role: ${role}`}</p>
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
};
