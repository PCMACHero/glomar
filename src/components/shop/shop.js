import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ShopIcon from '@material-ui/icons/Shop';
import { isMobile } from "react-device-detect";
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';


import G243 from '../images/models/G243-1.jpg'
import G243_2 from '../images/models/G243-2.jpg'
import G243_3 from '../images/models/G243-3.jpg'


import GSoftball from '../images/models/GSOFTBALL-1.jpg'
import GSoftball_2 from '../images/models/GSOFTBALL-2.jpg'
import GSoftball_3 from '../images/models/GSOFTBALL-3.jpg'

import G271 from '../images/models/G271-1.jpg'
import G271_2 from '../images/models/G271-2.jpg'
import G271_3 from '../images/models/G271-3.jpg'


import G271Y from '../images/models/YOUTH-1.jpg'
import G271Y_2 from '../images/models/YOUTH-2.jpg'
import G271Y_3 from '../images/models/YOUTH-3.jpg'

import G110 from '../images/models/G110-1.jpg'
import G110_2 from '../images/models/G110-2.jpg'
import G110_3 from '../images/models/G110-3.jpg'

import G13 from '../images/models/G13-1.jpg'
import G13_2 from '../images/models/G13-2.jpg'
import G13_3 from '../images/models/G13-3.jpg'

import G141 from '../images/models/G141-1.jpg'
import G141_2 from '../images/models/G141-2.jpg'
import G141_3 from '../images/models/G141-3.jpg'

import G161 from '../images/models/G161-1.jpg'
import G161_2 from '../images/models/G161-2.jpg'
import G161_3 from '../images/models/G161-3.jpg'

import DropDown from '../dropdown'
import Tooltip from '@material-ui/core/Tooltip';
import './shop.css'
import TextField from '@material-ui/core/TextField';
import InputField from '../inputfield';
import MyButton from './button'
import ShopSelection from '../shopselection';
import { Snackbar } from '@material-ui/core';
import CustomizedSnackbars from '../snackbar';





export default class Shop extends React.Component{
    state={
        isMobile:null,
        firstOpen:true,
        showShop: false,
        itemClicked: "G243 Pro Model",
        
        selectedColor: "Select a Color",
        selectedColorHandle: "(Default)",
        selectedSize:null,
        selectedWood:"Maple",
        engraving:"",
        quantity: 1,

        long:null,
        colorHover: null,
        engravingLabel:"Engraving (Optional)",

        counter:0,
        

        

      
    }

    colorDic={

    }
 

    intervalID=0

    adultSizes=[31,32,32.5,33,33.5,34]
    youthSizes=[26,27,28,29,30]

    normalColors=[
        "Unifinished",
        "Black",
        "Charcoal",
        "Red Mahogany",
        "Forest Green",
        "Navy Blue",
        "Royal Blue",
        "White Stain",
        "Pink"
    ]

    youthColors=[
        "Unifinished",
        "Black",
        "Charcoal",
        "Red Mahogany",
        "Pink",
        "Forest Green",
        "Navy Blue",
        "Royal Blue",
        "White Stain"
    ]


    models={

        "G243 Pro Model":{
            image: [G243, G243_2, G243_3],
            price: 95.00,
            description: "Our G243 model is the true power hitter's bat, fitted with a big barrel and regular size handle.",
            sizes: this.adultSizes,
            colors: this.normalColors
        },
        "GSoftball Pro Model":{
            image: [GSoftball, GSoftball_2, GSoftball_3],
            price: 95.00,
            description: "Our G-SOFT1 model is made specifically to suit softball players. It has a great and sturdy feel.",
            sizes: this.adultSizes,
            colors: this.normalColors
        },
        "G271 Pro Model":{
            image: [G271,G271_2,G271_3],
            price: 95.00,
            description: "A very popular bat features a medium size barrel and a thin handle with a regular flared knob. Provides some pop, while still allowing your hands to get through the zone in a hurry.",
            sizes: this.adultSizes,
            colors: this.normalColors
        },
        "G271 Pro YOUTH BAT":{
            image: [G271Y,G271Y_2,G271Y_3],
            price: 95.00,
            description: "The Glomar Youth bat is a replica of the adult model G271. The Youth bat has a regular size barrel for younger players with a flared knob. Easy to get around that fast ball.",
            sizes: this.youthSizes,
            colors: this.youthColors
        },
        "G110 Pro Model":{
            image: [G110,G110_2,G110_3],
            price: 95.00,
            description: "Modeled after one of the most popular bats in professional baseball, the M110, the G110 is a hallmark of bat technology. It's so good, in fact, that it was used by Manny Ramirez while playing in Los Angeles.",
            sizes: this.adultSizes,
            colors: this.normalColors
        },
        "G13 Pro Model":{
            image: [G13,G13_2,G13_3],
            price: 95.00,
            description: "The G13 carries the big barrel similar to the G243 with a flair on the handle similar to the G271. Excellent bat for the power hitter.",
            sizes: this.adultSizes,
            colors: this.normalColors
        },
        "G141 Pro Model":{
            image: [G141,G141_2,G141_3],
            price: 95.00,
            description: "Quick through the zone with a thin handle and medium size barrel, our G141 model is a great bat for contact hitters.",
            sizes: this.adultSizes,
            colors: this.normalColors
        },
        "G161 Pro Model":{
            image: [G161,G161_2,G161_3],
            price: 95.00,
            description: "Nicknamed “The Lumber,” our G161 model is fitted with a big barrel and thick handle.",
            sizes: this.adultSizes,
            colors: this.normalColors
        },
       
        
        
    }


    changePic=()=>{
        if (this.state.counter===2){
            this.setState({
                counter:0,
                
            }
                
            )
        }else{
            this.setState({
                counter: this.state.counter + 1,
                
            }
                
            )
        }
    }

    showShop=()=>{
        this.setState({
            showShop: !this.state.showShop
        })
    }

    chooseSize=(size)=>{
        console.log("chose ", size)
        this.setState({
            selectedSize:size
        })
    }

    chooseColor=(color)=>{
        this.setState({
            selectedColor: color
        })
    }

    chooseHandleColor=(color)=>{
        this.setState({
            selectedColorHandle: color
        })
    }

    openItem=(item)=>{
        console.log("chose ",item)
        this.setState({
            itemClicked: item,
            showShop: true,
            firstOpen:false
        },()=>{this.resetShop()})
        window.scrollTo(0, 0)
    }
    handleEngravingChange=(e)=>{
   
        this.setState({
            engraving: e.target.value
        })
    }
    resetShop=()=>{
        this.setState({
            selectedColor: "Select a Color",
            selectedColorHandle: "(Default)",
            selectedSize:null,
            engraving:"",
            quantity:1,
            selectedWood:"Maple",
        })
    }
    updateQuantity=(num)=>{
        this.setState({
            quantity:num
        })
    }

    checkAdd=()=>{
        console.log(this.state.selectedColor)
        if(this.state.selectedColor==="Select a Color"){
            
            this.props.openSnack("error","Please choose a color.")
            return false
        }
        if(!this.state.selectedSize){
            this.props.openSnack("error","Please choose a size.")
            return false
        }
        this.props.openSnack("success","Success: Added to cart",3000)
        return true
    }
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.intervalID = setInterval(() => {
            this.changePic()
        }, 4000);
        this.setState({
            firstOpen:true,
            isMobile:isMobile,
            
        })
        var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log("LOOOOOOOOOBG",el);
      this.setState({
          long:el
      })
    }
  }
);
    }
    render(){
        
        console.log("rendered")
        
            return (
                <React.Fragment>
                    <div className="page shop">
                    
                    <ShopSelection openSnack={this.props.openSnack} onClick={this.openItem} firstOpen={this.state.firstOpen} show={!this.state.showShop} models={this.models}/>
                    <div style={{display:`${this.state.firstOpen?"none":""}`}} className={this.state.showShop?`shop-modal animated slideInDown fast`: "shop-modal animated slideOutUp fast"}>
                        
                    <div key={this.state.counter} className="model-image " style={{backgroundImage:`url(${this.models[this.state.itemClicked].image[this.state.counter]})`}}>
                        <p className="text" >
                        {this.models[this.state.itemClicked].description}</p>
                        </div>
                    
                        <div className="shop-model">
                            <div className="shop-model-model">
                                {this.state.itemClicked}
                            </div>
                            <div className="shop-model-model">{this.state.selectedWood}</div>
                            <div className={`shop-model-color ${this.state.selectedColor==="Select a Color"?"":"animated rotateIn "}`}>{this.state.selectedColor==="Select a Color"?"":this.state.selectedColor}</div>
                            <div className={`shop-model-size ${this.state.selectedSize?"animated rotateIn ":""}`}>{this.state.selectedSize?`${this.state.selectedSize}"`:""}</div>
                        
                        </div>
                        <div className="color-bar-box">
                            <div className="color-bar">
                            <Tooltip title="Unfinished" placement="bottom">
                                <div 
                                onClick={()=>{this.chooseColor("Unfinished")}} 
                                className={this.state.selectedColor==="Unfinished"? "color-choice animated pulse unfinished":"color-choice unfinished"} 
                                // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Unfinished"})} 
                                
                                // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                                ></div>
                            </Tooltip>
                            <Tooltip title="Black" placement="bottom">
                            <div onClick={()=>{this.chooseColor("Black")}} className={this.state.selectedColor==="Black"?" selected-color color-choice black animated pulse infinite":" color-choice black"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Black"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Charcoal" placement="bottom">
                            <div onClick={()=>{this.chooseColor("Charcoal")}} className={this.state.selectedColor==="Charcoal"?" selected-color color-choice charcoal animated pulse infinite":" color-choice charcoal"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Charcoal"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Red Mahogany" placement="bottom">
                            <div onClick={()=>{this.chooseColor("Red Mahogany")}} className={this.state.selectedColor==="Red Mahogany"?" selected-color color-choice mahogany animated pulse infinite":" color-choice mahogany"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Red Mahogany"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Forest Green" placement="bottom">
                            <div onClick={()=>{this.chooseColor("Forest Green")}} className={this.state.selectedColor==="Forest Green"?" selected-color color-choice forest-green animated pulse infinite":" color-choice forest-green"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Forest Green"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Navy Blue" placement="bottom">
                            <div onClick={()=>{this.chooseColor("Navy Blue")}} className={this.state.selectedColor==="Navy Blue"?" selected-color color-choice navy-blue animated pulse infinite":" color-choice navy-blue"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Navy Blue"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Royal Blue" placement="bottom">
                            <div onClick={()=>{this.chooseColor("Royal Blue")}} className={this.state.selectedColor==="Royal Blue"?" selected-color color-choice royal-blue animated pulse infinite":" color-choice royal-blue"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Royal Blue"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="White Stain" placement="bottom">
                            <div onClick={()=>{this.chooseColor("White Stain")}} className={this.state.selectedColor==="White Stain"?" selected-color color-choice white-stain animated pulse infinite":" color-choice white-stain"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"White Stain"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Pink" placement="bottom">
                            <div onClick={()=>{this.chooseColor("Pink")}} className={this.state.selectedColor==="Pink"?" selected-color color-choice pink animated pulse infinite":" color-choice pink"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"White Stain"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                </div>
                                <div className="color-name">Color: {this.state.selectedColor}</div>
                        </div>

                        <div className="color-bar-box">
                            <div className="color-bar">
                            <Tooltip title="Unfinished" placement="bottom">
                                <div 
                                onClick={()=>{this.chooseHandleColor("Unfinished")}} 
                                className={this.state.selectedColor==="Unfinished"? "color-choice animated pulse unfinished":"color-choice unfinished"} 
                                // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Unfinished"})} 
                                
                                // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                                ></div>
                            </Tooltip>
                            <Tooltip title="Black" placement="bottom">
                            <div onClick={()=>{this.chooseHandleColor("Black")}} className={this.state.selectedColorHandle==="Black"?" selected-color color-choice black animated pulse infinite":" color-choice black"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Black"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Charcoal" placement="bottom">
                            <div onClick={()=>{this.chooseHandleColor("Charcoal")}} className={this.state.selectedColorHandle==="Charcoal"?" selected-color color-choice charcoal animated pulse infinite":" color-choice charcoal"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Charcoal"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Red Mahogany" placement="bottom">
                            <div onClick={()=>{this.chooseHandleColor("Red Mahogany")}} className={this.state.selectedColorHandle==="Red Mahogany"?" selected-color color-choice mahogany animated pulse infinite":" color-choice mahogany"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Red Mahogany"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Forest Green" placement="bottom">
                            <div onClick={()=>{this.chooseHandleColor("Forest Green")}} className={this.state.selectedColorHandle==="Forest Green"?" selected-color color-choice forest-green animated pulse infinite":" color-choice forest-green"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Forest Green"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Navy Blue" placement="bottom">
                            <div onClick={()=>{this.chooseHandleColor("Navy Blue")}} className={this.state.selectedColorHandle==="Navy Blue"?" selected-color color-choice navy-blue animated pulse infinite":" color-choice navy-blue"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Navy Blue"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Royal Blue" placement="bottom">
                            <div onClick={()=>{this.chooseHandleColor("Royal Blue")}} className={this.state.selectedColorHandle==="Royal Blue"?" selected-color color-choice royal-blue animated pulse infinite":" color-choice royal-blue"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"Royal Blue"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="White Stain" placement="bottom">
                            <div onClick={()=>{this.chooseHandleColor("White Stain")}} className={this.state.selectedColorHandle==="White Stain"?" selected-color color-choice white-stain animated pulse infinite":" color-choice white-stain"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"White Stain"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                            <Tooltip title="Pink" placement="bottom">
                            <div onClick={()=>{this.chooseHandleColor("Pink")}} className={this.state.selectedColorHandle==="Pink"?" selected-color color-choice pink animated pulse infinite":" color-choice pink"} 
                            // onMouseEnter={isMobile ? () => (false) : this.setState({colorHover:"White Stain"})}  
                            // onMouseLeave={isMobile ? ()=>(false):this.setState({colorHover:null})}
                            ></div>
                            </Tooltip>
                </div>
                                <div className="color-name">Handle Color: {this.state.selectedColorHandle}</div>
                        </div>
                        <div className="row wide">
                            <DropDown sizes={this.state.itemClicked==="G271 Pro YOUTH BAT"?"Youth":"Adult"} text={this.state.selectedSize? `${this.state.selectedSize}"`:"Size"} choose={this.chooseSize}/>
                            <div style={{display:"flex","flexDirection":"row"}}>
      
      
                            <FormControl component="fieldset">

<RadioGroup
  aria-label="Wood"
  name="Woods"
  
  value={this.state.selectedWood}
  onChange={(v)=>{
      this.setState({
          selectedWood:v.target.value
      })
  }}
  
>
  <FormControlLabel
  
    value="Maple"
    control={<Radio color="secondary" />}
    label="Maple"
    labelPlacement="start"
  />
  <FormControlLabel
    value="Ash"
    control={<Radio color="secondary" />}
    label="Ash"
    labelPlacement="start"
  />

</RadioGroup>

</FormControl>
    </div>
                            <div className="dum">
                            <TextField
                                onFocus={()=>{this.setState({engravingLabel:""})}}
                                // style={{borderColor:"blue", color:"white"}}
                                label={this.state.engravingLabel}
                                variant="outlined"
                                // id="mui-theme-provider-outlined-input"
                                onChange={(e)=>{this.handleEngravingChange(e)}}
                                value={this.state.engraving}
                                inputProps={{ maxLength: 20}}
                                color="secondary"
                                InputLabelProps={{
                                    shrink: false,
                                    
                                }}
                            />

                            </div>
                            
                        </div>
                        
                        <InputField quantity={this.state.quantity} update={this.updateQuantity}/>
                        <div className="row wide">
                            <MyButton color="primary" onClick={()=>{this.showShop()}} text="Go Back"/>
                            <MyButton color="secondary" onClick={()=>{
                                if(this.checkAdd()){
                                    this.props.updateCart(this.state.quantity, {
                                        model: this.state.itemClicked,
                                        color: this.state.selectedColor,
                                        colorHandle: this.state.selectedColorHandle,
                                        size: this.state.selectedSize,
                                        wood: this.state.selectedWood,
                                        engraving: this.state.engraving,
                                        quantity:this.state.quantity,
                                        img:`url(${this.models[this.state.itemClicked].image[0]})`
    
                                    })
                                    this.showShop()
                                }
                                }} text="Add To Cart"/>
                        </div>
                        
    
                    
                    </div>
                        {/* <div className={this.state.showShop?"hide":""} ><Button variant="contained" color="secondary"  onClick={()=>{this.showShop()}} className={styles.button}>
                    Shop Now
                    <ShopIcon className={styles.rightIcon} />
              </Button></div> */}
                    </div>
                    
                    <div>{this.state.long}</div>
                </React.Fragment>
                
            )
         
        
    }
}

const styles = theme => ({
    button: {
      
      margin: theme.spacing.unit,
      width: "150px",
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: 20,
    },
    iconSmall: {
      fontSize: 20,
    },
  });