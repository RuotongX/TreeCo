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
        this.hanleTotalPriceCalculation = this.hanleTotalPriceCalculation.bind(this);
        this.generatePassingInfo = this.generatePassingInfo.bind(this);

        this.state = {
            handOverMethod : 'Shipping',
            pickupLocation : 'NONE',
            shoopingCartElement : store.getState().accountInformation.shoppingCart,
            pickuper: this.props.location.pickuper,
            pickupPlace: this.props.location.pickupPlace,
            pickupPhone: this.props.location.pickupPhone,
            pickupEmail: this.props.location.pickupEmail,
            totalPrice : 0
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
                        <Card.Header title={"Total Price"}
                                     extra={this.hanleTotalPriceCalculation()}/>
                        <Card.Body>
                            {
                                this.state.handOverMethod === "Shipping" || this.state.handOverMethod === "FastShipping"?
                                    this.state.handOverMethod === "Shipping"? <div className={"discountNote"}>Include Shipping Fee: $9.99</div>
                                        : <div className={"discountNote"}>Include Shipping Fee(Fast): $29.99</div>
                                    : <div className={"discountNote"}>No Shipping Fee Included</div>
                            }
                        </Card.Body>

                        <Card.Header title={"Membership Discount"}
                                     extra={String.prototype.concat("-$",10)}/>
                        <Card.Body>

                            <div className={"discountNote"}>Super Membership Plan</div>

                        </Card.Body>

                        <Card.Body>
                            <Link to = {{
                                pathname : "/",
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

    hanleTotalPriceCalculation = () =>{
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

        this.state.totalPrice = price;
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