import React, {Component, Fragment} from "react";
import {NavBar} from "antd-mobile";
import {Icon} from "antd";
import {Link} from 'react-router-dom'

class ProductDetail extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <Fragment>
                <NavBar
                    mode = "dark"
                    className={"NaviBar"}
                    leftContent= {<Link to = "/treeList"><Icon className = "returnButton" type="left" /></Link>}
                >
                    {this.props.location.treeState.tree.productName}
                </NavBar>
            </Fragment>
        )
    }
}

export default ProductDetail;