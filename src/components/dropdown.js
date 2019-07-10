import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
});

class DropDown extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = (event, num) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
    this.props.choose(num)
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        
        <div>
          <Button
          color="secondary"
          variant="contained"
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            {this.props.text}
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper style={{zIndex:2}}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList >
                      <MenuItem onClick={(e)=>this.handleClose(e,31)}>31"</MenuItem>
                      <MenuItem onClick={(e)=>this.handleClose(e,32)}>32"</MenuItem>
                      <MenuItem onClick={(e)=>this.handleClose(e,32.5)}>32.5"</MenuItem>
                      <MenuItem onClick={(e)=>this.handleClose(e,33)}>33"</MenuItem>
                      <MenuItem onClick={(e)=>this.handleClose(e,33.5)}>33.5"</MenuItem>
                      <MenuItem onClick={(e)=>this.handleClose(e,34)}>34"</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

DropDown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DropDown);