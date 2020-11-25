import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Posts from './Posts';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

  const Pages=({postsPerPage,totalPosts,paginate}) =>{
  const classes = useStyles();

  var pageNumber = 0;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber=pageNumber+1;
  };
  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
    <div className={classes.root}>
      <Pagination count={pageNumber} color="secondary" onChange={handleChange}/>
    </div>
  );
}

export default Pages