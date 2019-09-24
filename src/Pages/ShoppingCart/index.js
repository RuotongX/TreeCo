import React, {Component, Fragment} from "react";
import {NavBar, Card, WhiteSpace,Button, WingBlank} from 'antd-mobile';
import {Icon} from 'antd'
import './ShoppingCart.css';
import {Link} from 'react-router-dom'

const myImg = src => <img src={src} className="cartIMG" alt="" />;

class ShoppingCart extends Component{
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
                    <WhiteSpace size = "lg" />
                    <Card full>
                        <Card.Body>
                            <div className={"CartRightContent"}>
                                <img className={'cartIMG'}
                                     src = {require('../ProductImage/' + 'lemon_tree.jpg')}
                                     alt = {'lemon_tree'}
                                />
                            </div>
                            <div className={"CartLeftContent"}>
                                <div className={'CartProductName'}>
                                    Lemon Tree
                                </div>
                                <div className={'CartProductDescription'}>
                                    Size: Large
                                </div>
                            </div>

                        </Card.Body>
                        <Card.Footer content={<div className={"CartQuantity"}>Quantity: 10</div>}
                                     extra={<Button type = "warning" size = "small" inline className={"RemoveButton"}>
                                         <Icon type = "delete" theme = "filled" className={"deleteIcon"}/>Remove
                                     </Button>}
                        />

                    </Card>
                </div>

                <WingBlank size = "lg">
                    <Button className={"ProcessButton"}
                            type = "primary">
                        Place Order
                    </Button>
                </WingBlank>
            </Fragment>
        );
    }
}

export default ShoppingCart;