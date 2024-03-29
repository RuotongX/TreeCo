import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter, Route} from 'react-router-dom'
import TreeList from "../TreeList";
import HomePage from "../HomePage";
import AccountLogin from "../AccountLogin";
import PromotionDetail from "../PromotionDetail"
import ShoppingCart from "../ShoppingCart";
import ProductDetail from "../ProductDetail";
import PurchaseProcessing from "../PurchaseProcessing";
import AccountRegisterPage from "../AccountRegisterPage"
import CheckOut from "../CheckOut";
import CardPayment from "../CardPayment";
import Account from "../Account";
import ViewOrderHistory from "../ViewOrderHistory";
import Tips from "../Tips";


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
                    <Route path ='/PurchaseProcessing' exact component = {PurchaseProcessing}></Route>
                    <Route path = '/AccountRegisterPage' exact component = {AccountRegisterPage}></Route>
                    <Route path ='/CheckOut' exact component = {CheckOut}></Route>
                    <Route path ='/CardPayment' exact component = {CardPayment}></Route>
                    <Route path = '/Account' exact component = {Account}></Route>
                    <Route path = '/ViewOrderHistory' exact component = {ViewOrderHistory}></Route>
                    <Route path = '/Tips' exact component = {Tips}></Route>
                </BrowserRouter>
            </div>
        )
    }
}

// render={() =><Button><Link to = "/treeList">treeList</Link></Button>}

export default TreeCoPageRouter;