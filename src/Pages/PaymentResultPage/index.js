import React, {Component, Fragment} from "react";
import './PaymentResultPage.css'
import {Link} from "react-router-dom";
import {NavBar, Result, Icon, WingBlank, Button} from "antd-mobile";

class PaymentResultPage extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <Fragment>
                <NavBar
                    mode = "dark"
                    className={"NaviBar"}
                >
                    Payment Result
                </NavBar>


                <Result
                    img={<Icon type="check-circle" className="spe"/>}
                    className={"paymentResult"}
                    title={"Payment Received"}
                    message={"You can check your order information under account page."}
                />

                <WingBlank size={"lg"}>
                    <Link to={"/"}>
                        <Button className= {"paymentButton"}>
                            Home Page
                        </Button>
                    </Link>
                    <Link to={"/Account"}>
                        <Button className= {"paymentButton"}>
                            Account Page
                        </Button>
                    </Link>
                </WingBlank>

            </Fragment>
        )
    }

}

export default PaymentResultPage