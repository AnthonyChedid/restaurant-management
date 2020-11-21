// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchPosts } from '../../actions/postActions';
// import TextField from 'material-ui/TextField';
// import SelectField from 'material-ui/SelectField';
// import { MenuItem } from 'material-ui';

// class Search extends Component {
//   componentWillMount() {
//     this.props.fetchPosts();
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.newPost) {
//       this.props.posts.unshift(nextProps.newPost);
//     }
//   }

//   onTextChange = (e) => {
//     this.setState({[e.target.restaurantName]: e.target.value});
//   };

//   render() {  
//     console.log(this.props.posts);
//     return (
//       <div>
//         <TextField
//         name="searchText"
//         value={this.props.posts.searchText}
//         onChange={this.onTextChange}
//         floatingLabelText="Search for Restaurant"
//         fullWidth={true}
//         />
//         <br/>
//         <SelectField
//           name="Type"
//           floatingLabelText="Type"
//           value={this.props.posts.restaurantType}
//           onChange={this.onTypeChange}
//           >
//             <MenuItem value={1} primaryText="Lebanese" />
//             <MenuItem value={2} primaryText="American" />
//             <MenuItem value={3} primaryText="Italian" />
//             <MenuItem value={4} primaryText="Japanese" />
//           </SelectField>
//           <br></br>

//       </div>
//     );
//   }
// }

// Search.propTypes = {
//   fetchPosts: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired,
//   newPost: PropTypes.object
// };

// const mapStateToProps = state => ({
//   posts: state.posts.items,
//   newPost: state.posts.item
// });

// export default connect(mapStateToProps, { fetchPosts })(Search);