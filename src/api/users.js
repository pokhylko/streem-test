import { BASE_URL } from './api';

export const getUsers = () => fetch(BASE_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  });
