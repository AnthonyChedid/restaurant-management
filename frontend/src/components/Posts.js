import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    componentWillMout(){
        this.props.fetchPosts();
    }
    render() {
        const postItems=this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.restaurantName}</h3>
                <p>{post.cost}</p>s

            </div>
        ));this.setState();
        return (
            <div>
                {postItems}
             </div>
        )
    }
}
Posts.PropTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}
const  mapStateToProps =state => ({
    posts: state.posts
});

export default connect(mapStateToProps,{ fetchPosts })(Posts);
