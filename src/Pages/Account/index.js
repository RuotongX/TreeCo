import React, {Component, Fragment} from "react";
import {Button, Card, NavBar, WingBlank} from "antd-mobile";
import {Link} from "react-router-dom";
import {Icon, Progress, List} from "antd";
import './Account.css'

class Account extends Component{
    constructor(props){
        super(props)
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
                                          percent={75}/>
                            </div>

                            <List className={"accountProgressList"}
                                  header={<div>My Progress</div>}>
                                <List.Item>
                                    <List.Item.Meta
                                        title = {"Membership Class"}
                                    />
                                    <div>VIP Customer</div>
                                </List.Item>

                                <List.Item>
                                    <List.Item.Meta
                                        title = {"Tree Purchased"}
                                    />
                                    <div>35</div>
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
                                    <div>12354392</div>
                                </List.Item>

                                <List.Item>
                                    <List.Item.Meta
                                        title = {"Account Name"}
                                    />
                                    <div>Basco_Wang</div>
                                </List.Item>

                                <List.Item>
                                    <List.Item.Meta
                                        title = {"Account Type"}
                                    />
                                    <div>DIY User</div>
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
}

export default Account;