import React, {Component, Fragment} from 'react'
import {List, WingBlank, Icon, Button, ListItem, NavBar, InputItem} from "antd-mobile";
import {Link} from "react-router-dom";

class AccountRegisterPage extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Fragment>
                <NavBar
                    className={"NavgationBar"}
                    mode={"dark"}

                    leftContent={<Link to={"/AccountLogin"}>
                        <Icon className={"ReturnButton"} type = "left"/>
                    </Link>}
                >Register Account</NavBar>

                <div>
                    <List renderHeader={() => 'Personal Information'} className={"AccountInfo"}>
                        <InputItem
                            clear
                            placeholder={"Input Your Name"}
                            maxLength={15}
                        >Name</InputItem>

                        <InputItem
                            clear
                            placeholder={"Input Your Email Address"}
                            type={"email"}
                        >Email</InputItem>

                        <InputItem
                            clear
                            placeholder={"Input Your Email Address"}
                            type={"email"}
                        >Type</InputItem>
                    </List>
                </div>
            </Fragment>
        )
    }
}

export default AccountRegisterPage