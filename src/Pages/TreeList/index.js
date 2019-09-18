import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './treeList.css';
import {Button, Icon, Divider} from 'antd';
import {NavBar, Card, WingBlank, WhiteSpace, SearchBar} from 'antd-mobile';
import {Link} from 'react-router-dom'

class TreeList extends Component{

    constructor(props){
        super(props);
        this.state = {
            showSearchBar : false,
            treeList : [{id:1, productName : 'Lemon Tree', drain : 'fast', sun : 'sunny', maintain : 'low', height : 6, rate : 'fast', price: 18.99, img: 'lemon_tree.jpg', type: 'Fruit Tree'},
                        {id:2, productName : 'Apple Tree', drain : 'fast', sun : 'anything', maintain : 'med', height : 5, rate : 'fast', price: 23.99, img: 'apple_tree.jpg', type: 'Fruit Tree'},
                        {id:3, productName : 'Pear Tree', drain : 'med', sun : 'sunny', maintain : 'high', height : 5, rate : 'slow', price: 42.99, img: 'pear_tree.jpg', type: 'Fruit Tree'},
                        {id:4, productName : 'Hedge', drain : 'slow', sun : 'anything', maintain : 'low', height : 3, rate : 'slow', price: 17.87, img: 'henge_tree.jpg', type: 'Hedge'},
                        {id:5, productName : 'Evergreen', drain : 'anything', sun : 'med', maintain : 'low', height : 18, rate : 'fast', price: 42.99, img: 'evergreen.jpg', type: 'Evergreen'},
                        {id:6, productName : 'Puriri', drain : 'slow', sun : 'anything', maintain : 'low', height : 20, rate : 'fast', price: 69.99, img: 'nz_native_trees.jpg', type: 'NZ Native'},
                        {id:7, productName : 'Gum Tree', drain : 'slow', sun : 'shade', maintain : 'low', height : 15, rate : 'fast', price: 32.99, img: 'gum_tree.jpg', type: 'Gum Tree'},
                        {id:8, productName : 'Palm Tree', drain : 'med', sun : 'shade', maintain : 'med', height : 30, rate : 'slow', price: 22.99, img: 'palm_tree.jpg', type: 'Palm Tree'},
                        {id:9, productName : 'Hardwood', drain : 'anything', sun : 'shade', maintain : 'high', height : 7, rate : 'med', price: 84.59, img: 'hardwood.jpg', type: 'Hardwood'}]
        }

        this.handleSearchClick = this.handleSearchClick.bind(this);
    }


    render() {
        return (
            <Fragment>
                <div>
                    {/*product list navigation bar*/}
                    <NavBar mode = "dark"
                            className={'NaviBar'}
                            leftContent={<Link to = "/"><Icon type = "left" className={'returnButton'}/></Link>}
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
                    {
                        this.state.treeList.map((tree) => {
                            const IMG = require('../ProductImage/' + tree.img)
                            return(
                                <WingBlank size = "lg" key = {tree.id}>
                                    <WhiteSpace size = "lg"/>
                                    <Card>
                                        <Card.Body>
                                            <img className = "ProductIMG"
                                                 src = {IMG}
                                                 alt = {tree.productName}
                                            />
                                            <p className = "ProductName">{tree.productName}</p>
                                            <Divider className = "ProductDivider" dashed/>

                                            {/*style={{color: "#FB966E",marginTop: '2px'}}>$998.0*/}
                                        </Card.Body>
                                        <Card.Footer content= {
                                            <Link to = {{
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
                    }

                </div>

                <div className={"Disclaimer"}>Disclaimer: The price tag and also the product is for demonstration only.</div>
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

export default TreeList;