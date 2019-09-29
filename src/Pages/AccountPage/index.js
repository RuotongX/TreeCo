import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import './AccoutList.css'
import {NavBar, Icon, WingBlank} from 'antd-mobile'

class AccountPage extends Component{

    constructor(props){
        super(props)

    }

    //Return render component
    render() {

        return(

            //Group all the component and return to render
            <Fragment>
                <NavBar
                    className={"NavigationBar"}
                    mode={"dark"}
                    leftContent={<Link to={"/"}>
                        <Icon className={"ReturnButton"} type = "left" />
                    </Link>}
                >
                    Account Setting
                </NavBar>

                <div>Test</div>
            </Fragment>

        )
    }


}

export default AccountPage;