import React from 'react';

import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';

import NavBar from './components/navbar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/search/Search';

import store from './store';

function App(){
    return (
      <Provider store={store}>
        <MuiThemeProvider>
        <div className="App">
          <NavBar/>
         
          <Posts/>
        </div>
        </MuiThemeProvider>
      </Provider>
    );
  }


export default App;