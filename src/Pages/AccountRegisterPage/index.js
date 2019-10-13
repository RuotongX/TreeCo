import React, {Component, Fragment} from 'react'
import {WingBlank, WhiteSpace, Icon, ListItem, NavBar, Card,InputItem} from "antd-mobile";
import {Link} from "react-router-dom";
import {Form, List, Input} from 'antd'
import {Select} from "antd";
import {Button} from "antd";
import "./AccountRegisterList.css"
import store from "../Store/index.js"

const { Option } = Select;

class AccountRegisterPage extends Component{

    constructor(props){
        super(props)

        this.state={
            name : '',
            email : '',
            accountID : '',
            password : '',
            type : '',
            checkout: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStateCheck = this.handleStateCheck.bind(this);

        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Fragment>
                <NavBar
                    className={"NavgationBar"}
                    mode={"dark"}

                    leftContent={<Link to={"/AccountLogin"}>
                        <Icon className={"ReturnButton"} type = "left"/>
                    </Link>}
                >Register Account</NavBar>

                <WingBlank size={"lg"}>
                    <Card className={"InfoCard"}>
                        <Card.Header title={"Personal Information:"}/>

                        <Card.Body>

                            <Form {...formItemLayout} onSubmit={e => {this.handleSubmit(); this.handleStateCheck()}}>

                                <Form.Item label={"Name"}>
                                    {getFieldDecorator('name',{
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your name.', whiteSpace: true,
                                            },
                                        ],
                                    })(<Input style={{ width: '100%'}} onChange={this.handleStateCheck}/>)}

                                </Form.Item>

                                <Form.Item label="E-mail" >
                                    {getFieldDecorator('email', {
                                        rules: [
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',

                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ],
                                    })(<Input style={{ width: '100%'}} onChange={this.handleStateCheck}/>)}
                                </Form.Item>
                            </Form>
                        </Card.Body>
                    </Card>
                </WingBlank>

                <WingBlank>
                    <Card className={"InfoCard"}>
                        <Card.Header title={"Account Type"}/>

                        <Card.Body>

                            <Form {...formItemLayout} onSubmit={e => {this.handleSubmit(); this.handleStateCheck()}}>

                                <Form.Item label={"Account Type"}>
                                    {getFieldDecorator('accountType',{
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your account ID.', whiteSpace: true,
                                            },
                                        ],
                                    })
                                    (<Select
                                        style={{ width: "100%"}}
                                        placeholder={"Select Account Type"}
                                        optionFilterProp={this.handleTypeSelectChange}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) > 0}

                                        onChange={this.handleStateCheck}
                                    >
                                        <option value={"Landscape Gardeners"} >Landscape Gardeners</option>
                                        <option value={"Housing Developers"}>Housing Developers</option>
                                        <option value={"Local Councils"}>Local Councils</option>
                                        <option value={"General Public"}>General Public</option>
                                    </Select>)}

                                </Form.Item>

                            </Form>

                        </Card.Body>
                    </Card>
                </WingBlank>

                <WingBlank>
                    <Card className={"InfoCard"}>
                        <Card.Header title={"Account Information"}/>

                        <Card.Body>

                            <Form {...formItemLayout} onSubmit={e => {this.handleSubmit(); this.handleStateCheck()}}>

                                <Form.Item label={"Account"} >
                                    {getFieldDecorator('account',{
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your account ID.', whiteSpace: true,
                                            },
                                        ],
                                    })(<Input style={{ width: '100%'}} onChange={this.handleStateCheck}/>)}

                                </Form.Item>

                                <Form.Item label="Password" hasFeedback>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'The input is not valid password!',
                                            },
                                        ],
                                    })(<Input.Password style={{ width: '100%'}} onChange={this.handleStateCheck}/>)}
                                </Form.Item>
                            </Form>

                        </Card.Body>
                    </Card>
                </WingBlank>

                <WingBlank size={"lg"}>

                            <List className={"RegisterButton"}>

                                <Link to={this.state.checkout ? "/Account" : "/AccountRegisterPage"}>
                                    <Button
                                        type={"primary"}
                                        style={{width: "100%", height: 40}}
                                        ghost
                                        disabled={this.state.checkout ? false : true}

                                        onClick={this.handleRegisterClick}
                                    >
                                        Register
                                    </Button>
                                </Link>
                            </List>

                </WingBlank>
            </Fragment>
        )
    }

    handleStateCheck = e =>{
        if(this.props.form.getFieldValue('name') !== undefined && this.props.form.getFieldValue('email') !== undefined &&
            this.props.form.getFieldValue('account') !== undefined &&this.props.form.getFieldValue('password') !== undefined && this.props.form.getFieldValue('accountType')) {

            this.state.checkout = true;
        }else {
            this.state.checkout= false;

        }
    }

    //handleSubmit function which used to get changed value when the user input context
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleRegisterClick(){
        const accountInformatoin = {
            name : this.props.form.getFieldValue('name'),
            email : this.props.form.getFieldValue('email'),
            type : this.props.form.getFieldValue('accountType'),
            orderList : [],
            accountID : this.props.form.getFieldValue('account'),
            password : this.props.form.getFieldValue('password'),
            shoppingCart : []
        }

        const accountAction = {
            type : 'accountRegisterAction',
            value : accountInformatoin
        }

        store.dispatch(accountAction)
    }
}

export default Form.create()(AccountRegisterPage);