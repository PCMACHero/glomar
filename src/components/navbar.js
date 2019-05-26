import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartIcon from '@material-ui/icons/ShoppingCart'

import SwipeableTemporaryDrawer from './homepage/cartButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    marginRight: "30px",
    color: "white"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Home
            </Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/shop">
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Shop
            </Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/">
          
          </Link>
          
          <SwipeableTemporaryDrawer emptyCart={()=>props.emptyCart()} removeItem={props.removeItem} magicClass={classes.margin} badgeContent={props.cartAmount} bats={props.bats} color="secondary" icon={<CartIcon />}/>
          
          {/* <Badge className={classes.margin} badgeContent={props.cartAmount} color="secondary">
          <CartIcon onClick={()=>{
            console.log("clicekd")
            
          }}/>
        </Badge> */}
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);