import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './ProductList.css';
import {Button, Icon, Divider} from 'antd';
import {NavBar, Card, WingBlank, WhiteSpace, Pagination, SearchBar} from 'antd-mobile';
import IMG from './testTree.jpg'

class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            showSearchBar : false
        }

        this.handleSearchClick = this.handleSearchClick.bind(this);
    }


    render() {
        return (
            <Fragment>
                <div className={'NaviBar'}>
                    {/*product list navigation bar*/}
                    <NavBar mode = "dark"
                            leftContent={<Icon type = "left"/>}
                            rightContent={[
                                <Icon type = "search" style={{fontSize: '18px', marginRight: '12px'}} onClick={this.handleSearchClick}/>,
                                <Icon type = "control" style={{fontSize: '22px'}} />
                            ]}
                    >
                        Product List
                    </NavBar>
                </div>

                <Fragment>
                    {this.state.showSearchBar? this.getSearchBar():''}
                </Fragment>

                <div className={'ProductCard'}>
                    {/*product list */}
                    <WingBlank size = "lg">
                        <WhiteSpace size = "lg"/>
                            <Card>
                                <Card.Body
                                    extra={<span>this is extra</span>}>
                                    <img className = "ProductIMG"
                                         src = {IMG}
                                         alt = "Tree"
                                    />
                                    <p className = "ProductName">Description: a tree.</p>
                                    <Divider className = "ProductDivider" dashed/>

                                    {/*style={{color: "#FB966E",marginTop: '2px'}}>$998.0*/}
                                </Card.Body>
                                <Card.Footer content= {
                                    <Button className={"ProductPriceButton"}>
                                        <span className={"ProductPrice"}>
                                            $299
                                        </span>
                                    </Button>
                                }/>
                            </Card>
                    </WingBlank>
                </div>

                <div className={'ProductCard'}>
                    {/*product list */}
                    <WingBlank size = "lg">
                        <WhiteSpace size = "lg"/>
                        <Card>
                            <Card.Body
                                extra={<span>this is extra</span>}>
                                <img className = "ProductIMG"
                                     src = {IMG}
                                     alt = "Tree"
                                />
                                <p className = "ProductName">Description: a tree.</p>
                                <Divider className = "ProductDivider" dashed/>

                                {/*style={{color: "#FB966E",marginTop: '2px'}}>$998.0*/}
                            </Card.Body>
                            <Card.Footer content= {
                                <Button className={"ProductPriceButton"}>
                                        <span className={"ProductPrice"}>
                                            $299
                                        </span>
                                </Button>
                            }/>
                        </Card>
                    </WingBlank>
                </div>

                <div className={'ProductCard'}>
                    {/*product list */}
                    <WingBlank size = "lg">
                        <WhiteSpace size = "lg"/>
                        <Card>
                            <Card.Body
                                extra={<span>this is extra</span>}>
                                <img className = "ProductIMG"
                                     src = {IMG}
                                     alt = "Tree"
                                />
                                <p className = "ProductName">Description: a tree.</p>
                                <Divider className = "ProductDivider" dashed/>

                                {/*style={{color: "#FB966E",marginTop: '2px'}}>$998.0*/}
                            </Card.Body>
                            <Card.Footer content= {
                                <Button className={"ProductPriceButton"}>
                                        <span className={"ProductPrice"}>
                                            $299
                                        </span>
                                </Button>
                            }/>
                        </Card>
                    </WingBlank>
                </div>

                <Divider className={"PageEndDivider"}/>
                <Pagination
                    className={"Pagination"}
                    total={5}
                    current={1}
                    locale = {{
                        prevText: (<span className="PageArrow">
                            <Icon type = "left"/>
                            Prev</span>),
                        nextText: (<span className="PageArrow">Next<Icon type = "right"/></span>)

                    }}
                />
            </Fragment>

        )
    }

    handleSearchClick(){
        const newState = this.state;
        newState.showSearchBar = !newState.showSearchBar;
        this.setState(newState)
    }

    getSearchBar(){
        return(
            <Fragment>
                <WingBlank size = 'lg'>
                <SearchBar className={"SearchBar"}
                           placeholder= "Search"
                           maxLength={30}
                           cancelText={"Cancel"}
                />
                </WingBlank>
            </Fragment>
        )
    }
}

export default HomePage;