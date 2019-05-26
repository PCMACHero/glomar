import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import FloatingActionButton from './floatingbtn';




class InputField extends React.Component{

state={
    


}
handleChange=(e)=>{
   
    this.setState({
        engraving: e.target.value
    })
}
handleChangeQuant=(e)=>{
   
    this.setState({
        quantity: e.target.value
    })
}

render(){
    return (
        
          
          <div className="input-fields">

          
           
            <div className="quantity-row">
              
              <TextField
            id="standard-number"
            value={this.props.quantity}
            
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">Quantity</InputAdornment>,
              readOnly: true,
            }}
            style={{
              // marginLeft: theme.spacing.unit,
              // marginRight: theme.spacing.unit,
              width: 80,
            }}
          
            margin="normal"
          />
          <FloatingActionButton color="primary" icon={<RemoveIcon/>} label="Remove"
              onClick={()=>{
                console.log("clicked")
                if(this.props.quantity<1){
                  return
                }
                this.props.update((this.props.quantity - 1))}} />
          <FloatingActionButton onClick={()=>{
            console.log("clicked")
            this.props.update((this.props.quantity + 1))}} 
            color="secondary" icon={<AddIcon/>} label="Add"/>
            </div>
            
        
            
         
          </div>
          
        
      );
}
  
}



export default InputField;