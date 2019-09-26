import React, {Component,Fragment} from 'react'
import { Card, WingBlank, WhiteSpace,NavBar,Icon } from 'antd-mobile';


class PromotionDetail extends Component{
    render() {
        return (
            <Fragment>
                <div className={'NavBar'}>
                    {/*product list navigation bar*/}
                    <NavBar mode = "dark"
                            leftContent={<Icon type = "left"/>}>
                        Promotion Details
                    </NavBar>
                </div>

                <WingBlank size="lg" >
                    <WhiteSpace size="lg"/>
                    <Card>

                        <Card.Header title="Discount"/>
                        <Card.Body>
                            <div><p>Users who sign up during the Christmas season can get a coupon of $10 for recruits.</p>
                                 </div>
                        </Card.Body>

                    </Card>
                </WingBlank>
                <WingBlank size="lg" >
                    <WhiteSpace size="lg"/>
                    <Card>

                        <Card.Header title="Discount"/>
                        <Card.Body>
                            <div>
                                <p>Users who have registered on this platform for one year can get a virtual sapling for free to build an oasis in the dry area of the earth!!</p>
                                </div>
                        </Card.Body>

                    </Card>
                </WingBlank>

                <WingBlank size="lg" >
                    <WhiteSpace size="lg"/>
                    <Card>

                        <Card.Header title="Discount"/>
                        <Card.Body>
                            <div>
                                <p>Buy more than ten trees can get a free tree!!</p>
                               </div>
                        </Card.Body>

                    </Card>
                </WingBlank>

                <WingBlank size="lg" >
                    <WhiteSpace size="lg"/>
                    <Card>

                        <Card.Header title="Discount"/>
                        <Card.Body>
                            <div>
                                <p>VIP membership can get -10% price discount  </p> </div>
                        </Card.Body>

                    </Card>
                </WingBlank>



            </Fragment>

        );
    }
}




export default PromotionDetail;