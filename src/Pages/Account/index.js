import React, {Component, Fragment} from "react";
import {Button, Card, NavBar, Result, WingBlank} from "antd-mobile";
import {Link} from "react-router-dom";
import {Icon, Progress, List} from "antd";
import './Account.css'
import store from "../Store/index.js"

const myImg = src => <img src={src} className="resultIMG" alt="" />;


class Account extends Component{
    constructor(props){
        super(props)

        this.state = {
            accountInfo : store.getState().accountInformation

        }

        this.getAccountType = this.getAccountType.bind(this)
        this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
        this.handleSignOutClick = this.handleSignOutClick.bind(this);
        this.countTreeQuantity = this.countTreeQuantity.bind(this);

        store.subscribe(this.handleStoreUpdate)
    }

    render() {

        if(this.state.accountInfo){
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
                                              strokeColor={{
                                                  '0%': '#108ee9',
                                                  '100%': '#87d068',
                                              }}
                                              format={percent => percent >= 100? <Icon type="trophy"/>:`${percent.toFixed(2)} %`}
                                              percent={(this.countTreeQuantity() / 20) * 100}/>
                                </div>

                                <List className={"accountProgressList"}
                                      header={<div>My Progress</div>}>
                                    <List.Item>
                                        <List.Item.Meta
                                            title = {"Membership Class"}
                                        />
                                        <div>{this.countTreeQuantity() >= 20? "VIP Customer" : "Normal Customer"}</div>
                                    </List.Item>

                                    <List.Item>
                                        <List.Item.Meta
                                            title = {"Tree Purchased"}
                                        />
                                        <div>{this.countTreeQuantity()}</div>
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
                                        <div>{this.getAccountType()}</div>
                                    </List.Item>
                                </List>
                            </Card.Body>
                        </Card>

                        <Card className={"informationCard"}>
                            <Card.Header title={"Order History"}/>
                            <Card.Body>
                                <Link to={"/ViewOrderHistory"}>
                                    <Button>View History Order</Button>
                                </Link>
                            </Card.Body>
                        </Card>

                        <Card className={"informationCard"}>
                            <Card.Header title={"Service Center"}/>
                            <Card.Body>
                                <Link to={"/Tips"}>
                                    <Button className={"healthButton"}>Tips</Button>
                                </Link>
                                <a href="mailto:tnb5436@autuni.ac.nz?subject=customer%20health%20check%20on%20tree&amp;body=Please%20Attach%20Your%20Image%20Here">
                                    <Button className={"healthButton"}>Health Check</Button>
                                </a>
                            </Card.Body>
                        </Card>


                        <Card className={"informationCard"}>
                            <Card.Header title={"Sign Out"}/>
                            <Card.Body>
                                <Button type="warning"
                                        onClick={this.handleSignOutClick}>
                                    Sign Out
                                </Button>
                            </Card.Body>
                        </Card>
                    </WingBlank>
                </Fragment>
            )
        } else {
            return(
                <div className={"errorPage"}>
                    <NavBar
                        mode = "dark"
                        className={"ErrorAccount"}
                        leftContent= {<Link to = "/"><Icon className = "returnButton" type="left" /></Link>}
                    >
                        Error
                    </NavBar>

                    <Result
                        img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                        title="Please Login"
                        message="Please Login before continue"
                    />

                    <WingBlank size={"lg"}>
                        <Link to = "/AccountLogin">
                            <Button className={"ErrorReturnButton"}>
                                Login
                            </Button>
                        </Link>
                    </WingBlank>

                </div>
            )
        }
    }

    countTreeQuantity(){

        let treeQuantity = 0;


        this.state.accountInfo.orderList.map((orders) => {
            orders.shoopingCartElement.map((tree) => {
                treeQuantity += tree.quantity
            })
        })

        return treeQuantity
    }

    getAccountType(){
        if(this.state.accountInfo.type === 'Landscape'){
            return('Landscape Gardeners')
        } else if (this.state.accountInfo.type === 'Housing'){
            return('Housing Developers')
        } else if (this.state.accountInfo.type === 'Local'){
            return('Local Councils')
        } else if (this.state.accountInfo.type === 'Wholesale'){
            return('Wholesale')
        }

        return('General Public')
    }

    handleStoreUpdate(){
        const newState = JSON.parse(JSON.stringify(this.state))
        newState.accountInfo = store.getState().accountInformation

        this.setState(newState)
    }

    handleSignOutClick(){
        const action = {
            type: "signOutAction"
        }
        store.dispatch(action);
    }
}

export default Account;