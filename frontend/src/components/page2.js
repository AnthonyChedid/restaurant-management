import React,{useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import {useSelector, useDispatch} from 'react-redux';
import Load from './Loading';

import { Provider } from 'react-redux';
import store from '../store';
import {getVisited} from '../actions/visitedActions';
import {getPosts} from '../actions/postActions';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 500,
    maxWidth:500,
    marginTop:30,
  },
});

  
const Page2=()=>{

  const dispatch = useDispatch();
  const visited = useSelector(state => state.visited.visited)
  const loading =useSelector(state => state.visited.loading);
  const error =useSelector(state => state.visited.error);


    
  useEffect(()=>{
    dispatch(getVisited());
    },[]);

    const classes = useStyles();
  
    while(loading===true){
      return(
          <div>
              <Load/>
          </div>
      )
  }

  return (
    <>
    <Container maxWidth="sm">
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Restaurant Name</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">Date Visited</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visited.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.restaurant}
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {visited.length===0 && <p>No visits yet</p>}
    </Container>
    
    </>
    )
  }



export default Page2;