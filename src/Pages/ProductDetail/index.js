import React, {Component, Fragment} from "react";
import {NavBar, WingBlank, Card, List, Button, Stepper} from "antd-mobile";
import { Icon} from "antd";
import {Link} from 'react-router-dom'
import './ProductDetail.css'

class ProductDetail extends Component{

    constructor(props){
        super(props)
        this.state = this.props.location.treeState;

    }

    render() {

        if(this.state){
            return(
                <Fragment>
                    <NavBar
                        mode = "dark"
                        className={"NaviBar"}
                        leftContent= {<Link to = "/treeList"><Icon className = "returnButton" type="left" /></Link>}
                    >
                        {this.props.location.treeState.tree.productName}
                    </NavBar>

                    <WingBlank size={"lg"}>
                        <Card className={"ProductCard"}>
                            <Card.Body>
                                <img className={'ProductImage'}
                                     src = {require('../ProductImage/' + this.state.tree.img)}
                                     alt = {this.state.tree.id}
                                />

                                <List className={"DetailList"}>
                                    <List.Item extra={this.state.tree.productName}>Product Name</List.Item>
                                    <List.Item extra={this.state.tree.drain}>Drain Speed</List.Item>
                                    <List.Item extra={this.state.tree.sun}>Sun Condition</List.Item>
                                    <List.Item extra={this.state.tree.maintain}>Maintenance</List.Item>
                                    <List.Item extra={this.state.tree.height}>Maximum Height</List.Item>
                                    <List.Item extra={this.state.tree.rate}>Grow Speed</List.Item>
                                    <List.Item extra={this.state.tree.type}>Tree Category</List.Item>
                                </List>
                            </Card.Body>
                        </Card>

                        <Button type = "primary"
                                className={"PurchaseButton"}>
                            Add To Cart
                        </Button>


                    </WingBlank>


                </Fragment>
            )
        } else {
            return <div> oops </div>;
        }
    }



}

export default ProductDetail;