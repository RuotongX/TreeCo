import React, {Component, Fragment} from 'react'
import {List} from 'antd'
import './AccountLoinList.css'
import {Link} from 'react-router-dom'
import {InputItem, Button, WhiteSpace, Card, NavBar, Icon, WingBlank, Toast} from "antd-mobile";
import store from "../Store/index.js"

class AccountLogin extends Component{

    constructor(props){
        super(props)

        this.state={
            account : '',
            password : ''
        }

        //绑定
        this.handleAccountInputChange = this.handleAccountInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    }

    getFileProps = () =>{

    }

    //Return render component
    render() {

        return(

            //Group all the component and return to render
            <Fragment>
                <NavBar
                    className= "NaviBar"
                    mode={"dark"}
                    leftContent={<Link to={"/"}>
                        <Icon className={"ReturnButton"} type = "left"/>
                    </Link>}
                >
                    Account Login
                </NavBar>


                <WingBlank size={"lg"}>
                    <Card className={"loginCard"}>
                        <Card.Header title={"Sign in"}/>

                            <Card.Body>

                                    <List className={"LoginList"}>

                                        <InputItem
                                            //Clear function, used to delete inputs contents
                                            clear
                                            placeholder = "Only Number Available"
                                            type={"number"}
                                            maxLength={10}

                                            onChange={(value) => (this.handleAccountInputChange(value))}
                                        >Account</InputItem>

                                        <InputItem

                                            clear
                                            placeholder={"Input Password"}
                                            type =  "password"
                                            maxLength={20}

                                            onChange={(value) => (this.handlePasswordInputChange(value))}
                                        >Password</InputItem>
                                    </List>

                                <Link to={(this.state.account === '123456' && this.state.password === 'admin') ? "/Account" : "/AccountLogin"}>
                                    <Button
                                        Icon className={"LoginButton"}
                                        disabled={(this.state.account.length !== 0) && (this.state.password.length !== 0) ? false:true}
                                        type={"primary"}
                                        onClick={this.handleLoginClick}
                                    >Account Login</Button>
                                </Link>

                            </Card.Body>

                    </Card>
                </WingBlank>

                <WingBlank size={"lg"}>
                    <Card className={"loginCard"}>
                        <Card.Header title={"Register"}/>

                        <Card.Body>
                            <Link to={"/AccountRegisterPage"}>
                                <Button className={"RegisterButton"} >
                                    Account Register
                                </Button>

                            </Link>
                        </Card.Body>

                    </Card>
                </WingBlank>
            </Fragment>

        )
    }

    handleLoginClick() {
        if(this.state.account === '123456' && this.state.password === 'admin'){
            const accountInformation={
                accountID: '123456',
                password : 'admin',
                type : 'Landscape',
                name : 'Basco',
                orderList : [],
                email : '123@autuni.ac.nz',
                shoppingCart : [{tree:{id:1, productName : 'Lemon Tree', drain : 'Fast', sun : 'Sunny', maintain : 'Low', height : 2, rate : 'Fast', price: 18.99, img: 'lemon_tree.jpg', type: 'Fruit Tree', filterRemove:false},quantity:6, size:'Large',price: 999.99},
                    {tree:{id:9, productName : 'Hardwood', drain : 'Any', sun : 'Shade', maintain : 'High', height : 7, rate : 'Medium', price: 84.59, img: 'hardwood.jpg', type: 'Hardwood', filterRemove:false},quantity:3, size:'Medium',price: 633.99}]
            }

            const accountAction={
                type : 'accountLoginAction',
                value : accountInformation
            }

            store.dispatch(accountAction)
        } else {
            Toast.fail('Account or Password is incorrect!', 1);
        }
    }

    handleAccountInputChange(value){
        console.log(value)

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.account = value

        this.setState(newState)
    }

    handlePasswordInputChange(value){
        console.log(value)

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.password = value

        this.setState(newState)
    }
}

export default AccountLogin;


