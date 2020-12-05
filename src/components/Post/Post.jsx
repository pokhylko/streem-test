import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

export const Post = ({ post }) => {
  const {
    id, userId, createdAt, editedAt, image, content,
  } = post;

  return (
    <div className="post">
      <img className="post__image" src={image} alt={`${userId} avatar`} />

      <div className="post__content">
        <p>{`ID: ${id}`}</p>
        <p>{`User ID: ${userId}`}</p>
        <p>{`Created at: ${createdAt}`}</p>
        <p>{`Edited at: ${editedAt}`}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    createdAt: PropTypes.string,
    editedAt: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};
