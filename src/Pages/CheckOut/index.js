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

        this.state = {
            handOverMethod : 'Shipping',
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
                                <RadioItem key = {"Shipping"}
                                           checked={this.state.handOverMethod === "Shipping"}
                                           onClick={() => (this.handleHandOverMethodChange("Shipping"))}>
                                    By Shipping
                                </RadioItem>

                                <RadioItem key = {"FastShipping"}
                                           checked={this.state.handOverMethod === "FastShipping"}
                                           onClick={() => (this.handleHandOverMethodChange("FastShipping"))}>
                                    By Shipping(Fast)
                                </RadioItem>

                                <RadioItem key = {"pickup"}
                                           checked={this.state.handOverMethod === "pickup"}
                                           onClick={() => (this.handleHandOverMethodChange("pickup"))}>
                                    Pick up
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
                                this.state.handOverMethod === "Shipping" || this.state.handOverMethod === "FastShipping"?
                                    this.state.handOverMethod === "Shipping"? <div className={"shippingNote"}>Include Shipping Fee: $9.99</div>
                                        : <div className={"shippingNote"}>Include Shipping Fee(Fast): $29.99</div>
                                    : <div className={"shippingNote"}>No Shipping Fee Included</div>
                            }
                        </Card.Body>

                        <Card.Header title={"Discounts"}
                                     extra={this.handleDiscountCount()}/>
                        <Card.Body>
                            <div className={"dicountInfo"}>{this.state.accountinfo.type === 'Wholesale'? 'Wholesale Customer: 15% OFF' : 'No Available Account Discount Found'}</div>
                            <div className={"dicountInfo"}>{this.countVaildVIP() >= 20? 'VIP Customer: 10% OFF' : 'No Available Membership Discount Found'}</div>
                            <div className={"dicountInfo"}>{this.handleShoppingCartCount() > 10? 'More than 10 trees - Free Delivery' : 'No Available Shipping Discount Found'}</div>
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

    getPickUpLocations(){

        const pickLocations = [{key: 'AUCKLAND_NORTH', name: 'Auckland North Shore'},
                                {key: 'AUCKLAND_SOUTH', name: 'Auckland South'},
                                {key: 'AUCKLAND_WEST', name: 'Auckland West'},
                                {key: 'HAMILTON', name: 'Hamilton'},
                                {key: 'ROTORUA', name: 'Rotorua'},
                                {key: 'TAURANGA', name: 'Tauranga'},
                                {key: 'WELLINGTON', name: 'Wellington'},
                                {key: 'CHRISTCHURCH', name: 'Christchurch'},
                                {key: 'DUNEDIN', name: 'Dunedin'},
                                {key: 'PALMERSTON_NORTH', name: 'Palmerston North'}]


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

        if(this.state.handOverMethod === 'Shipping' && numberCount > 10){
            price += 9.99
        } else if (this.state.handOverMethod === 'FastShipping' && numberCount > 10){
            price += 29.99
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
        if(this.state.handOverMethod === 'Shipping'){
            price += 9.99
        } else if (this.state.handOverMethod === 'FastShipping'){
            price += 29.99
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
            newState.pickupLocation = 'AUCKLAND_NORTH'
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
        newState.shoopingCartElement = store.getState().accountInformation.shoppingCart

        this.setState(newState)
    }

    handlePickupLocationChange(keyValue){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.pickupLocation = keyValue;

        this.setState(newState)
    }
}

export default CheckOut;