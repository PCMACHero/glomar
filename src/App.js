import 'intersection-observer'
import React from 'react';
import 'animate.css'
import "../node_modules/video-react/dist/video-react.css";

import {HashRouter, Route} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from './components/navbar'
import './App.css';
import blueGrey from '@material-ui/core/colors/blueGrey'
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import HomePage from './components/homepage/homepage';

import { indigo } from '@material-ui/core/colors';
import Shop from './components/shop/shop';

import './mobile.css'
import Footer from './components/footer/footer';
import CustomizedSnackbars from './components/snackbar';
import Checkout from './components/checkout/checkout';
import About from './components/about/about';

class App extends React.Component{
  state={
    cart:{
      quantity:0,
      bats:[]
    },
    drawer:true,
    snackMessage:"thisworks",
    //success error info warning
    snackVariant:"success",
    snackTime:3000,
    snackOpen:false
  }

  closeSnack=()=>{
    this.setState({
      snackOpen:false
    })
  }
  openSnack=(variant, message, time=2000)=>{
    
    this.setState({
      snackVariant:variant,
      snackMessage: message,
      snackOpen:true,
      snackTime:time
    })
  }

  updateCart=(quantity,bat)=>{
    if(!quantity){
      return
    }
    
    console.log("Bat Added to cart", bat)
    let tempBats = this.state.cart.bats
    
    
    // for(let i = 0; i<quantity; i++){
      tempBats.push(bat)
    // }
    let totalQuantity= null
    tempBats.forEach((e,i)=>{
      totalQuantity += e.quantity 
    })
    
    this.setState({
      cart:{
        quantity: totalQuantity,
        bats: tempBats
      }
    },()=>{
      localStorage.setItem("cart", JSON.stringify(this.state.cart))
    })
  }

  removeItem=(index)=>{
    console.log("ran remove")
    let tempBats = this.state.cart.bats
    let totalQuantity= null
    tempBats.splice(index,1)

    tempBats.forEach((e,i)=>{
      totalQuantity += e.quantity 
    })

    this.setState({
      cart:{
        quantity:totalQuantity,
        bats:tempBats
      }
    },()=>{
      localStorage.setItem("cart", JSON.stringify(this.state.cart))
    })
  }
  emptyCart=()=>{
    this.setState({
      cart:{
        quantity:0,
        bats:[]
      }
    },()=>{
      localStorage.removeItem("cart")
    })
  }
  openDrawer=()=>{
    this.setState({drawer:true})
  }
  componentDidMount(){console.log(this.state.cart.bats)
    if(localStorage.getItem("cart")){
      let cart = localStorage.getItem("cart")
      this.setState({
        cart:JSON.parse(cart) 
      },()=>{
        console.log("Cart quantity", this.state.cart.quantity)
      })
    }
  }
  render(){
    return (
      <HashRouter basename='/'>
        <MuiThemeProvider theme={theme}>
        
          <div className="App">
          <Nav cartAmount={this.state.cart.quantity} removeItem={this.removeItem} emptyCart={()=>this.emptyCart()} bats={this.state.cart.bats?this.state.cart.bats:""} openDrawer={()=>this.openDrawer()} drawer={true}/>
          <div className="nav-buffer" style={{height:"56px",width:"100%"}}></div>
          <CustomizedSnackbars message={this.state.snackMessage} variant={this.state.snackVariant} time={this.state.snackTime} close={this.closeSnack} open={this.openSnack} isOpen={this.state.snackOpen}/>
          <Route path="/" exact component={HomePage}/>
          <Route path="/shop" render={(props) => <Shop updateCart={this.updateCart} openSnack={this.openSnack} {...props}  />}/>

          <Route path="/checkout" exact render={(props)=> <Checkout bats={this.state.cart.bats} removeItem={this.removeItem} updateCart={this.updateCart} 
            openSnack={this.openSnack} quantity={this.state.cart.quantity} emptyCart={this.emptyCart} {...props}/>}/>
          

          <Route path="/about" exact component={About}/>

          <div className="nav-buffer" style={{height:"64px",width:"100%"}}></div>
          <Footer/>
          </div>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
  
}

export default App;


const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    dark: blueGrey,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});