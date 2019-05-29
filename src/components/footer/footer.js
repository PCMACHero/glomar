import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton } from '@material-ui/core';
import Call from '@material-ui/icons/Call';
import Email from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" elevation={3} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="initial">
            Glomar Pro Bats 2019©
          </Typography>
          <IconButton>
            <a href="mailto:glomar@glomar.bats"><Email color="primary"/></a>
              
              
          </IconButton>
          <IconButton>
            <a href="tel:1-408-555-5555"><Call color="primary"/></a>
              
              
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;