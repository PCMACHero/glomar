import React from 'react'

export default class ShopSelection extends React.Component{
    state={
        
    }
    
    render(){
        return (
            <div className="shop-selection" onClick={()=>{this.props.onClick("G243")}}>
                <div className="shop-item">
                G243 Pro Model
                </div>
                <div className="shop-item">
                GSoftball Pro Model
                </div>
                <div className="shop-item">
                G271 Pro Model
                </div>
                <div className="shop-item">
                G271 Pro Youth Bat
                </div>
                <div className="shop-item">
                G110 Pro Model
                </div>
                <div className="shop-item">
                G13 Pro Model
                </div>
                <div className="shop-item">
                G141 Pro Model
                </div>
                <div className="shop-item">
                G161 Pro Model
                </div>
            </div>
        )
    }
}