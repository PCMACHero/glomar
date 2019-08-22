import React from 'react'
import {Route} from 'react-router-dom'
import insta from '../images/social/Instagram.svg'
import facebook from '../images/social/Facebook.svg'
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
        message:"",
        quantity:null,
        firstCheck:true,
        submitText:"ENTER"
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
    
    cancelCode=()=>{
        this.setState({
            codeApplied:false,
            code:"",
            submitText:"ENTER"
        },()=>{
            this.checkIfDiscountShouldApply()
            this.makeBreakDown(this.props.quantity, this.state.discount)
                this.props.openSnack("error","Code removed",5000)
        })
    }

    makeCart=(arr)=>{
        console.log("my bat arr", arr)
        let divArr = []
        let orderItems = []
        this.props.items.forEach((element, i)=> {
            console.log("this",element)
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
                        if(window.confirm("Are you sure you wish to remove this item?"))
                        this.props.removeItem(i)
                    }}>
                        <RemoveIcon style={{color:"white"}} />
                    </IconButton>
                </div>
                <div className={`checkout-item-color-box`}>
                    {/* <div className={`checkout-item-color ${this.colorConvert[element.color]}`}></div> */}
                    <div className="checkout-item-img" style={{backgroundImage:element.img}}></div>
                </div>
            <div className="checkout-item-model">{(element.model).toUpperCase()} {(element.color).toUpperCase()}</div>   
            <div className="checkout-item-size">{element.size}"</div> 
            <div className="checkout-item-quantity">Qty {element.quantity}</div> 
            <div className="qty-cont">
                <div className="qty" onClick={()=>{
                    this.props.changeQuantity("add", i)
                    
                    
                    }}>+</div> 
                <div className="qty" onClick={()=>{
                    if(element.quantity===1){
                        if(window.confirm("Are you sure you wish to remove this item?"))this.props.changeQuantity("rem", i)
                        return
                    }
                    this.props.changeQuantity("rem", i)
                    
                    
                    
                    }}>-</div>    
            </div>
                   
        </div>)
        });
        this.setState({
            batDivs:divArr,
            orderItems:orderItems
        })
    }

    handleCodeSubmit=(code)=>{
        if(code==="3PACKDEAL"){
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
                this.setState({
                    submitText:"CANCEL"
                })
            }
            
        }else{
            this.props.openSnack("warning","Not a valid code",5000)
        }
    }

    handleCodeChange=(e)=>{
        
        this.setState({
            code: e.target.value.toUpperCase()
        
        },()=>{
            // if(this.state.code==="3PACKDEAL"){
            //     this.setState({
            //         codeEntered:true
            //     },()=>{
            //         this.checkIfDiscountShouldApply()
            //     })
            //     console.log("tried")
            //     if(this.state.discount===0){
            //         this.props.openSnack("warning","Must buy at least 3 bats for deal.",5000)
            //     }else{
            //         this.props.openSnack("success","Code added. Saved $"+this.state.discount+ ".",5000)
            //     }
                
            // }
        })
        
    }
    checkIfDiscountShouldApply=()=>{
        if(this.state.code==="3PACKDEAL" && this.props.quantity>2){
            this.setState({
                codeApplied:true
            },()=>{
                this.makeBreakDown(this.props.quantity, this.state.discount)
                this.props.openSnack("success","Code worked",5000)
            })
            console.log("triples", this.props.quantity%3)
        }else{
            if(this.state.codeApplied){
                console.log("IT THINKS CODE APPLIED")
                this.props.openSnack("warning","Code Only Valid with 3 or More Bats",5000)
            }
            
        }
    }
    componentDidUpdate(prev,prevS){
        console.log("prevProps",prev.items.length)
        console.log("props",this.props.items.length)
        console.log("prevState",prevS)
        console.log("state",this.state)
        if(this.state.quantity !== this.props.quantity){
            console.log("bats changed", this.props.items)
            this.makeCart(this.props.items)
            
            let batCount = this.props.quantity
            let discountTimes = ~~(this.props.quantity / 3)
            console.log("bitwise", discountTimes)
            
            
            this.setState({
                batCount:this.props.items.length,
                totalPrice: batCount * 95,
                discount: discountTimes * 55,
                quantity:this.props.quantity,
                
            },()=>{
                if(this.state.firstCheck===false){
                    console.log("weeeeee ran")
                    this.checkIfDiscountShouldApply()
                }
                
                this.makeBreakDown(this.props.quantity, (discountTimes * 55))
                this.setState({
                    firstCheck:false
                })
            })
        }
    }
    componentDidMount(){
        
        this.makeCart(this.props.items)
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
            
                <div className="checkout">
                <h1 className="title">CHECKOUT</h1>
                <div className="checkout-items">
                    <div style={{fontSize:'1.5em',color:"white", display:this.state.batDivs.length===0?"":"none"}}>(YOUR CART IS EMPTY)</div>
                    {this.state.batDivs}
                </div>
                <div className={this.state.message?"blur code":"code"}>
                    <div style={{display:"flex", justifyContent:"center",alignItems:"center", }}>
                        <TextField
                                    onFocus={()=>{this.setState({codeLabel:""})}}
                                    onBlur={()=>{this.setState({codeLabel:this.state.code===""?"Enter a Promo Code":""})}}
                                    onKeyPress={(e)=>{if(e.key==="Enter"){
                                        this.handleCodeSubmit(this.state.code)
                                    }}}
                                    disabled={this.state.codeApplied?true:false}
                                    style={{borderColor:"white"}}
                                    label={this.state.codeLabel}
                                    variant="outlined"
                                    id="mui-theme-provider-outlined-input"
                                    onChange={(e)=>{this.handleCodeChange(e)}}
                                    value={this.state.code}
                                    inputProps={{ maxLength: 20}}
                                    color="primary"
                                    InputLabelProps={{
                                        shrink: false,
                                        
                                    }}
                                />
                        <div className="cancel-promo" onClick={()=>{
                            if(this.state.submitText==="ENTER"){
                                this.handleCodeSubmit(this.state.code)}
                                else{
                                this.cancelCode()
                                }
                            }
                            
                            }
                            
                            
                            >{this.state.submitText}</div>
                    </div>

                
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
                // clientId="AVaqOT36d-qD3Rty6ZWtzTBu7z66VRSYY7j_ivG2I9UEi_cjsWY9i-xhGCzXDkB_bih6poR-jZ_lSwHt" // Glomar Sandbox
                clientId="AeboFO9F9whNVTZJTld4AE0gPdY157jbAmsGh52rzyRJimrL0-IZPWHbE8Ld7vXs0Otm0NB93j0wPhcL" // Live Glomar
                
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
                                message = `Thank you ${name}, the transaction is complete! Your customized order (order id:${id}) will ship in 2-3 weeks.`
                            }else{
                                message = `Transaction status: ${status}`
                            }
                            
                            
                            
                            
                            this.setState({
                                message:message,
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
        
        quantity:null,
                            },()=> this.props.emptyCart())
                            
                        });
                    }}
                    />
                </PayPalSDKWrapper>
    </div>
                    
                    <div className={this.state.message?"animated fadeIn message":""} style={{display:this.state.message?"":"none"}}>{this.state.message}</div>
                    <div className="social-bar">
                      <a href="https://www.instagram.com/Glomarprobats_official/" target="_blank" className="social" style={{backgroundImage: `url(${insta})`}}></a>
                      <a href="https://www.facebook.com/glomarprobats/" target="_blank" className="social" style={{backgroundImage: `url(${facebook})`}}></a>

                    </div>
            </div>
            
            
        )
    }
}