import React, {Component, Fragment} from "react";
import {NavBar, Card, Stepper, WhiteSpace,Button, WingBlank} from 'antd-mobile';
import {Icon} from 'antd'
import './ShoppingCart.css';
import {Link} from 'react-router-dom'

class ShoppingCart extends Component{
    render() {
        return (
            <Fragment>
                <div className={"NavigationBar"}>
                    <NavBar
                        mode = "dark"
                        leftContent= {<Link to = "/"><Icon className = "returnButton" type="left" /></Link>}
                    >
                        Shopping Cart
                    </NavBar>
                </div>


                <div className={"CartItem"}>
                    <WhiteSpace size = "lg" />
                    <Card full>
                        <Card.Body>
                            <div> description </div>
                        </Card.Body>
                        <Card.Footer content={<Stepper showNumber max = {10}
                                                       min = {1}
                                                       value={2}
                                                       className={"Stepper"}/>}
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