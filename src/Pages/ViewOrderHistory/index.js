import React, {Component, Fragment} from "react";
import './viewOrderHistory.css'
import {NavBar, WingBlank, Card, WhiteSpace} from "antd-mobile";
import {Link} from "react-router-dom";
import {Icon, List} from "antd";
import store from "../Store/index.js";


class ViewOrderHistory extends Component{
    constructor(props){
        super(props)

        this.handleStoreChange = this.handleStoreChange.bind(this)

        this.state = {
            historyOrder : store.getState().accountInformation.orderList
        }
        store.subscribe(this.handleStoreChange)
    }

    render() {

        return(
            <Fragment>
                <NavBar
                    mode = "dark"
                    className={"NaviBar"}
                    leftContent= {<Link to = "/Account"><Icon className = "returnButton" type="left" /></Link>}
                >
                    Orders
                </NavBar>

                <WingBlank size={"lg"}>
                    {
                        this.state.historyOrder.map((order,index) => (
                            <Card className={"OrderCard"}>
                                {
                                    <Fragment>
                                        <Card.Header title={String.prototype.concat("Past Order #", index+1)}/>
                                        <List>

                                            <List.Item className={"orderHistoryInfo"}
                                                       extra={order.pickuper}>
                                                {"Name: "}
                                            </List.Item>

                                            <List.Item className={"orderHistoryInfo"}
                                                       extra={order.pickupPhone}>
                                                {"Contact Number: "}
                                            </List.Item>


                                            <List.Item className={"orderHistoryInfo"}
                                                       extra={order.pickupEmail}>
                                                {"Contact E-Mail: "}
                                            </List.Item>

                                            <List.Item className={"orderHistoryInfo"}
                                                       extra={order.handOverMethod}>
                                                {"Handover Method: "}
                                            </List.Item>

                                            <List.Item className={"orderHistoryInfo"}
                                                       extra={order.pickupLocation === 'NONE'? 'Not Applicable' : order.pickupLocation}>
                                                {"Pickup Location: "}
                                            </List.Item>

                                            <List.Item className={"orderHistoryInfo"}
                                                       extra={"Pending"}>
                                                {"Order Status: "}
                                            </List.Item>
                                        </List>


                                        <Card.Body>
                                            {
                                                order.shoopingCartElement.map((trees => (
                                                    <List>
                                                        <List.Item>
                                                            <List.Item.Meta
                                                                title = {trees.tree.productName}
                                                                description = {String.prototype.concat("Size: ", trees.size)}
                                                            />
                                                            {trees.quantity}
                                                        </List.Item>
                                                        <WhiteSpace size={"15px"}/>
                                                    </List>
                                                )))
                                            }
                                        </Card.Body>

                                        <Card.Body>
                                            {
                                                order.pickupLocation === 'NONE'?
                                                    <div className={"Mapservice"}>Map Service is unavailable due to handover method</div> :

                                                    <div style={{height:"200px"}}>Map</div>
                                            }
                                        </Card.Body>
                                    </Fragment>
                                }
                            </Card>
                        ))
                    }
                </WingBlank>

            </Fragment>
        )

    }

    handleStoreChange(){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.historyOrder = store.getState().accountInformation.orderList

        this.setState(newState)

    }
}


export default ViewOrderHistory;