import React, {Component, Fragment} from 'react'
import {WingBlank, WhiteSpace, Icon, ListItem, NavBar, Card,InputItem} from "antd-mobile";
import {Link} from "react-router-dom";
import {List} from 'antd'
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
            type : ''
        }

        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handleAccountIDInputChange = this.handleAccountIDInputChange.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
        this.handleTypeSelectChange = this.handleTypeSelectChange.bind(this);

        this.handleRegisterClick = this.handleRegisterClick.bind(this);
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

                <WingBlank size={"lg"}>
                    <Card className={"InfoCard"}>
                        <Card.Header title={"Personal Information:"}/>

                        <Card.Body>

                            <List className={"AccountInfo"}>

                                <InputItem
                                    clear
                                    placeholder={"Input Your Name"}
                                    maxLength={15}

                                    onChange={(value => (this.handleNameInputChange(value)))}
                                >Name</InputItem>

                                <InputItem
                                    clear
                                    placeholder={"Input Your Email Address"}
                                    type={"email"}

                                    onChange={(value => (this.handleEmailInputChange(value)))}
                                >Email</InputItem>

                            </List>

                        </Card.Body>
                    </Card>
                </WingBlank>

                <WingBlank>
                    <Card className={"InfoCard"}>
                        <Card.Header title={"Account Type"}/>

                        <Card.Body>

                            <List className={"AccountInfo"}>

                                <Select
                                    style={{ width: "100%"}}
                                    placeholder={"Select Account Type"}
                                    optionFilterProp={this.handleTypeSelectChange}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) > 0}

                                    onChange={(value => (this.handleTypeSelectChange(value)))}
                                >
                                    <option value={"Landscape Gardeners"} >Landscape Gardeners</option>
                                    <option value={"Housing Developers"}>Housing Developers</option>
                                    <option value={"Local Councils"}>Local Councils</option>
                                    <option value={"General Public"}>General Public</option>
                                </Select>

                            </List>

                        </Card.Body>
                    </Card>
                </WingBlank>

                <WingBlank>
                    <Card className={"InfoCard"}>
                        <Card.Header title={"Account Information"}/>

                        <Card.Body>

                            <List className={"AccountInfo"}>

                                <InputItem
                                    clear
                                    placeholder={"Only Number Available"}
                                    type={"number"}

                                    onChange={(value => (this.handleAccountIDInputChange(value)))}
                                >Account</InputItem>

                                <InputItem
                                    clear
                                    placeholder={"Input Password"}
                                    type={"password"}

                                    onChange={(value => (this.handlePasswordInputChange(value)))}
                                >Password</InputItem>

                            </List>

                        </Card.Body>
                    </Card>
                </WingBlank>

                <WingBlank size={"lg"}>

                            <List className={"RegisterButton"}>

                                <Link to={((this.state.name.length !== 0) && (this.state.email.length !== 0)
                                             && (this.state.type.length !== 0) && (this.state.accountID.length !== 0) && (this.state.password.length !== 0)) ? "/Account" : "/AccountRegisterPage"}>
                                    <Button
                                        type={"primary"}
                                        style={{width: "100%", height: 40}}
                                        ghost
                                        disabled={((this.state.name.length !== 0) && (this.state.email.length !== 0)
                                            && (this.state.type.length !== 0) && (this.state.accountID.length !== 0) && (this.state.password.length !== 0)) ? false : true}

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

    handleNameInputChange(value){
        const newState = JSON.parse(JSON.stringify(this.state))
        newState.name = value

        this.setState(newState)
    }

    handleEmailInputChange(value){
        const newState = JSON.parse(JSON.stringify(this.state))
        newState.email = value

        this.setState(newState)
    }

    handleAccountIDInputChange(value){
        const newState = JSON.parse(JSON.stringify(this.state))
        newState.accountID = value

        this.setState(newState)
    }

    handlePasswordInputChange(value){
        const newState = JSON.parse(JSON.stringify(this.state))
        newState.password = value

        this.setState(newState)
    }

    handleTypeSelectChange(value){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.type = value

        this.setState(newState)
    }

    handleRegisterClick(){
        const accountInformatoin = {
            name : this.state.name,
            email : this.state.email,
            type : this.state.type,
            orderList : [],
            accountID : this.state.accountID,
            password : this.state.password,
            shoppingCart : []
        }

        const accountAction = {
            type : 'accountRegisterAction',
            value : accountInformatoin
        }

        store.dispatch(accountAction)
    }
}

export default AccountRegisterPage