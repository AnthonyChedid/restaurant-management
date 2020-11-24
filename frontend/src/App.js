import React from 'react';

import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';

import NavBar from './components/navbar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/search/Search';
import Page2 from './components/page2';

import store from './store';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App(){
    return (
      <Provider store={store}>
        <Router>
        <MuiThemeProvider>
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