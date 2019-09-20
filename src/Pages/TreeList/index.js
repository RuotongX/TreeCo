import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './treeList.css';
import {Button, Icon, Divider, Result, Drawer} from 'antd';
import store from "../Store/index.js";
import {NavBar, Card, WingBlank, WhiteSpace, SearchBar, List, RadioItem} from 'antd-mobile';
import {Link} from 'react-router-dom'

class TreeList extends Component{


    constructor(props){
        super(props);
        this.state = store.getState();

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleSearchCancel = this.handleSearchCancel.bind(this);
        this.handleDrawCloseOn = this.handleDrawCloseOn.bind(this);
        this.handleDrawerOpenChange = this.handleDrawerOpenChange.bind(this);

        store.subscribe(this.handleStoreChange);
    }


    render() {

        const SoilFilter = [
            { value : 0, text: "Fast", defaultV : false},
            { value : 1, text: "Medium", defaultV : false},
            { value : 2, text: "Fast", defaultV : false},
            { value : 3, text: "Anything", defaultV : true}
        ]

        return (
            <Fragment>
                <div>
                    {/*product list navigation bar*/}
                    <NavBar mode="dark"
                            className={'NaviBar'}
                            leftContent={<Link to="/"><Icon type="left" className={'returnButton'}/></Link>}
                            rightContent={[
                                <Icon type="control"
                                      style={{fontSize: '22px'}}
                                      onClick={this.handleDrawerOpenChange}/>
                            ]}
                    >
                        Product List
                    </NavBar>
                </div>

                <Drawer title = "Product Filter"
                        className={"ProductDetailDrawer"}
                        placement = 'right'
                        closable = {false}
                        visible={this.state.showDrawer}
                        onClose={this.handleDrawCloseOn}
                >


                </Drawer>

                <WingBlank size='lg'>
                    <SearchBar className={"SearchBar"}
                               value={this.state.searchContent}
                               placeholder="Search"
                               maxLength={30}
                               cancelText={"Cancel"}
                               onChange={(value) => this.handleValueChange(value)}
                               onSubmit={(value) => this.handleSearchSubmit(value)}
                               onClear={() => this.handleSearchCancel()}
                               onCancel={() => this.handleSearchCancel()}
                    />
                </WingBlank>

                <div className={'ProductCard'}>{

                    this.state.treeList.length > 0 ? this.getProductCard() : this.getNoSearchResult()

                }
                </div>

                <div className={"Disclaimer"}>Disclaimer: The price tag and also the product is for demonstration
                    only.
                </div>
            </Fragment>

        )
    }

    getNoSearchResult(){
        return(
            <Result
                title = "There is no record found"
                message = "Please try another keyword and search again"
            />
        )
    }

    getProductCard(){
        return(
            this.state.treeList.map((tree) => {
                const IMG = require('../ProductImage/' + tree.img)
                return (
                    <WingBlank size="lg" key={tree.id}>
                        <WhiteSpace size="lg"/>
                        <Card>
                            <Card.Body>
                                <img className="ProductIMG"
                                     src={IMG}
                                     alt={tree.productName}
                                />
                                <p className="ProductName">{tree.productName}</p>
                                <Divider className="ProductDivider" dashed/>

                                {/*style={{color: "#FB966E",marginTop: '2px'}}>$998.0*/}
                            </Card.Body>
                            <Card.Footer content={
                                <Link to={{
                                    pathname: "/ProductDetail",
                                    treeState: {tree}
                                }}>
                                    <Button className={"ProductPriceButton"}>
                                            <span className={"ProductPrice"}>
                                                ${tree.price}
                                            </span>
                                    </Button>
                                </Link>
                            }/>
                        </Card>
                    </WingBlank>
                )
            })

        )
    }


    handleSearchCancel(){
        const action = {
            type : "SearchCancelAction"
        }
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleSearchSubmit(value){

        const action = {
            type : "Search",
            value : value
        }

        store.dispatch(action);
    }

    handleValueChange(value){

        const action = {
            type : "SearchBarValuechange",
            value : value
        }
        store.dispatch(action);
    }

    handleDrawerOpenChange(){
        const action = {
            type : "DrawerChange"
        }

        store.dispatch(action);
    }

    handleDrawCloseOn(){
        const action = {
            type: "DrawerChange"
        }

        store.dispatch(action);
    }


}

export default TreeList;