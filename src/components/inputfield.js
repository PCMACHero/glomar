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
    engraving:"",
    quantity:1,
    engravingLabel:"Engraving (Optional)"


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

          
           <TextField
              onFocus={()=>{this.setState({engravingLabel:""})}}
              style={{borderColor:"blue"}}
              label={this.state.engravingLabel}
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e)=>{this.handleChange(e)}}
              value={this.state.engraving}
              inputProps={{ maxLength: 20}}
              color="secondary"
              InputLabelProps={{
                shrink: false,
              }}
            />
            <div className="quantity-row">
              
              <TextField
            id="standard-number"
            value={this.state.quantity}
            onChange={(e)=>{this.handleChangeQuant(e)}}
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
                if(this.state.quantity<1){
                  return
                }
                this.setState({quantity: this.state.quantity - 1})}} />
          <FloatingActionButton onClick={()=>{
            console.log("clicked")
            this.setState({quantity: this.state.quantity + 1})}} 
            color="secondary" icon={<AddIcon/>} label="Add"/>
            </div>
            
        
            
         
          </div>
          
        
      );
}
  
}



export default InputField;