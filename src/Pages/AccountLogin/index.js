import React, {Component, Fragment} from 'react'
import {List} from 'antd'
import './AccountLoinList.css'
import {Link} from 'react-router-dom'
import {InputItem, Button, WhiteSpace, Card, NavBar, Icon, WingBlank} from "antd-mobile";

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
                                            placeholder={"sInput Password"}
                                            type =  "password"
                                            maxLength={20}

                                            onChange={(value) => (this.handlePasswordInputChange(value))}
                                        >Password</InputItem>
                                    </List>

                                <Link to={(this.state.account.length !== 0) && (this.state.password.length !== 0) ? "/Account" : "/AccountLogin"}>
                                    <Button
                                        Icon className={"LoginButton"}
                                        disabled={(this.state.account.length !== 0) && (this.state.password.length !== 0) ? false:true}
                                        type={"primary"}
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
                                <Button
                                    Icon className={"RegisterButton"}
                                >Account Register</Button>
                            </Link>
                        </Card.Body>

                    </Card>
                </WingBlank>
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


