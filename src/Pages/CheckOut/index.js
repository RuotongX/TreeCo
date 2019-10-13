import React, {Component, Fragment} from 'react'
import {NavBar, WingBlank, Card, WhiteSpace, Button} from "antd-mobile";
import {Link} from "react-router-dom";
import {Icon, List} from "antd";
import "./CheckOut.css"
import store from "../Store/index.js";
import RadioItem from "antd-mobile/es/radio/RadioItem";


class CheckOut extends Component{

    constructor(props){
        super(props)

        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleHandOverMethodChange = this.handleHandOverMethodChange.bind(this);
        this.handlePickupLocationChange = this.handlePickupLocationChange.bind(this);
        this.handleSubTotalPriceCalculation = this.handleSubTotalPriceCalculation.bind(this);
        this.handleTotalPrice = this.handleTotalPrice.bind(this);
        this.handleShoppingCartCount = this.handleShoppingCartCount.bind(this);
        this.generatePassingInfo = this.generatePassingInfo.bind(this);
        this.countVaildVIP = this.countVaildVIP.bind(this);
        this.handleDiscountCount = this.handleDiscountCount.bind(this);
        this.getShippingFee = this.getShippingFee.bind(this);

        this.state = {
            handOverMethod : 'UrbanShipping',
            pickupLocation : 'NONE',
            accountinfo : store.getState().accountInformation,
            shoopingCartElement : store.getState().accountInformation.shoppingCart,
            pickuper: this.props.location.pickuper,
            pickupPlace: this.props.location.pickupPlace,
            pickupPhone: this.props.location.pickupPhone,
            pickupEmail: this.props.location.pickupEmail,
            totalPrice : 0,
            subtotalPrice : 0,
            discountPrice : 0
        };
        store.subscribe(this.handleStoreChange)
    }

    render() {

        return (
            <Fragment>
                <NavBar
                    mode = "dark"
                    className={"NaviBar"}
                    leftContent= {<Link to = "/PurchaseProcessing"><Icon className = "returnButton" type="left" /></Link>}
                >
                    Check Out
                </NavBar>

                <WingBlank size = "lg" >
                    <Card className = {"card"}>
                        <Card.Header title={"Your Shopping Cart,"}
                                     className = {"cardHeader"}/>
                        <Card.Body>
                            <List>
                                {
                                    this.state.shoopingCartElement.map((item) => {

                                        return(
                                            <Fragment>
                                                <List.Item>
                                                    <List.Item.Meta
                                                        title = {item.tree.productName}
                                                        description = {String.prototype.concat("Size: ", item.size)}
                                                    />
                                                    {item.quantity}
                                                </List.Item>
                                                <List.Item extra={String.prototype.concat(" $",item.price.toFixed(2))}>
                                                    Subtotal:
                                                </List.Item>
                                                <WhiteSpace size={"15px"}/>
                                            </Fragment>
                                        )
                                    })
                                }
                            </List>
                        </Card.Body>
                    </Card>

                    <Card className = {"card"}>
                        <Card.Header title={"Hand Over"}
                                     className = {"handOver"}/>
                        <Card.Body>
                            <List split={false}>
                                <RadioItem key = {"UrbanShipping"}
                                           checked={this.state.handOverMethod === "UrbanShipping"}
                                           onClick={() => (this.handleHandOverMethodChange("UrbanShipping"))}>
                                    Shipping(Urban)
                                </RadioItem>

                                <RadioItem key = {"RuralShipping"}
                                           checked={this.state.handOverMethod === "RuralShipping"}
                                           onClick={() => (this.handleHandOverMethodChange("RuralShipping"))}>
                                    Shipping(Rural)
                                </RadioItem>

                                <RadioItem key = {"OutAucklandShipping"}
                                           checked={this.state.handOverMethod === "OutAucklandShipping"}
                                           onClick={() => (this.handleHandOverMethodChange("OutAucklandShipping"))}>
                                    Shipping(E. AKL)
                                </RadioItem>

                                <RadioItem key = {"pickup"}
                                           checked={this.state.handOverMethod === "pickup"}
                                           onClick={() => (this.handleHandOverMethodChange("pickup"))}>
                                    Pick Up
                                </RadioItem>
                            </List>
                        </Card.Body>
                    </Card>

                    <Card className={"card"}>
                        {
                            <div>
                                {this.state.handOverMethod === "pickup"? this.getPickUpLocations() : this.getShippingAddress()}
                            </div>

                        }
                    </Card>

                    <Card className = {"card"}>
                        <Card.Header title={"Subtotal Price"}
                                     extra={this.handleSubTotalPriceCalculation()}/>
                        <Card.Body>
                            {
                                <div>{this.getShippingFee()}</div>
                            }
                        </Card.Body>

                        <Card.Header title={"Discounts"}
                                     extra={this.handleDiscountCount()}/>
                        <Card.Body>
                            <div className={"dicountInfo"}>{this.state.accountinfo.type === 'Wholesale'? 'Wholesale Customer: 15% OFF' : 'Account Discount - Not Available'}</div>
                            <div className={"dicountInfo"}>{this.countVaildVIP() >= 20? 'VIP Customer: 10% OFF' : 'Membership Discount - Not Available'}</div>
                            <div className={"dicountInfo"}>{this.handleShoppingCartCount() > 10? 'More than 10 trees - Free Delivery' : 'Shipping Discount - Not Available'}</div>
                        </Card.Body>


                        <Card.Header title={"Total Price"}
                                     extra={this.handleTotalPrice()}/>

                        <Card.Body>
                            <Link to = {{
                                pathname : "/CardPayment",
                                query: this.generatePassingInfo()
                            }}>
                                <Button>Pay With Card</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </WingBlank>

            </Fragment>
        );

    }

    getShippingFee(){

        if(this.state.handOverMethod === 'UrbanShipping'){
            return 'Include Shipping Fee(Urban): $10'
        } else if (this.state.handOverMethod === 'RuralShipping'){
            return 'Include Shipping Fee(Rural): $17'
        } else if (this.state.handOverMethod === 'OutAucklandShipping'){
            return 'Include Shipping Fee(E. AKL): $22'
        }

        return 'No Shipping Fee Included';
    }


    getPickUpLocations(){

        const pickLocations = [{key: 'AKL_ALBANY', name: 'Albany Branch'},
                                {key: 'AKL_EAST', name: 'East Tamaki Branch'},
                                {key: 'AKL_MTEDEN', name: 'Mt Eden Branch'}]


        return(
            <Fragment>
                <Card.Header title={"Pickup Locations"}/>
                <Card.Body>
                    <List split={false} className={"PickupLocationList"}>
                        {
                            pickLocations.map((location) => {
                                return(
                                    <RadioItem key = {location.key}
                                               checked={this.state.pickupLocation === location.key}
                                               onClick={() => (this.handlePickupLocationChange(location.key))}>
                                        {location.name}
                                    </RadioItem>
                                )
                            })
                        }
                    </List>
                </Card.Body>
            </Fragment>
        )
    }

    getShippingAddress(){
        return(
            <Fragment>
                <Card.Header
                    title={"Address"}
                />
                <Card.Body>
                    <List className={"AddressList"}>
                        <List.Item>
                            <List.Item.Meta
                                title = {this.state.pickuper}
                                description = {this.state.pickupPlace}
                            />
                            <List.Item.Meta
                                description = {this.state.pickupEmail}
                            />
                            {this.state.pickupPhone}

                        </List.Item>
                    </List>
                </Card.Body>
            </Fragment>
        )
    }
    handleShoppingCartCount() {
        let numberCount = 0;

        this.state.shoopingCartElement.map((tree) => {
            numberCount += tree.quantity
        })

        return numberCount;
    }

    handleDiscountCount = () => {
        let price = 0

        console.log(price)

        //shopping cart count
        let numberCount = 0;

        this.state.shoopingCartElement.map((tree) => {
            numberCount += tree.quantity
        })

        if(this.state.handOverMethod === 'UrbanShipping' && numberCount > 10){
            price += 10
        } else if (this.state.handOverMethod === 'RuralShipping' && numberCount > 10){
            price += 17
        } else if (this.state.handOverMethod === 'OutAucklandShipping' && numberCount > 10){
            price += 22
        }

        let vipCount = 0;

        this.state.accountinfo.orderList.map((orders) => {
            orders.shoopingCartElement.map((tree) => {
                vipCount += tree.quantity
            })
        })

        if(vipCount >= 20){
            price += this.state.subtotalPrice * 0.1
        }

        if(this.state.accountinfo.type === 'Wholesale'){
            price += this.state.subtotalPrice * 0.15
        }

        this.state.discountPrice = price
        return String.prototype.concat("-$",price.toFixed(2));
    }



    handleSubTotalPriceCalculation = () =>{
        let price = 0;

        //get individual price added
        this.state.shoopingCartElement.map((item) => {
            price += item.price
        })

        //shipping fee
        if(this.state.handOverMethod === 'UrbanShipping'){
            price += 10
        } else if (this.state.handOverMethod === 'RuralShipping'){
            price += 17
        } else if (this.state.handOverMethod === 'OutAucklandShipping'){
            price += 22
        }

        this.state.subtotalPrice = price;
        return String.prototype.concat("$",price.toFixed(2));
    }



    handleHandOverMethodChange(value){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.handOverMethod = value;

        if(newState.handOverMethod !== 'pickup'){
            newState.pickupLocation = 'NONE'
        } else {
            newState.pickupLocation = 'AKL_ALBANY'
        }

        this.setState(newState)
    }

    countVaildVIP(){

        let treeQuantity = 0;


        this.state.accountinfo.orderList.map((orders) => {
            orders.shoopingCartElement.map((tree) => {
                treeQuantity += tree.quantity
            })
        })

        return treeQuantity
    }

    generatePassingInfo(){
        const purchasingDetails = {
            handOverMethod : this.state.handOverMethod,
            pickupLocation : this.state.pickupLocation,
            shoopingCartElement : this.state.shoopingCartElement,
            pickuper: this.state.pickuper,
            pickupPhone: this.state.pickupPhone,
            pickupEmail: this.state.pickupEmail,
            totalPrice: this.state.totalPrice
        }

        return purchasingDetails;
    }
    handleTotalPrice(){
        this.state.totalPrice =  this.state.subtotalPrice - this.state.discountPrice

        return String.prototype.concat("$", this.state.totalPrice.toFixed(2))
    }

    handleStoreChange(){

        const newState = JSON.parse(JSON.stringify(this.state))

        if(store.getState().accountInformation){
            newState.shoopingCartElement = store.getState().accountInformation.shoppingCart

        }


        this.setState(newState)
    }

    handlePickupLocationChange(keyValue){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.pickupLocation = keyValue;

        this.setState(newState)
    }
}

export default CheckOut;