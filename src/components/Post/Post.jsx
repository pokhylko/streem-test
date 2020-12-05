import React from 'react';
import PropTypes from 'prop-types';

export const Post = ({ post }) => {
  const {
    id, userId, createdAt, editedAt, image, content,
  } = post;

  return (
    <div className="post">
      <img src={image} alt={`${userId} avatar`} />
      <p>{`ID: ${id}`}</p>
      <p>{`User ID: ${userId}`}</p>
      <p>{`Created at: ${createdAt}`}</p>
      <p>{`Edited at: ${editedAt}`}</p>
      <p>{content}</p>
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
