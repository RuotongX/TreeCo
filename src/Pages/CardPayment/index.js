import React, {Component, Fragment} from "react";
import './CardPayment.css'
import {Link} from "react-router-dom";
import {Icon, Form,Input,Select} from "antd";
import {NavBar, Card, WingBlank, InputItem, Button} from "antd-mobile";
const { Option } = Select;

class CardPayment extends Component{

    constructor(props){
        super(props)

    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleConfirmCVV = (rule, value, callback) => {
        console.log(this.props.form.getFieldValue('CVV'))
        if (this.props.form.getFieldValue('CVV').length !== 3) {
            callback('CSV form is not correct!');

        } else {
            callback();
        }
    }
    handleConfirmCardNumber = (rule, value, callback) => {

        if (this.props.form.getFieldValue('CardNumber').length !== 16) {
            callback('Card Number form is not correct!');
        } else {
            callback();
        }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
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
                                <Form.Item label="Name on Card">
                                    {getFieldDecorator('Name', {
                                        rules: [{ required: true, message: 'Please input your Name on Card!' }
                                        ],
                                    })(<Input />)}
                                </Form.Item>

                                <Form.Item label="Card Number">
                                    {getFieldDecorator('CardNumber', {
                                        rules: [{pattern: /^[0-9]+$/,message:'You must input number'},{ required: true, message: 'Please input your Card Number!' },
                                            {
                                                validator: this.handleConfirmCardNumber
                                            }],
                                    })(<Input type = 'CardNumber'/>)}
                                </Form.Item>

                                <Form.Item label = 'Expire'>
                                    <Select defaultValue="01" style={{ width: 120 }}>
                                        <Option value="01">01</Option>
                                        <Option value="02">02</Option>
                                        <Option value="03">03</Option>
                                        <Option value="04">04</Option>
                                        <Option value="05">05</Option>
                                        <Option value="06">06</Option>
                                        <Option value="07">07</Option>
                                        <Option value="08">08</Option>
                                        <Option value="09">09</Option>
                                        <Option value="10">10</Option>
                                        <Option value="11">11</Option>
                                        <Option value="12">12</Option>
                                    </Select>
                                    <Select defaultValue="19" style={{ width: 120 }}>
                                        <Option value="19">19</Option>
                                        <Option value="20">20</Option>
                                        <Option value="21">21</Option>
                                        <Option value="22">22</Option>
                                        <Option value="23">23</Option>
                                        <Option value="24">24</Option>
                                        <Option value="25">25</Option>
                                        <Option value="26">26</Option>
                                        <Option value="27">27</Option>
                                        <Option value="28">28</Option>
                                        <Option value="29">29</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="CVV">
                                    {getFieldDecorator('CVV', {
                                        rules: [{pattern: /^[0-9]+$/,message:'You must input number'},{ required: true, message: 'Please input your CVV!' },
                                            {
                                                validator: this.handleConfirmCVV
                                            }],
                                    })(<Input type = 'CVV'/>)}
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

export default Form.create() (CardPayment);
