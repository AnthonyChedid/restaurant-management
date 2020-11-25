import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

  const Pages=({postsPerPage,totalPosts,paginate}) =>{
  const classes = useStyles();
  var pageNumber = 0;
  
  const handleChange = (event, value) => {
    paginate(value);
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber=pageNumber+1;
  };
  
  return (
    <div className={classes.root}>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="10vh"
        >
      <Pagination count={pageNumber} color="secondary" onChange={handleChange}/></Box>
    </div>
  );
}

export default Pages