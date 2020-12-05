import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getPosts } from '../../api/posts';
import { Post } from '../Post';

export const PostsList = ({ match }) => {
  const [posts, setPosts] = useState([]);
  const selectedUserId = match.params.userId;

  useEffect(() => {
    getPosts(selectedUserId)
      .then((allPosts) => setPosts(allPosts));
  }, [selectedUserId]);

  return (
    <ul>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  );
};

PostsList.propTypes = {
  match: PropTypes.string.isRequired,
};
