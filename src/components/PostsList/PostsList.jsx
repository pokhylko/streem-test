import React, { useState, useEffect } from 'react';
import {
  Switch, Route, Link, useParams, useRouteMatch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { getPosts } from '../../api/posts';
import { Post } from '../Post';
import { User } from '../User';

import './PostsList.scss';

export const PostsList = ({ users }) => {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();
  const { path, url } = useRouteMatch();

  const currentUser = users.filter((user) => user.id === userId)[0];

  useEffect(() => {
    getPosts(userId)
      .then((allPosts) => setPosts(allPosts));
  }, [userId]);

  return (
    <Switch>
      <Route exact path={path}>
        <div className="posts">
          <User user={currentUser} />

          <div className="posts__list">
            {posts.map((post) => (
              <Link
                className="posts__link"
                to={`${url}/post${post.id}`}
                key={post.id}
              >
                <Post post={post} key={post.id} />
              </Link>
            ))}
          </div>
        </div>
      </Route>

      <Route path={`${path}/post:postId`}>
        {posts.length > 0 && (
          <Post posts={posts} />
        )}
      </Route>
    </Switch>
  );
};

PostsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
