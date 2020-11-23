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
  });

export default function Cards(props){
    
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick=(e)=>{
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;
      let visit={restaurant:e.currentTarget.value,date:today,}
      console.log(visit);
      dispatch(postVisit(visit));
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
            <Button size="small" color="primary" onClick={handleClick} value={ props.post.restaurantName} 
            >
              Visit
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
}


