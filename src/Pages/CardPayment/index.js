import React, {Component, Fragment} from "react";
import './CardPayment.css'
import {Link} from "react-router-dom";
import {Icon, List} from "antd";
import {NavBar, Card, WingBlank, InputItem, Button} from "antd-mobile";


class CardPayment extends Component{

    constructor(props){
        super(props)

    }

    render() {
        return(
            <Fragment>
                <NavBar
                    mode = "dark"
                    className={"NaviBar"}
                >
                    Payment
                </NavBar>

                <WingBlank size={"lg"}>
                    <Card className={"paymentCard"}>
                        <Card.Header
                            title={"Card Support"}
                        />
                        <Card.Body>
                            <img className={"cardIMG"}
                                 src = {require('../PaymentCardSupportIMG/Visa.svg')}
                            />

                            <img className={"cardIMG"}
                                 src = {require('../PaymentCardSupportIMG/Mastercard_2019_logo.svg')}
                            />

                            <img className={"cardIMG"}
                                 src = {require('../PaymentCardSupportIMG/UnionPay_logo.svg')}
                            />

                            <img className={"cardIMG"}
                                 src = {require('../PaymentCardSupportIMG/JCB_logo.svg.png')}
                            />

                            <img className={"cardIMG"}
                                 src = {require('../PaymentCardSupportIMG/American_Express_logo_(2018).svg')}
                            />
                        </Card.Body>
                    </Card>

                    <Card className={"paymentCard"}>
                        <Card.Body>
                            <List>
                                <InputItem placeholder={"Name On Card"}>
                                </InputItem>

                                <InputItem placeholder={"Card Number"}>
                                </InputItem>

                                <InputItem placeholder={"Exprire Date"}>
                                </InputItem>

                                <InputItem placeholder={"CVV"}>
                                </InputItem>
                            </List>
                        </Card.Body>

                        <Card.Body>
                            <Button>Confirm</Button>
                        </Card.Body>
                    </Card>

                </WingBlank>

            </Fragment>
        )
    }
}

export default CardPayment;
