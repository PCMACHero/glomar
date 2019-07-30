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
        batCount:0,
        grandTotal: 0,
        batTotal:0,
        message:""
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
    makeBreakDown=(quantity,discount)=>{
        let batTotal = quantity * 95
        let shipping = quantity>1?0:15
        let discounts = this.state.codeApplied?discount:0
        let grandTotal = batTotal + shipping - discounts
        this.setState({
            batTotal: batTotal,
            grandTotal: grandTotal
        })
    }
    
    makeCart=(arr)=>{
        console.log("my bat arr", arr)
        let divArr = []
        let orderItems = []
        this.props.bats.forEach((element, i)=> {
            console.log("this",element.model)
            orderItems.push(
                {
                    name: `${element.color},${element.wood}, ${element.size}", "${element.engraving?element.engraving:""}"`,
                    description: `${element.color},${element.wood}, ${element.size}", "${element.engraving?element.engraving:""}"`,
                    sku: element.model,
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
            },()=>{
                this.makeBreakDown(this.props.quantity, this.state.discount)
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
            },()=>{
                this.makeBreakDown(this.props.quantity, (discountTimes * 55))
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
            },()=>{
                this.makeBreakDown(this.props.quantity, this.state.discount)
            })
    }
    render(){
        console.log("RENDERED CHECKOUT")
        console.log("state bat count", this.state.batCount)
        console.log("discount", this.state.discount)
        console.log("totalBat", this.state.batTotal)
        console.log("discount", this.state.discount)
        
        return (
            
                <div className="center">
                <h1 className="title">CHECKOUT</h1>
                <div className="checkout-items">
                    <div style={{fontSize:'1.5em',color:"white", display:this.state.batDivs.length===0?"":"none"}}>(YOUR CART IS EMPTY)</div>
                    {this.state.batDivs}
                </div>
                <div className={this.state.message?"blur code":"code"}>
                <TextField
                                onFocus={()=>{this.setState({codeLabel:""})}}
                                onBlur={()=>{this.setState({codeLabel:this.state.code===""?"Enter a Promo Code":""})}}
                                
                                disabled={this.state.codeApplied?true:false}
                                style={{borderColor:"white"}}
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
                <div className="breakdown-box" style={{display:this.props.quantity>0?"":"none"}}>
                    <div className="breakdown total-price">{this.props.quantity} Bats: ${this.props.quantity * 95}</div>
                    <div className="breakdown total-price" style={{color:this.props.quantity>1 || this.props.quantity===0?"limegreen":"", display:this.props.quantity<1?"none":""}}>{this.props.quantity>1?"Free Shipping":`Shipping: $15 (free with 2 or more)`}</div>
                    {/* <div className="total-price margin">TOTAL ${this.state.codeApplied? this.state.totalPrice - this.state.discount: this.state.totalPrice}</div> */}
                    <div style={{display:this.state.codeApplied?'':"none", color:"limegreen"}} className="total-price margin">{this.state.codeApplied? `Saved $${this.state.discount}`: ""}</div>
                    <div className="total-price margin">TOTAL ${this.state.grandTotal}</div>
                </div>
                
                
                {/* <div id="paypal-button-container"></div> */}
                <div style={{width:"300px", display:this.props.quantity===0?"none":""}} className={this.state.message?"blur":""}>
      
                <PayPalSDKWrapper 
                // clientId="Ac60io4KQfcaPv3HbVbKMMyRdaBJlTm65wq36jcuFLHwPHlIno8ZEW8ktKOQhY90icbFyMlIbndAfIoU" // Sandbox
                clientId="AVaqOT36d-qD3Rty6ZWtzTBu7z66VRSYY7j_ivG2I9UEi_cjsWY9i-xhGCzXDkB_bih6poR-jZ_lSwHt" // Glomar Sandbox
                // clientId="AeboFO9F9whNVTZJTld4AE0gPdY157jbAmsGh52rzyRJimrL0-IZPWHbE8Ld7vXs0Otm0NB93j0wPhcL" // Live Glomar
                
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
                                        value: `${this.state.batTotal-(this.state.codeApplied?this.state.discount:0) + (this.props.quantity>1 || this.props.quantity===0?0:15)}`,
                                        breakdown: {
                                            shipping: {
                                                currency_code: "USD",
                                                value: (15),
                                                
                                            },
                                            shipping_discount: {
                                                currency_code: "USD",
                                                value: this.props.quantity>1 || this.props.quantity===0?15:0,
                                                
                                            },
                                            item_total: {
                                                currency_code: "USD",
                                                value: `${this.state.batTotal}`,
                                                
                                            },
                                            discount:{
                                                currency_code:"USD",
                                                value:this.state.codeApplied?this.state.discount:0
                                            }
                                        }
                                    },
                                    items: this.state.orderItems,
                    
                                }
                            ]
                          });
                    }}
                    
                    onApprove={(data, actions)=>{
                        return actions.order.capture().then((details)=> {
                            // Show a success message to the buyer
                            let status = "no status"
                            let id = 0
                            let name = "Customer"
                            let message = ""
                            
                            if(details.payer.name.given_name){
                                name = details.payer.name.given_name 
                            }
                            if(details.id){
                                id = details.id
                            }
                            if(details.status){
                                status = details.status
                            }
                            if(status==="COMPLETED"){
                                message = `Thank you ${name}, the transaction is complete!`
                            }else{
                                message = `Transaction status: ${status}`
                            }
                            
                            
                            
                            this.props.emptyCart()
                            this.setState({
                                message:message
                            })
                            
                        });
                    }}
                    />
                </PayPalSDKWrapper>
    </div>
                    
                    <div className={this.state.message?"animated fadeIn message":""} style={{display:this.state.message?"":"none"}}>{this.state.message}</div>
            </div>
            
            
        )
    }
}