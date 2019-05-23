import React from 'react'
import Button from '@material-ui/core/Button';
import ShopIcon from '@material-ui/icons/Shop';
import bat1 from '../images/models/G243-1.jpg'
import DropDown from '../dropdown'
import Tooltip from '@material-ui/core/Tooltip';
import './shop.css'
import InputField from '../inputfield';
import MyButton from './button'
import ShopSelection from '../shopselection';


export default class Shop extends React.Component{
    state={
        showShop: true,
        colorHover: null,
        selectedColor: "Select a Color",
        selectedSize:null
      
    }
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
        "White Stain"
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


    obj={
        model: "G243 Pro Model",
        image: ('../images/carousel/G243-1.jpg'),
        price: 95.00,
        description: "Our G243 model is the true power hitter's bat, fitted with a big barrel and regular size handle.",
        sizes: this.adultSizes,
        colors: this.normalColors
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

    openItem=(item)=>{
        console.log("chose ",item)
        this.setState({
            itemClicked: item
        })
    }

    render(){
        console.log("rendered")
        return (
            <React.Fragment>
                <div className="page shop">
                <ShopSelection onClick={this.openItem}/>
                <div className={this.state.showShop?"shop-modal animated fadeInDown ": "shop-modal animated slideOutUp"}>
                    <div className="model-image" style={{backgroundImage:`url(${bat1})`}}></div>
                    <div className="shop-model">{this.obj.model}</div>
                    <div className="color-bar-box">
                        <div className="color-bar">
                        <Tooltip title="Unfinished" placement="bottom">
                            <div onClick={()=>{this.chooseColor("Unfinished")}} className={this.state.colorHover==="Unfinished"?"color-choice unfinished animated pulse infinite":" color-choice unfinished"} onMouseEnter={()=>{this.setState({colorHover:"Unfinished"})}} onMouseLeave={()=>{this.setState({colorHover:null})}}></div>
                        </Tooltip>
                        <Tooltip title="Black" placement="bottom">
                        <div onClick={()=>{this.chooseColor("Black")}} className={this.state.colorHover==="Black"?"color-choice black animated pulse infinite":" color-choice black"} onMouseEnter={()=>{this.setState({colorHover:"Black"})}} onMouseLeave={()=>{this.setState({colorHover:null})}}></div>
                        </Tooltip>
                        <Tooltip title="Charcoal" placement="bottom">
                        <div onClick={()=>{this.chooseColor("Charcoal")}} className={this.state.colorHover==="Charcoal"?"color-choice charcoal animated pulse infinite":" color-choice charcoal"} onMouseEnter={()=>{this.setState({colorHover:"Charcoal"})}} onMouseLeave={()=>{this.setState({colorHover:null})}}></div>
                        </Tooltip>
                        <Tooltip title="Red Mahogany" placement="bottom">
                        <div onClick={()=>{this.chooseColor("Red Mahogany")}} className={this.state.colorHover==="Red Mahogany"?"color-choice mahogany animated pulse infinite":" color-choice mahogany"} onMouseEnter={()=>{this.setState({colorHover:"Red Mahogany"})}} onMouseLeave={()=>{this.setState({colorHover:null})}}></div>
                        </Tooltip>
                        <Tooltip title="Forest Green" placement="bottom">
                        <div onClick={()=>{this.chooseColor("Forest Green")}} className={this.state.colorHover==="Forest Green"?"color-choice forest-green animated pulse infinite":" color-choice forest-green"} onMouseEnter={()=>{this.setState({colorHover:"Forest Green"})}} onMouseLeave={()=>{this.setState({colorHover:null})}}></div>
                        </Tooltip>
                        <Tooltip title="Navy Blue" placement="bottom">
                        <div onClick={()=>{this.chooseColor("Navy Blue")}} className={this.state.colorHover==="Navy Blue"?"color-choice navy-blue animated pulse infinite":" color-choice navy-blue"} onMouseEnter={()=>{this.setState({colorHover:"Navy Blue"})}} onMouseLeave={()=>{this.setState({colorHover:null})}}></div>
                        </Tooltip>
                        <Tooltip title="Royal Blue" placement="bottom">
                        <div onClick={()=>{this.chooseColor("Royal Blue")}} className={this.state.colorHover==="Royal Blue"?"color-choice royal-blue animated pulse infinite":" color-choice royal-blue"} onMouseEnter={()=>{this.setState({colorHover:"Royal Blue"})}} onMouseLeave={()=>{this.setState({colorHover:null})}}></div>
                        </Tooltip>
                        <Tooltip title="White Stain" placement="bottom">
                        <div onClick={()=>{this.chooseColor("White Stain")}} className={this.state.colorHover==="White Stain"?"color-choice white-stain animated pulse infinite":" color-choice white-stain"} onMouseEnter={()=>{this.setState({colorHover:"White Stain"})}} onMouseLeave={()=>{this.setState({colorHover:null})}}></div>
                        </Tooltip>
            </div>
                            <div className="color-name">{this.state.selectedColor}</div>
                    </div>
                    <DropDown text={this.state.selectedSize? `${this.state.selectedSize}"`:"Select Size"} choose={this.chooseSize}/>
                    <InputField />
                    <div className="row">
                        <MyButton color="primary" onClick={()=>{this.showShop()}} text="Go Back"/>
                        <MyButton color="secondary" onClick={()=>{this.showShop()}} text="Add To Cart"/>
                    </div>
                    

                
                </div>
                    <div className={this.state.showShop?"hide":""} ><Button variant="contained" color="secondary"  onClick={()=>{this.showShop()}} className={styles.button}>
                Shop Now
                <ShopIcon className={styles.rightIcon} />
          </Button></div>
                </div>
                
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