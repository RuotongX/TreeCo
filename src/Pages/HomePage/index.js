import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Drawer, List, Icon, Avatar} from 'antd';
import {Link} from 'react-router-dom'
import './HomePage.css';
import {Card, Carousel} from 'antd';
import {NavBar} from "antd-mobile";

const listData = [];
listData.push({
    href: 'https://www.almanac.com/plant/apples',
    title: 'How to plant an apple as beginner.',
    avatar: 'https://media.istockphoto.com/vectors/bulb-icon-stock-vector-illustration-flat-design-vector-id901337994?k=6&m=901337994&s=612x612&w=0&h=z39spN7UYe8IaF4cmO0g8XMcG96HUIMHLR_f1FV_F98=',
    description:
        'Apples trees aren’t just for people with acres upon acres of land. Even in a small space, you can plant an apple tree.',
    content:
        'Dig a hole approximately twice the diameter of the root system and 2 feet deep. Place some of the loose soil back into the hole...',
});


class HomePage extends Component {
    state = {visible: false};
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <Fragment>
                <div >
                    <NavBar mode="dark"
                            className={'NaviBar'}
                            style = {{fontFamily:'Brush Script Std'}}
                            leftContent={
                                <Icon type="menu" style={{fontSize: '22px'}}
                                      onClick={this.showDrawer}/>
                            }
                    >
                        <img alt="HomepageLogo"
                             className={"HomepageLogo"}
                             src = {require('../CompanyMaterials/homepageLogo.png')}/>
                    </NavBar>
                </div>
                <Drawer
                    title="Menu"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    placement="left"
                >
                    <List>
                        <List.Item>
                            <Link to="/treeList" style={{color: "black", fontSize: 20}}>
                                TreeList
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/AccountLogin" style={{color: "black", fontSize: 20}}>
                                Account Login
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/PromotionDetail" style={{color: "black", fontSize: 20}}>
                                Promotion Detail
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/ShoppingCart" style={{color: "black", fontSize: 20}}>
                                Shopping Cart
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/ProductDetail" style={{color: "black", fontSize: 20}}>
                                Product Detail (for test)
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/PurchaseProcessing" style={{color: "black", fontSize: 20}}>
                                Purchase Processing (for test)
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/MapContainer" style={{color: "black", fontSize: 20}}>
                                Map (for test)
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/CheckOut" style={{color: "black", fontSize: 20}}>
                                CheckOut
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/CardPayment" style={{color: "black", fontSize: 20}}>
                                CardPayment
                            </Link>
                        </List.Item>
                    </List>
                </Drawer>

                <img alt="HomepagePoster"
                     className={"HomepagePoster"}
                     src = {require('../CompanyMaterials/homepagePoster.png')}/>

                
                <Carousel autoplay dots={true} >

                    <img alt="HomepagePosterInternationalPayment"
                         className={"HomepagePromotionPoster"}
                         src = {require('../CompanyMaterials/promotionIMG1.png')}/>

                    <Card bodyStyle={{backgroundColor: "#94b7b7"}}>
                        <h3>Huge Deal!!</h3>
                    </Card>
                    <Card bodyStyle={{backgroundColor: "#94b6b6"}}>
                        <h3>Seller sell their underwear just because they are poor!!</h3>
                    </Card>
                    <Card bodyStyle={{backgroundColor: "#94b5b5"}}>
                        <h3>Cheap Tree!!</h3>
                    </Card>
                </Carousel>
                <List
                    itemLayout="vertical"
                    size="large"
                    // pagination={{
                    //     onChange: page => {
                    //         console.log(page);
                    //     },
                    //     pageSize: 10,
                    // }}
                    dataSource={listData}
                    header={
                        <div>
                            <b>Tree planting guide</b>
                        </div>
                    }
                    style={{margin: '0 5% 0 5%'}}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                //<IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                //<IconText type="like-o" text="156" key="list-vertical-like-o"/>,

                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/apple-tree.jpg?itok=yIKBkZnt"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar}/>}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

export default HomePage;
