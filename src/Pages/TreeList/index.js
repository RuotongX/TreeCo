import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './treeList.css';
import {Button, Icon, Divider, Result, Drawer} from 'antd';
import store from "../Store/index.js";
import {NavBar, Card, WingBlank, WhiteSpace, SearchBar, List, Radio,Toast, Range} from 'antd-mobile';
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
        this.handleSoilFilterChange = this.handleSoilFilterChange.bind(this);
        this.handleMaintenanceFilterChange = this.handleMaintenanceFilterChange.bind(this);
        this.handleMaxFilterChange = this.handleMaxFilterChange.bind(this);
        this.handleGrowthFilterChange = this.handleGrowthFilterChange.bind(this);
        this.handleTreeCatChange = this.handleTreeCatChange.bind(this);
        this.handleResetAction = this.handleResetAction.bind(this);
        this.handleApplyAction = this.handleApplyAction.bind(this);
        this.handleFilterPriceChange = this.handleFilterPriceChange.bind(this);

        store.subscribe(this.handleStoreChange);
    }

    componentWillUnmount() {

    }


    render() {

        const SoilorGrowthFilter = [
            { value : 0, text: "Fast"},
            { value : 1, text: "Medium"},
            { value : 2, text: "Slow"},
            { value : 3, text: "Any"}
        ]
        const sunCondition = [
            { value : 0, text: "Sunny"},
            { value : 1, text: "Medium"},
            { value : 2, text: "Shade"},
            { value : 3, text: "Any"}
        ]
        const maintainCondition = [
            { value : 0, text: "High"},
            { value : 1, text: "Medium"},
            { value : 2, text: "Low"},
            { value : 3, text: "Any"}
        ]
        const MaximumHeightCondition = [
            { value : 0, text: "<1m"},
            { value : 1, text: "1-2m"},
            { value : 2, text: "2-3m"},
            { value : 3, text: ">3m"},
            { value : 4, text: "Any"}
        ]
        const treeTypeCondition = [
            { value : 0, text: "Fruit Tree"},
            { value : 1, text: "Hedge"},
            { value : 2, text: "Evergreen"},
            { value : 3, text: "NZ Native"},
            { value : 4, text: "Gum Tree"},
            { value : 5, text: "Palm Tree"},
            { value : 6, text: "HardWood"},
            { value : 7, text: "Any"}
        ]

        return (
            <Fragment>
                <div>
                    {/*product list navigation bar*/}
                    <NavBar mode="dark"
                            className={'NaviBar'}
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

                <Drawer title = "Filter"
                        width={300}
                        className={"ProductDetailDrawer"}
                        placement = 'right'
                        closable = {false}
                        visible={this.state.showDrawer}
                        onClose={this.handleDrawCloseOn}
                >
                    <div className={"FilterButtons"}>
                        <Button type={"primary"}
                                className={"FilterConfirmButton"}
                                onClick={this.handleApplyAction}
                        >
                            Apply
                        </Button>
                        <Button className={"FilterResetButton"}
                                onClick={this.handleResetAction}
                        >
                            Reset
                        </Button>
                    </div>


                    <List renderHeader={"Price Range"}
                          wrap = {true}
                          multi
                    >

                        <List.Item>
                            <div style={{ padding: 7 }}>
                                <Range
                                    min = {0}
                                    max = {100}
                                    step= {10}
                                    defaultValue={[0,100]}
                                    value = {this.state.priceFilter}
                                    allowCross = {false}
                                    className = {"PriceRange"}
                                    onChange={(value) =>(this.handleFilterPriceChange(value))}
                                />
                            </div>
                        </List.Item>

                        <List.Item extra={String.prototype.concat(this.state.priceFilter[0], ' - ',this.state.priceFilter[1])}>
                            Price Range
                        </List.Item>
                    </List>

                    <List renderHeader={"Soil Drainage"}>
                        {
                            SoilorGrowthFilter.map(item => (
                                <Radio.RadioItem key = {item.value}
                                                 checked = {item.text === this.state.SoilFilter}
                                                 onChange = {() => this.handleSoilFilterChange(item.text)}
                                >
                                    {item.text}
                                </Radio.RadioItem>
                            ))
                        }

                    </List>

                    <List renderHeader={"Sun Condition"}>
                        {
                            sunCondition.map(item => (
                                <Radio.RadioItem key = {item.value}
                                                 checked = {item.text === this.state.SunFilter}
                                                 onChange = {() => this.handleSunFilterChange(item.text)}
                                >
                                    {item.text}
                                </Radio.RadioItem>
                            ))
                        }

                    </List>

                    <List renderHeader={"Maintenance Requirement"}>
                        {
                            maintainCondition.map(item => (
                                <Radio.RadioItem key = {item.value}
                                                 checked = {item.text === this.state.MaintenanceFilter}
                                                 onChange = {() => this.handleMaintenanceFilterChange(item.text)}
                                >
                                    {item.text}
                                </Radio.RadioItem>
                            ))
                        }

                    </List>

                    <List renderHeader={"Maximum Height"}>
                        {
                            MaximumHeightCondition.map(item => (
                                <Radio.RadioItem key = {item.value}
                                                 checked = {item.text === this.state.MaxHeightFilter}
                                                 onChange = {() => this.handleMaxFilterChange(item.text)}
                                >
                                    {item.text}
                                </Radio.RadioItem>
                            ))
                        }

                    </List>

                    <List renderHeader={"Growth Rate"}>
                        {
                            SoilorGrowthFilter.map(item => (
                                <Radio.RadioItem key = {item.value}
                                                 checked = {item.text === this.state.GrowthFilter}
                                                 onChange = {() => this.handleGrowthFilterChange(item.text)}
                                >
                                    {item.text}
                                </Radio.RadioItem>
                            ))
                        }

                    </List>

                    <List renderHeader={"Tree Category"}>
                        {
                            treeTypeCondition.map(item => (
                                <Radio.RadioItem key = {item.value}
                                                 checked = {item.text === this.state.treeFilter}
                                                 onChange = {() => this.handleTreeCatChange(item.text)}
                                >
                                    {item.text}
                                </Radio.RadioItem>
                            ))
                        }

                    </List>
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
                                    query: tree
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
    handleFilterPriceChange(value){

        const action = {
            type : "PriceFilterChange",
            value : value
        }

        store.dispatch(action)
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
    handleSoilFilterChange(value){
        const action = {
            type : "SoilChange",
            value : value
        }

        store.dispatch(action)

    }

    handleSunFilterChange(value){
        const action = {
            type : "SunChange",
            value : value
        }

        store.dispatch(action)

    }
    handleMaintenanceFilterChange(value){
        const action = {
            type : "MainChange",
            value : value
        }

        store.dispatch(action)

    }
    handleMaxFilterChange(value){
        const action = {
            type : "MaxChange",
            value : value
        }

        store.dispatch(action)

    }

    handleGrowthFilterChange(value){
        const action = {
            type : "GrowthChange",
            value : value
        }

        store.dispatch(action)

    }


    handleTreeCatChange(value){
        const action = {
            type : "treeChange",
            value : value
        }

        store.dispatch(action)

    }

    handleResetAction(){
        const action = {
            type : "resetAction"
        }
        store.dispatch(action)
    }
    handleApplyAction(){
        const action = {
            type : "ApplyButtonClick"
        }

        Toast.success('Filter Applied', 1.3);

        store.dispatch(action)
    }

}

export default TreeList;