import React, {Component, Fragment} from 'react'
import {NavBar, Icon, WingBlank} from 'antd-mobile'
import './AccountLoinList.css'
import {Link} from 'react-router-dom'
import {List, InputItem, Button, WhiteSpace} from "antd-mobile";
import {createForm} from 'rc-form'

class AccountLogin extends Component{

    constructor(props){
        super(props)

        //绑定
        this.handleLeftButtonClick.bind(this)
        this.handleLoginButtonClick.bind(this)
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
                        <Icon className={"ReturnButton"} type = "left" onClick={this.handleLeftButtonClick} />
                    </Link>}
                >
                    Account Login
                </NavBar>

                <div>
                    <List renderHeader={() => 'Account Sign in'} className={"LoginList"}>
                        <InputItem

                            //Clear function, used to delete inputs contents
                            clear
                            placeholder = "Only Number Available"
                            labelNumber={15}
                            type={"number"}
                            maxLength={10}
                            ref={el => this.autoFocustInst = el}
                        >Account Name</InputItem>

                        <InputItem
                            clear
                            placeholder={"Input Password"}
                            type =  "password"
                            labelNumber={15}
                            maxLength={20}
                            ref={el => this.autoFocustInst = el}
                        >Password</InputItem>

                        <WhiteSpace size={"lg"}/>

                        <List.Item>
                                    <WingBlank size={"lg"}>
                                        <Link to={"AccountPage"}>
                                            <Button
                                                Icon className={"LoginButton"}
                                                type={"primary"}
                                                onClick={this.handleLoginButtonClick}
                                            >Account Login</Button>
                                        </Link>
                                    </WingBlank>
                        </List.Item>
                    </List>
                </div>
            </Fragment>
        )
    }

    handleLeftButtonClick(){

    }
    handleLoginButtonClick(){

    }
}

export default AccountLogin;


