import React,{useEffect} from 'react'
import Card from './card';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../actions/postActions';

import TextField from 'material-ui/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from 'material-ui/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SelectField } from 'material-ui';
import Load from './Loading';
import Error from './Error';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



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

var state={
    searchText:"",
    type:"",

};



const Posts=()=>{
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts)
    const loading =useSelector(state => state.posts.loading);
    const error =useSelector(state => state.posts.error);

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const OnTextChange= (e) =>{
        state.searchText=e.target.value;

    }
    
    const HandleChange =(e,k,p) =>{
        state.type=p;
        
    }

    const HandleSubmit =()=>{
        dispatch(getPosts(state));
    }
    
    
    useEffect(()=>{
        dispatch(getPosts(state));
    },[]);
    
    while(loading===true){
        return(
            <div>
                <Load/>
            </div>
        )
    }
    

    return (
        <>
            <TextField id="textField" 
                onChange={OnTextChange}
                floatingLabelText="Search Restaurant"
                fullWidth={true}
            />
            <br/>

            <SelectField
                className={classes.root}
                floatingLabelText="Restaurant Type"
                id="selectField"
                value={state.type}
                onChange={HandleChange}
                >
                <MenuItem value={""}>All</MenuItem>
                <MenuItem value={"Lebanese"}>Lebanese</MenuItem>
                <MenuItem value={"American"}>American</MenuItem>
                <MenuItem value={"Italian"}>Italian</MenuItem>
                <MenuItem value={"Japanese"}>Japanese</MenuItem>
            </SelectField>
            <br/>

            <Button onClick={HandleSubmit} variant="contained" color="secondary">Search</Button>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        
                        {posts.length>0 && posts.map((post) => (
                            <Card post={post} key={post.id} />

                        )) }
                        {posts.length===0 && <p>No restaurants availble </p>}
                        <br/>
                        {error && !loading && <p>{error} </p>}
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default Posts;