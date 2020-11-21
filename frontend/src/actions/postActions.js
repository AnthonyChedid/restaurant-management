import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
  fetch('http://localhost:8085/api/v1/restaurants')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};




