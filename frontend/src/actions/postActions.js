import { FETCH_POSTS , NEW_POST } from './Types';

export const fetchPosts=() => dispatch =>{
    console.log("fetching");
    fetch('http://localhost:8085/api/v1/restaurants')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload:posts
        })
    );
};

