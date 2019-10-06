import React, {Component, Fragment} from "react";
import {Button, Card, NavBar, WingBlank} from "antd-mobile";
import {Link} from "react-router-dom";
import {Icon, Progress, List} from "antd";
import './Account.css'
import store from "../Store/index.js"

class Account extends Component{
    constructor(props){
        super(props)

        this.state = {
            accountInfo : store.getState().accountInformation

        }

        this.handleStoreUpdate = this.handleStoreUpdate.bind(this);

        store.subscribe(this.handleStoreUpdate)
    }

    render() {
        return(
            <Fragment>
                <NavBar
                    mode = "dark"
                    className={"NaviBar"}
                    leftContent= {<Link to = "/"><Icon className = "returnButton" type="left" /></Link>}
                >
                    Account
                </NavBar>

                <WingBlank size={"lg"}>
                    <Card className={"ProgessBoard"}>
                        <Card.Body>
                            <div className={"progressDashboard"}>
                                <Progress type = "circle"
                                          width={150}
                                          percent={0}/>
                            </div>

                            <List className={"accountProgressList"}
                                  header={<div>My Progress</div>}>
                                <List.Item>
                                    <List.Item.Meta
                                        title = {"Membership Class"}
                                    />
                                    <div>Normal Customer</div>
                                </List.Item>

                                <List.Item>
                                    <List.Item.Meta
                                        title = {"Tree Purchased"}
                                    />
                                    <div>0</div>
                                </List.Item>
                            </List>
                        </Card.Body>
                    </Card>

                    <Card className={"informationCard"}>
                        <Card.Header title={"Account Information"}/>
                        <Card.Body>
                            <List className={"accountProgressList"}>
                                <List.Item>
                                    <List.Item.Meta
                                        title = {"Account ID"}
                                    />
                                    <div>{this.state.accountInfo.accountID}</div>
                                </List.Item>

                                <List.Item>
                                    <List.Item.Meta
                                        title = {"Account Name"}
                                    />
                                    <div>{this.state.accountInfo.name}</div>
                                </List.Item>

                                <List.Item>
                                    <List.Item.Meta
                                        title = {"Account Type"}
                                    />
                                    <div>{this.state.accountInfo.type}</div>
                                </List.Item>
                            </List>
                        </Card.Body>
                    </Card>

                    <Card className={"informationCard"}>
                        <Card.Header title={"Order History"}/>
                        <Card.Body>
                            <Button>View History Order</Button>
                        </Card.Body>
                    </Card>

                    <Card className={"informationCard"}>
                        <Card.Header title={"Service Center"}/>
                        <Card.Body>
                            <a href="mailto:tnb5436@autuni.ac.nz?subject=customer%20health%20check%20on%20tree&amp;body=Please%20Attach%20Your%20Image%20Here">
                                <Button>Health Check</Button>
                            </a>
                        </Card.Body>

                    </Card>
                </WingBlank>
            </Fragment>
        )
    }

    handleStoreUpdate(){
        const newState = JSON.parse(JSON.stringify(this.state))
        newState.accountInfo = store.getState().accountInformation

        this.setState(newState)
    }
}

export default Account;