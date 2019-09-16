import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import TreeList from "../TreeList";
import HomePage from "../HomePage";
import AccountLogin from "../AccountLogin";
import PromotionDetail from "../PromotionDetail"
import ShoppingCart from "../ShoppingCart";
import ProductDetail from "../ProductDetail";


class TreeCoPageRouter extends Component{

    render() {
        return(
            <div>
                <BrowserRouter>
                    <Route path ='/' exact component = {HomePage} ></Route>
                    <Route path ='/treeList' exact component = {TreeList}></Route>
                    <Route path ='/AccountLogin' exact component = {AccountLogin}></Route>
                    <Route path ='/PromotionDetail' exact component = {PromotionDetail}></Route>
                    <Route path ='/ShoppingCart' exact component = {ShoppingCart}></Route>
                    <Route path ='/ProductDetail' exact component = {ProductDetail}></Route>
                </BrowserRouter>
            </div>
        )
    }
}

// render={() =><Button><Link to = "/treeList">treeList</Link></Button>}

export default TreeCoPageRouter;