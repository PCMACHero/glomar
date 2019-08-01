import React from 'react';
import {Link} from 'react-router-dom'
import Red from '@material-ui/core/colors/red'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import { tsPropertySignature } from '@babel/types';
import Badge from '@material-ui/core/Badge';
import { StylesContext } from '@material-ui/styles/StylesProvider';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function SwipeableTemporaryDrawer(props) {
    
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,

  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });

  };



  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      
    >
      <List>
        {props.bats.map((bat, index) => (
          <ListItem button key={index}>
            <ListItemIcon onClick={()=>props.removeItem(index)}><RemoveIcon color="error"/></ListItemIcon>
            <ListItemText primary={`${bat.model} - ${bat.wood} / ${bat.color} / ${bat.size}" (qty ${bat.quantity})`}  />
          </ListItem>
        ))}
        <ListItem onClick={()=>props.emptyCart()} style={{backgroundColor:"red", color:"white"}} button>
            <ListItemIcon>
              {/* <RemoveIcon color="error"/> */}
              </ListItemIcon>
            <ListItemText primary="Empty Your Cart"  />
          </ListItem>
      </List>
      <Divider />
      <List>
          <Link to="/checkout" style={{ textDecoration: 'none' }} >
          <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              
              <ListItemText primary={"Checkout"} 
              onClick={toggleDrawer(side, false)}
              onKeyDown={toggleDrawer(side, false)}/>
            </ListItem>
          </Link>
          
        
      </List>
    </div>
  );

  return (
    <div>
      
      <Button onClick={toggleDrawer('top', true)}><Badge className={props.magicClass} badgeContent={props.badgeContent} color={props.color}>
          {props.icon}
        </Badge></Button>
      
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        {fullList('top')}
      </SwipeableDrawer>
      
    </div>
  );
}

export default SwipeableTemporaryDrawer;