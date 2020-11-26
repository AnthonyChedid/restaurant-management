import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import NavBar from './components/navbar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Page2 from './components/page2';
import store from './Store';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const theme= createMuiTheme({
  palette:{
    primary:green,
  }
})
function App(){
    return (
      <Provider store={store}>
        <Router>
        <MuiThemeProvider the>
          <div className="App">
            <NavBar/>
            <Switch>
              <Route path="/" exact component={Posts}/>
              <Route path="/page2" component={Page2}/>
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
      </Provider>
    );
  }

export default App;