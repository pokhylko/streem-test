import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getPosts } from '../../api/posts';
import { Post } from '../Post';
import { User } from '../User';

export const PostsList = withRouter(
  ({ match, users }) => {
    const [posts, setPosts] = useState([]);
    const selectedUserId = match.params.userId;
    const currentUser = users.filter((user) => user.id === selectedUserId)[0];

    useEffect(() => {
      getPosts(selectedUserId)
        .then((allPosts) => setPosts(allPosts));
    }, [selectedUserId]);

    return (
      <div>
        <User user={currentUser} />

        <div>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  },
);

PostsList.propTypes = {
  match: PropTypes.shape(),
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
