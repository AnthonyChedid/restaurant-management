import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from '../actions/postActions';

const Posts = () => {
    
  //----- redux and dispatch the action
  const techSelector = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const getTechNews = () => dispatch(fetchPosts());
  

  useEffect(()=>{
    getTechNews();
 }, [])


  return(
      <React.Fragment>
          <section>
              <div>
                  {techSelector.items.map(x => {
                      return (
                          <div key={x.id}> 
                              <img src={x.image} />
                              <h2>{x.restaurantName}</h2>
                              <p>{x.address}</p>
                          </div>
                      )
                  })}
              </div>
          </section>
      </React.Fragment>
  )   
}

export default Posts;