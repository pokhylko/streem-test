import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ user }) => {
  const {
    id, createdAt, name, avatar, phone, city, role,
  } = user;

  return (
    <div className="user">
      <img className="user__image" src={avatar} alt={name} />
      <h2 className="user__name">{name}</h2>
      <p>{`ID: ${id}`}</p>
      <p>{`Created at: ${createdAt}`}</p>
      <p>{`Phone: ${phone}`}</p>
      <p>{`City: ${city}`}</p>
      <p>{`Role: ${role}`}</p>
    </div>
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
