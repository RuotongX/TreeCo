import React, {Component, Fragment} from "react";
import {NavBar, Card, WhiteSpace,Button, WingBlank} from 'antd-mobile';
import {Icon} from 'antd'
import store from "../Store/index.js";
import './ShoppingCart.css';
import {Link} from 'react-router-dom'

class ShoppingCart extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();

        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }




    render() {
        return (
            <Fragment>
                <div>
                    <NavBar
                        mode = "dark"
                        className={"NaviBar"}
                        leftContent= {<Link to = "/"><Icon className = "returnButton" type="left" /></Link>}
                    >
                        Shopping Cart
                    </NavBar>
                </div>


                <div className={"CartItem"}>
                    {
                        this.state.shoopingCartElement.map((info,index) => {
                            return(
                                <Fragment>
                                    <WhiteSpace size = "lg" />

                                    <Card full key={index}>
                                        <Card.Body>
                                            <div className={"CartRightContent"}>
                                                <img className={'cartIMG'}
                                                src = {require('../ProductImage/' + info.tree.img)}
                                                alt = {info.tree.productName}
                                                />
                                            </div>

                                            <div className={"CartLeftContent"}>
                                                <div className={'CartProductName'}>
                                                    {info.tree.productName}
                                                </div>
                                                <div className={'CartProductDescription'}>
                                                    {String.prototype.concat('Size: ',info.size)}
                                                </div>
                                                <div className={"CartQuantity"}>
                                                    {String.prototype.concat('Quantity: ',info.quantity)}
                                                </div>
                                            </div>

                                        </Card.Body>

                                    <Card.Footer content={<div className={"CartPrice"}>{String.prototype.concat('Price: ',info.price)}</div>}
                                        extra={<Button type = "warning"
                                                       size = "small"
                                                       inline
                                                       onClick={() => this.handleDeleteButtonClick(index)}
                                                       className={"RemoveButton"}>
                                                <Icon type = "delete" theme = "filled" className={"deleteIcon"}/>Remove
                                                </Button>
                                        }
                                    />

                                    </Card>
                                </Fragment>
                            )
                        })




                    }

                </div>

                <WingBlank size = "lg">
                    <Button className={"ProcessButton"}
                            type = "primary">
                        Place Order
                    </Button>

                    <Link to={"/treeList"}>
                        <Button className={"TreeListButton"}>
                            Keep Shopping
                        </Button>
                    </Link>
                </WingBlank>
            </Fragment>
        );
    }

    handleStoreChange(){
        this.setState(store.getState())
    }

    handleDeleteButtonClick(index){

        const action = {
            type: "deleteItemFromCart",
            value: index
        }

        store.dispatch(action);
    }
}



export default ShoppingCart;