import React, {Component, Fragment} from "react";
import store from "../Store/index.js";
import {Link} from "react-router-dom";
import {Icon, List, Avatar} from "antd";
import {NavBar, WingBlank, Card} from "antd-mobile";
import './Tips.css'


class Tips extends Component{
    constructor(props){
        super(props)

        this.handleStoreChange = this.handleStoreChange.bind(this)

        this.state = {
            treeList : store.getState().accountInformation.orderList
        }

        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <Fragment>
                <NavBar
                    mode = "dark"
                    className={"NaviBar"}
                    leftContent= {<Link to = "/Account"><Icon className = "returnButton" type="left" /></Link>}
                >
                    Tips
                </NavBar>

                <WingBlank size={"lg"}>
                    <Card className={"tips"}>

                        <List className={"tipList"}>
                            {
                                this.getUniqueArray().map((trees) =>(
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={require('../ProductImage/' + trees.tree.img)} size='large'/>}
                                            title={trees.tree.productName}
                                            description= {this.getDescription(trees.tree.productName)}
                                        />
                                    </List.Item>
                                ))
                            }
                        </List>

                    </Card>
                </WingBlank>
            </Fragment>
        );
    }

    getUniqueArray(){
        let list = []

        this.state.treeList.map((order) => (
            order.shoopingCartElement.map((trees) => (
                list.push(trees)
            ))
        ))


        var res = [];
        for (var i = 0, arrayLen = list.length; i < arrayLen; i++) {
            for (var j = 0, resLen = res.length; j < resLen; j++ ) {
                if (list[i].tree.productName === res[j].tree.productName) {
                    break;
                }
            }

            if (j === resLen) {
                res.push(list[i])
            }
        }
        return res;

    }


    getDescription(treeName){

        if(treeName === 'Lemon Tree'){
            return 'Hello'
        } else if (treeName === 'XXX'){
            return 'Nihao'
        }

        return 'No Tips found'
    }


    handleStoreChange(){

        const newState = JSON.parse(JSON.stringify(this.state))
        newState.historyOrder = store.getState().accountInformation.orderList

        this.setState(newState)

    }
}

export default Tips;