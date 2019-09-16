import React, {Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import {Drawer,Button, Icon} from 'antd';
import {Link} from 'react-router-dom'
import './HomePage.css';
import { Card,Carousel } from 'antd';
import {NavBar} from "antd-mobile";

class HomePage extends Component{
    state={visible:false};
    showDrawer = () =>{
        this.setState({
            visible:true,
        });
    };
    onClose = () =>{
        this.setState({
            visible:false,
        });
    };
    render() {
        return(
            <Fragment>
                <div className={'NaviBar'}>
                    {/*product list navigation bar*/}
                    <NavBar mode = "dark"
                            leftContent={
                                <Icon type = "menu" style={{fontSize: '22px'}}
                                     onClick={this.showDrawer}/>
                            }
                    >
                        Product List
                    </NavBar>
                </div>
                <Drawer
                    title = "Menu"
                    placement = "right"
                    closable = {false}
                    onClose = {this.onClose}
                    visible = {this.state.visible}
                    placement = "left"
                >
                    <Button className={'button'}>
                        <Link to = "/treeList">
                            TreeList
                        </Link>
                    </Button>

                    <Button className={'button'}>
                        <Link to = "/AccountLogin">
                            Account Login
                        </Link>
                    </Button>


                    <Button className={'button'}>
                        <Link to = "/PromotionDetail">
                            Promotion Detail
                        </Link>
                    </Button>
                </Drawer>
                <Card style={{position:"relative",float:"top"}}>
                    <p style={{fontSize:30}}>Hi</p>
                    <p style={{fontSize:20}}>Customer</p>
                </Card>
                <Carousel autoplay dots={true} style={{height:150,position:"relative",float:"top"}}>
                    <Card bodyStyle= {{backgroundColor:"#94b8b8",height:150}} >
                        <h3 >Promotion!!!</h3>
                    </Card >
                    <Card bodyStyle= {{backgroundColor:"#94b7b7",height:150}}>
                        <h3>Huge Deal!!</h3>
                    </Card>
                    <Card bodyStyle= {{backgroundColor:"#94b6b6",height:150}}>
                        <h3>Seller sell their underwear just because they are poor!!</h3>
                    </Card>
                    <Card bodyStyle= {{backgroundColor:"#94b5b5",height:150}}>
                        <h3>Cheap Tree!!</h3>
                    </Card>
                </Carousel>
            </Fragment>
        )
    }
}

export default HomePage;

{/*<div>*/}
{/*    <div className={'description'}> this is home page, happy coding! </div>*/}
{/*    <Button className={'button'}>*/}
{/*        <Link to = "/treeList">*/}
{/*            TreeList*/}
{/*        </Link>*/}
{/*    </Button>*/}

{/*    <Button className={'button'}>*/}
{/*        <Link to = "/AccountLogin">*/}
{/*            Account Login*/}
{/*        </Link>*/}
{/*    </Button>*/}


{/*    <Button className={'button'}>*/}
{/*        <Link to = "/PromotionDetail">*/}
{/*            Promotion Detail*/}
{/*        </Link>*/}
{/*    </Button>*/}
{/*</div>*/}