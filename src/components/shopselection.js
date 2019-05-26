import React from 'react'
import CustomizedSnackbars from './snackbar';
import { Button } from '@material-ui/core';

export default class ShopSelection extends React.Component{
    state={
        
    }
    
    render(){
        return (
           
                
                <div className={this.props.show?`shop-selection animated ${this.props.firstOpen?"slideInLeft":"slideInUp"} fast`:"shop-selection animated slideOutDown fast"} 
            // style={{display:this.props.show?"flex":"none"}}
                
            >   
                <div className="block">
                
                <Button variant="contained" color="primary" 
                // className={classes.margin} 
                onClick={()=>this.props.openSnack("info","3 bats for $230. Use code 3PACKDEAL",5000)}
                >
        Deals
      </Button>
                </div>
                <div className="shop-item" 
                
                onClick={()=>{this.props.onClick("G243 Pro Model")}}>
                <div className="shop-item-image"
                style={{backgroundImage:`url(${this.props.models["G243 Pro Model"].image})`, backgroundSize:"cover"}}
                ></div>
                <div className="shop-item-text">G243 Pro Model</div>
                
                </div>
                <div className="shop-item"
                style={{backgroundImage:`url(${this.props.models["GSoftball Pro Model"].image})`, backgroundSize:"cover"}}
                onClick={()=>{this.props.onClick("GSoftball Pro Model")}}>
                <div className="shop-item-text">GSoftball Pro Model</div>
                </div>
                <div className="shop-item"
                style={{backgroundImage:`url(${this.props.models["G271 Pro Model"].image})`, backgroundSize:"cover"}}
                onClick={()=>{this.props.onClick("G271 Pro Model")}}>
                <div className="shop-item-text">G271 Pro Model</div>
                </div>
                <div className="shop-item"
                style={{backgroundImage:`url(${this.props.models["G271 Pro YOUTH BAT"].image})`, backgroundSize:"cover"}}
                onClick={()=>{this.props.onClick("G271 Pro YOUTH BAT")}}>
                <div className="shop-item-text">G271 Pro YOUTH BAT</div>
                </div>
                <div className="shop-item" 
                style={{backgroundImage:`url(${this.props.models["G110 Pro Model"].image})`, backgroundSize:"cover"}}
                onClick={()=>{this.props.onClick("G110 Pro Model")}}>
                <div className="shop-item-text">G110 Pro Model</div>
                </div>
                <div className="shop-item" 
                style={{backgroundImage:`url(${this.props.models["G13 Pro Model"].image})`, backgroundSize:"cover"}}
                onClick={()=>{this.props.onClick("G13 Pro Model")}}>
                <div className="shop-item-text">G13 Pro Model</div>
                </div>
                <div className="shop-item" 
                style={{backgroundImage:`url(${this.props.models["G141 Pro Model"].image})`, backgroundSize:"cover"}}
                onClick={()=>{this.props.onClick("G141 Pro Model")}}>
                <div className="shop-item-text">G141 Pro Model</div>
                </div>
                <div className="shop-item" 
                style={{backgroundImage:`url(${this.props.models["G161 Pro Model"].image})`, backgroundSize:"cover"}}
                onClick={()=>{this.props.onClick("G161 Pro Model")}}>
                <div className="shop-item-text">G161 Pro Model</div>
                </div>
            </div>
           
            
            
        )
    }
}