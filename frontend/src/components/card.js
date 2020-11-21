import React from 'react';

const Card = (props)=>{
    return( 
        <div classname="card">
            <div className="card-body">
                <h5 className="card-title">{props.post.restaurantName}</h5>
                

            </div>
        </div>
    )
}


export default Card;
