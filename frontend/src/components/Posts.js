import React,{useEffect} from 'react'
import Card from './card';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../actions/postActions';
import TextField from 'material-ui/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from 'material-ui/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Load from './Loading';
import Pages from './Pagination';
import Error from './Error';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minWidth: 120,
      marginTop:15
    },
    control: {
      padding: theme.spacing(2),
    },
    bttn:{
        marginLeft:40,
    },
    mrgn:{
        marginTop:15,
    },
    bttnmrg:{
        marginTop:30,
    }
  }))


  var state={
    searchText:"",
    type:"",
};



const Posts=()=>{
    
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts)
    const loading =useSelector(state => state.posts.loading);
    const error =useSelector(state => state.posts.error);

    const [spacing] = React.useState(2);
    const classes = useStyles();

    const [type, setType] = React.useState("");
    const [currentPage,setCurrentPage]=React.useState(1);
    const [postsPerPage]=React.useState(9);

    const OnTextChange= (e) =>{
        state.searchText=e.target.value;
    }
    
    const HandleChange =(e) =>{
      state.type=e.target.value;
      setType(e.target.value)
    }

    const HandleSubmit =()=>{
        
        dispatch(getPosts(state));
        state.searchText="";
        setCurrentPage(1);
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

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
        const indexOfLastPost = currentPage * postsPerPage;
    };

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost=indexOfLastPost - postsPerPage;
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);
    
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} >
                    <Grid container justify="center" >
                        <TextField id="textField" 
                            onChange={OnTextChange}
                            floatingLabelText="Search Restaurant"
                            fullWidth={true}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Grid container justify="center">
                        <FormControl fullWidth className={classes.mrgn}>
                            <InputLabel id="selectField">Restaurant Type</InputLabel>
                                <Select
                                    className={classes.root}
                                    floatingLabelText="Restaurant Type"
                                    id="selectField"
                                    value={type}
                                    onChange={HandleChange}
                                    >
                                    <MenuItem value={""}>All</MenuItem>
                                    <MenuItem value={"Lebanese"}>Lebanese</MenuItem>
                                    <MenuItem value={"American"}>American</MenuItem>
                                    <MenuItem value={"Italian"}>Italian</MenuItem>
                                    <MenuItem value={"Japanese"}>Japanese</MenuItem>
                                 </Select>
                        </FormControl>

                    </Grid>
                </Grid>
            
                 <Grid item xs={12} sm={3}>
                    <Grid container justify="center" className={classes.bttnmrg}>
                        <Button onClick={HandleSubmit} className={classes.bttn} variant="contained" color="secondary">Search</Button>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid container className={classes.root} spacing={6} >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing} >
                        {posts.length>0 && currentPosts.map((post) => (
                            <Card post={post} key={post.id} />
                            )) }
                        
                        {posts.length===0 && <p>No restaurants availble </p>}
                        <Error error={error}/>
                    </Grid>
                </Grid>
            </Grid>
            <Pages 
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
    </Container>
    
        

    )
     
}

export default Posts;