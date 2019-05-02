import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'
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
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import HomePage from './components/homepage/homepage';

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
      
        <div className="App">
        <Nav/>
        <Route path="/" exact component={HomePage}/>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;


const theme = createMuiTheme({
  palette: {
    primary: { light: indigo[300], main: indigo[500], dark: indigo[900] },
    secondary: { light: red[300], main: red[500], dark: red[900] },
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