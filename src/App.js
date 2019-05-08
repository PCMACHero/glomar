import 'intersection-observer'
import React from 'react';
import 'animate.css'

import {HashRouter, Route} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from './components/navbar'
import './App.css';
import blueGrey from '@material-ui/core/colors/blueGrey'
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import HomePage from './components/homepage/homepage';
import './mobile.css'
import { indigo } from '@material-ui/core/colors';
import Shop from './components/shop/shop';

function App() {
  return (
    <HashRouter>
      <MuiThemeProvider theme={theme}>
      
        <div className="App">
        <Nav/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/shop" exact component={Shop}/>
        </div>
      </MuiThemeProvider>
    </HashRouter>
  );
}

export default App;


const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: indigo,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});