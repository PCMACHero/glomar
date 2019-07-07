import React from 'react'
import SmartPaymentButtons from 'react-smart-payment-buttons';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import './checkout.css'

export default class Checkout extends React.Component{
    state={
        items:[],
        batDivs:[],
        code:"",
        codeEntered: null,
        codeApplied: null,
        batCount:null,
        codeLabel:"Enter a Promo Code",
        totalPrice:0,
        discount:0
    }
    colorConvert = {
        "Unfinished": "unfinished",
        "Red Mahogany":"mahogany",
        "Black":"black",
        "Charcoal": "charcoal",
        "Forest Green": "forest-green",
        "Navy Blue":"navy-blue",
        "Royal Blue":"royal-blue",
        "White Stain":"white-stain"

    }
    makeCart=(arr)=>{
        console.log("my bat arr", arr)
        let divArr = []
        this.props.bats.forEach((element, i)=> {
            console.log("this",element.model)
            divArr.push(<div className="checkout-item" key={i}>
                <div className="checkout-item-remove">
                    <IconButton  aria-label="Remove">
                        <RemoveIcon color="" />
                    </IconButton>
                </div>
                <div className={`checkout-item-color-box`}>
                    <div className={`checkout-item-color ${this.colorConvert[element.color]}`}></div>
                </div>
            <div className="checkout-item-model">{(element.model).toUpperCase()}</div>   
            <div className="checkout-item-size">{element.size}"</div> 
            <div className="checkout-item-quantity">Qty {element.quantity}</div>           
        </div>)
        });
        this.setState({
            batDivs:divArr
        })
    }
    handleCodeChange=(e)=>{
   
        this.setState({
            code: e.target.value.toUpperCase()
        
        },()=>{
            if(this.state.code==="3PACKDEAL"){
                this.setState({
                    codeEntered:true
                },()=>{
                    this.checkIfDiscountShouldApply()
                })
                console.log("tried")
                this.props.openSnack("success","Code added. Saved $"+this.state.discount+ ".",5000)
            }
        })
        
    }
    checkIfDiscountShouldApply=()=>{
        if(this.state.code==="3PACKDEAL" && this.props.quantity>2){
            this.setState({
                codeApplied:true
            })
            console.log("triples", this.props.quantity%3)
        }else{
            this.props.openSnack("warning","Code Only Valid with 3 or More Bats",5000)
        }
    }
    componentDidUpdate(prev){
        console.log("prev",prev)
        console.log("props",this.props.quantity)
        if(this.props.bats !== prev.bats){
            console.log("bats changed", this.props.bats)
            this.makeCart(this.props.bats)
            let batCount = this.props.quantity
            let discountTimes = ~~(this.props.quantity / 3)
            console.log("bitwise", discountTimes)
            
            
            this.setState({
                batCount:batCount,
                totalPrice: batCount * 95,
                discount: discountTimes * 55
            })
        }
    }
    componentDidMount(){
        
        this.makeCart(this.props.bats)
            let batCount = 0
            let discountTimes = ~~(this.props.quantity / 3)
            
            
            this.setState({
                batCount:this.props.quantity,
                totalPrice: this.props.quantity * 95,
                discount: discountTimes * 55
            })
    }
    render(){
        
        
        return (
            <div className="center">
                <h1 className="title">CHECKOUT</h1>
                <div className="checkout-items">
                    {this.state.batDivs}
                </div>
                <TextField
                                onFocus={()=>{this.setState({codeLabel:""})}}
                                
                                disabled={this.state.codeApplied?true:false}
                                style={{borderColor:"blue", margin:"10px"}}
                                label={this.state.codeLabel}
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                onChange={(e)=>{this.handleCodeChange(e)}}
                                value={this.state.codeApplied?"Promo Code Applied!": this.state.code}
                                inputProps={{ maxLength: 20}}
                                color="secondary"
                                InputLabelProps={{
                                    shrink: false,
                                    
                                }}
                            />
                <div className="total-price margin">Total ${this.state.codeApplied? this.state.totalPrice - this.state.discount: this.state.totalPrice}</div>
                <div className="total-price margin">{this.state.codeApplied? `Saved $${this.state.discount}`: "code not applied"}</div>
                {/* <div id="paypal-button-container"></div> */}
                <div style={{width:"300px"}}>
      
      <SmartPaymentButtons
        
      />
    </div>
            </div>
        )
    }
}