import React,{useEffect} from 'react'
import Card from './card';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../actions/postActions';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 10,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));



const Posts=()=>{
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts)
    const loading =useSelector(state => state.posts.loading);
    const error =useSelector(state => state.posts.error);

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };
    
    useEffect(()=>{
        dispatch(getPosts());
    },[]);

    return (
        <>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {posts.loading && <p>Loading...</p>}
                        {posts.length>0 && posts.map((post) => (
                            <Card post={post} key={post.id} />

                        )) }
                        {posts.length===0 && <p>No restaurants availble</p>}
                        {error && !loading && <p>{error} </p>}
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default Posts;