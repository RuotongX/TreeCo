import React, {Component, Fragment} from 'react'
import {NavBar, Icon, WingBlank} from 'antd-mobile'
import './AccountLoinList.css'
import {Link} from 'react-router-dom'
import {List, InputItem, Button, WhiteSpace} from "antd-mobile";

class AccountLogin extends Component{

    constructor(props){
        super(props)

        this.state={
            account : '',
            password : ''
        }

        //绑定
        this.handleAccountInputChange = this.handleAccountInputChange.bind(this);
    }

    //Return render component
    render() {

        // const {getFieldProps} = this.props.form;
        return(

            //Group all the component and return to render
            <Fragment>
                <NavBar
                    className={"NavigationBar"}
                    mode={"dark"}
                    leftContent={<Link to={"/"}>
                        <Icon className={"ReturnButton"} type = "left"/>
                    </Link>}
                >
                    Account Login
                </NavBar>

                <div>
                    <List renderHeader={() => 'Account Sign in'} className={"LoginList"}>
                        <InputItem

                            //Clear function, used to delete inputs contents
                            clear
                            placeholder = "    Only Number Available"
                            labelNumber={15}
                            type={"number"}
                            maxLength={10}

                            onChange={(value) => (this.handleAccountInputChange(value))}
                        >Account</InputItem>

                        <InputItem

                            clear
                            placeholder={"  Input Password"}
                            type =  "password"
                            labelNumber={15}
                            maxLength={20}

                            onChange={(value) => (this.handlePasswordInputChange(value))}
                        >Password</InputItem>

                        <WhiteSpace size={"lg"}/>

                        <List.Item>
                            <WingBlank size={"lg"}>
                                <Link to={(this.state.account.length !== 0) && (this.state.password.length !== 0) ? "/AccountPage" : "/AccountLogin"}>
                                    <Button
                                        Icon className={"LoginButton"}
                                        disabled={(this.state.account.length !== 0) && (this.state.password.length !== 0) ? false:true}
                                        type={"primary"}
                                    >Account Login</Button>
                                </Link>
                            </WingBlank>
                        </List.Item>

                        <List.Item>
                            <WingBlank size={"lg"}>
                                <Link to={"/AccountRegisterPage"}>
                                    <Button
                                        Icon className={"RegisterButton"}
                                        type={"primary"}
                                    >Account Register</Button>
                                </Link>
                            </WingBlank>
                        </List.Item>
                    </List>
                </div>
            </Fragment>

        )
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


