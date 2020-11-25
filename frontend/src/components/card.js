import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {postVisit} from '../actions/visitActions'

const useStyles = makeStyles({
    root: {
      maxWidth: 320,
      minWidth: 320,
      marginRight:10,
      marginLeft:30,
      marginTop:15,
      marginBottom:15,
    },
    image:{
      height:500,
      width:400,
      marginTop:20,
      marginBottom:20,
      marginRight:10,
     
    },
    container:{
      margin:1,
    }
    

    
  });


export default function Cards(props){
    
    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleClick=(e)=>{
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;
      let visit={restaurant:e.currentTarget.value, date:today,}

      dispatch(postVisit(visit));
      setOpen(true);
      
    }  

  
    const handleDialog = () => {
      setOpenDialog(true);
    };
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };


  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

    

    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Restaurant image"
              height="140"
              image={props.post.image}
              title={props.post.restaurantName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {props.post.restaurantName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.post.address}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" value={props.post.restaurantName}onClick={handleClick}>
              Visit
            </Button>
            <Button size="small" color="primary" onClick={handleDialog}>
              Learn More
            </Button>

            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              fullWidth={true}
              maxWidth={"md"}
            >
            
            <DialogContent  maxWidth={"lg"}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                  <img src={props.post.image} className={classes.image}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <br/>
                <Typography variant="h6" fontWeight="fontWeightBold" gutterBottom>
                  <Box fontWeight="fontWeightBold" m={1}>Name : </Box>{props.post.restaurantName}
                  </Typography><br/>
                <Typography variant="h6" gutterBottom><Box fontWeight="fontWeightBold" m={1}>
                  Type : </Box>{ props.post.restaurantType}</Typography><br/>
                <Typography variant="h6" gutterBottom><Box fontWeight="fontWeightBold" m={1}>
                  Average cost for two : </Box>{ props.post.cost}$</Typography><br/>
                <Typography variant="h6" gutterBottom><Box fontWeight="fontWeightBold" m={1}>
                  Address : </Box>{ props.post.address}</Typography><br/>
                <Typography variant="h6" gutterBottom><Box fontWeight="fontWeightBold" m={1}>
                  Phone Number : </Box>{ props.post.phone}</Typography><br/>
                </Grid>
                
                
      </Grid>
            </DialogContent>
          </Dialog>


          </CardActions>
          <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          A Visit to {props.post.restaurantName} has been registered
        </Alert>
      </Snackbar>
        </Card>
      );
}


