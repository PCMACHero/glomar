import React from 'react'
import {Route} from 'react-router-dom'
import SmartPaymentButtons, {PayPalSDKWrapper} from 'react-smart-payment-buttons';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import './checkout.css'

export default class Checkout extends React.Component{
    state={
        items:[],
        orderItems:[],
        batDivs:[],
        code:"",
        codeEntered: null,
        codeApplied: null,
        batCount:null,
        codeLabel:"Enter a Promo Code",
        totalPrice:0,
        discount:0,
        batCount:0
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
        let orderItems = []
        this.props.bats.forEach((element, i)=> {
            console.log("this",element.model)
            orderItems.push(
                {
                    name: element.model,
                    description: `${element.color},${element.wood}, ${element.size}", "${element.engraving?element.engraving:""}"`,
                    sku: "xyz-2654",
                    unit_amount: {
                        currency_code: "USD",
                        value: "95.00"
                    },
                    quantity: element.quantity
                }
            )
            divArr.push(<div className="checkout-item" key={i}>
                <div className="checkout-item-remove">
                    <IconButton  aria-label="Remove" onClick={()=>{
                        this.props.removeItem(i)
                    }}>
                        <RemoveIcon style={{color:"white"}} />
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
            batDivs:divArr,
            orderItems:orderItems
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
                if(this.state.discount===0){
                    this.props.openSnack("warning","Must buy at least 3 bats for deal.",5000)
                }else{
                    this.props.openSnack("success","Code added. Saved $"+this.state.discount+ ".",5000)
                }
                
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
    componentDidUpdate(prev,prevS){
        console.log("prevProps",prev.bats.length)
        console.log("props",this.props.bats.length)
        console.log("prevState",prevS)
        console.log("state",this.state)
        if(this.state.batCount !== this.props.bats.length){
            console.log("bats changed", this.props.bats)
            this.makeCart(this.props.bats)
            let batCount = this.props.quantity
            let discountTimes = ~~(this.props.quantity / 3)
            console.log("bitwise", discountTimes)
            
            
            this.setState({
                batCount:this.props.bats.length,
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
        console.log("RENDERED CHECKOUT")
        console.log("state bat count", this.state.batCount)
        console.log("prop bat count", this.props.bats)
        
        return (
            
                <div className="center">
                <h1 className="title">CHECKOUT</h1>
                <div className="checkout-items">
                    <div style={{fontSize:'1.5em',color:"white", display:this.state.batDivs.length===0?"":"none"}}>(No Items In Cart)</div>
                    {this.state.batDivs}
                </div>
                <div className="code">
                <TextField
                                onFocus={()=>{this.setState({codeLabel:""})}}
                                
                                disabled={this.state.codeApplied?true:false}
                                style={{borderColor:"white", margin:"10px"}}
                                label={this.state.codeLabel}
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                onChange={(e)=>{this.handleCodeChange(e)}}
                                value={this.state.codeApplied?"Promo Code Applied!": this.state.code}
                                inputProps={{ maxLength: 20}}
                                color="primary"
                                InputLabelProps={{
                                    shrink: false,
                                    
                                }}
                            />
                </div>
                
                <div className="total-price margin">TOTAL ${this.state.codeApplied? this.state.totalPrice - this.state.discount: this.state.totalPrice}</div>
                <div style={{display:this.state.codeApplied?'':"none", color:"limegreen"}} className="total-price margin">{this.state.codeApplied? `Saved $${this.state.discount}`: ""}</div>
                {/* <div id="paypal-button-container"></div> */}
                <div style={{width:"300px"}}>
      
                <PayPalSDKWrapper 
                clientId="Ac60io4KQfcaPv3HbVbKMMyRdaBJlTm65wq36jcuFLHwPHlIno8ZEW8ktKOQhY90icbFyMlIbndAfIoU" 
                
                // disableFunding={['card', 'sepa','credit']}
                >
                    <SmartPaymentButtons

                    createOrder={(d,a)=>{
                        return a.order.create({
                            purchase_units: [
                                {
                                    reference_id: "PUHF",
                                    description: "Some description",
                    
                                    custom_id: "Something7364",
                                    soft_descriptor: "Glomar Pro Bats",
                                    amount: {
                                        currency_code: "USD",
                                        value: `${this.state.totalPrice-this.state.discount}`,
                                        breakdown: {
                                            item_total: {
                                                currency_code: "USD",
                                                value: `${this.state.totalPrice}`,
                                                
                                            },
                                            discount:{
                                                currency_code:"USD",
                                                value:this.state.discount
                                            }
                                        }
                                    },
                                    items: this.state.orderItems,
                    
                                }
                            ]
                          });
                    }}
                    
                    onApprove={(data, actions)=>{
                        return actions.order.capture().then(function(details) {
                            // Show a success message to the buyer
                            alert('Transaction completed by ' + details.payer.name.given_name + '!');
                        });
                    }}
                    />
                </PayPalSDKWrapper>
    </div>
            </div>
            
            
        )
    }
}