import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Post.scss';

export const Post = ({ post, posts }) => {
  const { postId } = useParams();
  const currentPost = posts.filter((post1) => post1.id === postId)[0];
  const {
    id, userId, createdAt, editedAt, image, content,
  } = post || currentPost;

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
  }),
  posts: PropTypes.arrayOf(PropTypes.shape()),
};

Post.defaultProps = {
  post: null,
  posts: [],
};
