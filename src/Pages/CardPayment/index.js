import React, {Component, Fragment} from "react";
import './CardPayment.css'
import {Link} from "react-router-dom";
import {Icon, Form,Input} from "antd";
import {NavBar, Card, WingBlank, InputItem, Button} from "antd-mobile";


class CardPayment extends Component{

    constructor(props){
        super(props)

    }
    handleConfirmCSV = (rule, value, callback) => {
        const { getFieldValue } = this.props.form
        if (getFieldValue('csv').length !== 3) {
            callback('CSV form is not correct!')
        }
        callback()
    }
    handleConfirmCardNumber = (rule, value, callback) => {
        const { getFieldValue } = this.props.form
        if (getFieldValue('CardNumber').length !== 16) {
            callback('Card Number form is not correct!')
        }
        callback()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
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
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                                <Form.Item label="Note">
                                    {getFieldDecorator('note', {
                                        rules: [{ required: true, message: 'Please input your note!' }],
                                    })(<Input />)}
                                </Form.Item>

                                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card.Body>
                    </Card>

                </WingBlank>

            </Fragment>
        )
    }
}

export default CardPayment;
