import React, {Component, Fragment} from 'react'
import {WingBlank, WhiteSpace, Icon, ListItem, NavBar, Card,InputItem} from "antd-mobile";
import {Link} from "react-router-dom";
import {List} from 'antd'
import {Select} from "antd";
import {Button} from "antd";
import "./AccountRegisterList.css"

const { Option } = Select;

function onChange(Value){
    console.log('Selected ${value}');
}

class AccountRegisterPage extends Component{

    constructor(props){
        super(props)

        this.state={
            name : '',
            email : '',
        }
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
                                >Name</InputItem>

                                <InputItem
                                    clear
                                    placeholder={"Input Your Email Address"}
                                    type={"email"}
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
                                    optionFilterProp={onChange}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) > 0}

                                >
                                    <option value={"Landscape"} >Landscape Gardeners</option>
                                    <option value={"Housing"}>Housing Developers</option>
                                    <option value={"Local"}>Local Councils</option>
                                    <option value={"General"}>General Public</option>
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
                                    maxLength={15}
                                >Account</InputItem>

                                <InputItem
                                    clear
                                    placeholder={"Input Password"}
                                    type={"password"}
                                >Password</InputItem>

                            </List>

                        </Card.Body>
                    </Card>
                </WingBlank>

                <WingBlank size={"lg"}>

                            <List className={"RegisterButton"}>

                                <Link to={"./Account"}>
                                    <Button type={"primary"} style={{width: "100%", height: 40}} ghost>
                                        Register
                                    </Button>
                                </Link>
                            </List>

                </WingBlank>
            </Fragment>
        )
    }
}

export default AccountRegisterPage