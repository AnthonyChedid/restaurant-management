import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import App from '../../App.js';
import page2 from '../page2';
import { white } from 'material-ui/styles/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bttn:{
    color:"white",
  }
}));

function Navbar() {
  const classes = useStyles();

  const bttn={
      color:'white',
    };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
          <Button><Link style={bttn} to="/"> page 1</Link></Button>
          </Typography>
          <Typography variant="h6" >
          <Button><Link style={bttn} to="/page2"> page 2</Link></Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;