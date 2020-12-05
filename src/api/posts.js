import { BASE_URL } from './api';

export const getPosts = (userId) => fetch(`${BASE_URL}/${userId}/posts`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  });
