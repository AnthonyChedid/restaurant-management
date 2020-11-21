import React,{useEffect} from 'react'
import Card from './card';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../actions/postActions';

const Posts=()=>{
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts)
    const loading =useSelector(state => state.posts.loading);
    const error =useSelector(state => state.posts.error);

    useEffect(()=>{
        dispatch(getPosts());
    },[]);

    return (
        <div>
            {posts.loading && <p>Loading...</p>}
            {posts.length>0 && posts.map((post) => (
                <Card post={post} key={post.id} />

            )) }
            {posts.length===0 && <p>No restaurants availble</p>}
            {error && !loading && <p>{error} </p>}
        </div>

    )
}

export default Posts;