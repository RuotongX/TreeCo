import React, {Fragment} from 'react';
import {Map, GoogleApiWrapper,Marker} from 'google-maps-react';
import {NavBar} from "antd-mobile";
import {Link} from "react-router-dom";
import {Icon,Card} from "antd";

const mapStyles = {
    width: '100%',
    height: '100%',
};


class MapContainer extends React.Component{
    render() {
        return (
            <Fragment>
            <div>
                {/*product list navigation bar*/}
                <NavBar mode = "dark"
                        className={'NavBar'}
                        leftContent={<Link to = "/"><Icon type = "left" className={'returnButton'}/></Link>}
                        rightContent={[
                        ]}
                >
                    Map
                </NavBar>
            </div>
                <Card>
                    <p style={{fontSize:15,marginLeft:'10%',marginRight:'10%'}}>Your dont have any product on road currently, you could go to Tree Co store to visit trees</p>
                </Card>
            <Map
                google={this.props.google}
                zoom={11}
                style={mapStyles}
                initialCenter={{ lat: -36.8485, lng: 174.7633}}
            >
            <Marker position={{ lat: -36.692221, lng: 174.670541}}>
            </Marker>
            </Map>
            </Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCL-_fVLyqFXZti16xLnPoV51QDhrzSwsQ'
})(MapContainer);