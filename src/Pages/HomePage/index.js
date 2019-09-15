import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom'
import './HomePage.css'

class HomePage extends Component{
    render() {
        return(
            <div>
                <div className={'description'}> this is home page, happy coding! </div>
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
            </div>

        )
    }
}

export default HomePage;