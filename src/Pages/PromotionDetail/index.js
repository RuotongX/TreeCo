import React, {Component,Fragment} from 'react'
import {Card, WingBlank, WhiteSpace,NavBar,Icon } from 'antd-mobile';
import {Link} from 'react-router-dom'


class PromotionDetail extends Component{
    render() {
        return (
            <Fragment>
                <div>
                    {/*product list navigation bar*/}
                    <NavBar mode="dark"
                            className={'NavBar'}
                            leftContent={<Link to="/"><Icon type="left"
                                                            className={'returnButton'}
                                                            onClick={this.handleResetAction}

                            /></Link>}
                            rightContent={[
                                <Icon type="control"
                                      style={{fontSize: '22px'}}
                                      onClick={this.handleDrawerOpenChange}/>
                            ]}
                    >
                        Product List
                    </NavBar>
                </div>

                <WingBlank size="lg" >
                    <WhiteSpace size="lg"/>
                    <Card>

                        <Card.Header title="Christmas Discount"/>
                        <Card.Body>
                            <div><p>Customers who sign up during the Christmas season can get a coupon of $10 for recruits.</p>
                            </div>
                        </Card.Body>

                    </Card>
                </WingBlank>
                <WingBlank size="lg" >
                    <WhiteSpace size="lg"/>
                    <Card>

                        <Card.Header title="New Customers preferential"/>
                        <Card.Body>
                            <div>
                                <p>Customers who have registered on this platform for one year can get a virtual sapling for free to build an oasis in the dry area of the earth!!</p>
                            </div>
                        </Card.Body>

                    </Card>
                </WingBlank>

                <WingBlank size="lg" >
                    <WhiteSpace size="lg"/>
                    <Card>

                        <Card.Header title="Preferential buy tree"/>
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

                        <Card.Header title="Permanent benefits "/>
                        <Card.Body>
                            <div>
                                <p>VIP Customers could get -10% price discount  </p> </div>
                        </Card.Body>

                    </Card>
                </WingBlank>



            </Fragment>

        );
    }
}




export default PromotionDetail;