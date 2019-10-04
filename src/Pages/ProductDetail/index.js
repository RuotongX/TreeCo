import React, {Component, Fragment} from "react";
import {NavBar, WingBlank, Card, List, Button, Result, Stepper,Toast} from "antd-mobile";
import {Icon, Drawer, Radio} from "antd";
import {Link} from 'react-router-dom'
import store from "../Store/index.js";
import './ProductDetail.css'


const myImg = src => <img src={src} className="resultIMG" alt="" />;

class ProductDetail extends Component{

    constructor(props){
        super(props)
        this.state = {
            accountInfo : store.getState().accountInformation,
            selectedTree : this.props.location.query,
            drawerStatus : false,
            quantity : 1,
            sizeOfTree : 'a',
            totalPrice : 0.00
        };

        this.handleAddToCartAction = this.handleAddToCartAction.bind(this)
        this.handleDrawerChange = this.handleDrawerChange.bind(this)
        this.handleStepperChange = this.handleStepperChange.bind(this)
        this.handleSizeChange = this.handleSizeChange.bind(this)
        this.handleStoreUpdate = this.handleStoreUpdate.bind(this)

        store.subscribe(this.handleStoreUpdate);
    }
    UNSAFE_componentWillMount(){

        if(this.state.selectedTree){
            this.state.totalPrice = this.state.selectedTree.price
        }
    }



    render() {

        if(this.state.selectedTree){
            return(
                <Fragment>
                    <NavBar
                        mode = "dark"
                        className={"NaviBar"}
                        leftContent= {<Link to = "/treeList"><Icon className = "returnButton" type="left" /></Link>}
                    >
                        {this.state.selectedTree.productName}
                    </NavBar>

                    <WingBlank size={"lg"}>
                        <Card className={"ProductCard"}>
                            <Card.Body>
                                <img className={'ProductImage'}
                                     src = {require('../ProductImage/' + this.state.selectedTree.img)}
                                     alt = {this.state.selectedTree.id}
                                />

                                <List className={"DetailList"}>
                                    <List.Item extra={this.state.selectedTree.productName}>Product Name</List.Item>
                                    <List.Item extra={this.state.selectedTree.drain}>Drain Speed</List.Item>
                                    <List.Item extra={this.state.selectedTree.sun}>Sun Condition</List.Item>
                                    <List.Item extra={this.state.selectedTree.maintain}>Maintenance</List.Item>
                                    <List.Item extra={this.state.selectedTree.height}>Maximum Height</List.Item>
                                    <List.Item extra={this.state.selectedTree.rate}>Grow Speed</List.Item>
                                    <List.Item extra={this.state.selectedTree.type}>Tree Category</List.Item>
                                </List>
                            </Card.Body>
                        </Card>

                        <Button type = "primary"
                                className={"PurchaseButton"}
                                onClick={this.handleDrawerChange}
                        >

                            Add To Cart
                        </Button>

                        <Drawer title= "Purchase"
                                placement = 'bottom'
                                visible={this.state.drawerStatus}
                                height= {360}
                                closable = {true}
                                onClose={this.handleDrawerChange}
                        >
                            <div className={"ProductDetailPurchaseDetail"}>
                                {this.state.selectedTree.productName}
                            </div>

                            <List>
                                <List.Item
                                    wrap
                                    extra={<Stepper
                                        style={{ width: '100%', minWidth: '100px' }}
                                        size = "small"
                                        showNumber
                                        min = {1}
                                        value = {this.state.quantity}
                                        onChange={(value) => {this.handleStepperChange(value);}}
                                    />}
                                >
                                    Quantity
                                </List.Item>
                                <List.Item
                                    extra={
                                        <Radio.Group defaultValue = "a" size = "small" onChange={(e) => {this.handleSizeChange(e)}}>
                                            <Radio.Button value = "a">S</Radio.Button>
                                            <Radio.Button value = "b">M</Radio.Button>
                                            <Radio.Button value = "c">L</Radio.Button>
                                        </Radio.Group>
                                    }
                                >
                                    Size
                                </List.Item>

                                <List.Item
                                    extra={String.prototype.concat('$',(this.state.totalPrice).toFixed(2))}
                                >
                                    Total Price
                                </List.Item>
                            </List>

                            <Link to = '/ShoppingCart'>
                                <Button type = "primary"
                                        className={"CartButton"}
                                        onClick={this.handleAddToCartAction}
                                >
                                    Add To Cart
                                </Button>
                            </Link>
                        </Drawer>
                    </WingBlank>
                </Fragment>
            )
        } else {
            return(
                <div className={"errorPage"}>
                    <NavBar
                        mode = "dark"
                        className={"NaviBar"}
                        leftContent= {<Link to = "/treeList"><Icon className = "returnButton" type="left" /></Link>}
                    >
                        Error
                    </NavBar>

                    <Result
                        img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                        title="Unable To Get Product Information"
                        message="Please Do Not Refresh Page While Click The Tree From The Previous Page."
                    />

                    <WingBlank size={"lg"}>
                        <Link to = "/treeList">
                            <Button className={"ErrorReturnButton"}>
                                Tree List
                            </Button>
                        </Link>

                        <Link to = "/">
                            <Button className={"ErrorReturnButton"}>
                                Homepage
                            </Button>
                        </Link>
                    </WingBlank>

                </div>
            )
        }


    }

    handleAddToCartAction(){

        if(this.state.accountInfo){
            var treeSize = ''
            if(this.state.sizeOfTree === 'a'){
                treeSize = 'Small'
            } else if (this.state.sizeOfTree === 'b'){
                treeSize = 'Medium'
            } else if (this.state.sizeOfTree === 'c'){
                treeSize = 'Large'
            }


            const action = {
                type: "addToCartAction",
                value: {tree: this.state.selectedTree, quantity:this.state.quantity, size:treeSize, price: this.state.totalPrice}
            }

            store.dispatch(action)
            Toast.success('Item added', 1);
        }
    }


    handleStepperChange(value){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.quantity = value

        let multiplier = 1.0

        if (newState.sizeOfTree === 'a'){
            multiplier = 1.0
        } else if (newState.sizeOfTree === 'b'){
            multiplier = 2.5
        } else if (newState.sizeOfTree === 'c'){
            multiplier = 5.6
        }

        newState.totalPrice = newState.selectedTree.price * newState.quantity * multiplier

        this.setState(newState)
    }


    handleDrawerChange(){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.drawerStatus = !newState.drawerStatus

        this.setState(newState)
    }
    handleStoreUpdate(){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.accountInfo = store.getState().accountInformation

        this.setState(newState);
    }

    handleSizeChange(e){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.sizeOfTree = e.target.value

        let multiplier = 1.0

        if (newState.sizeOfTree === 'a'){
            multiplier = 1.0
        } else if (newState.sizeOfTree === 'b'){
            multiplier = 2.5
        } else if (newState.sizeOfTree === 'c'){
            multiplier = 5.6
        }

        newState.totalPrice = newState.selectedTree.price * newState.quantity * multiplier

        this.setState(newState)
    }
}

export default ProductDetail;