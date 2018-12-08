import React from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import './breweryDetail.css'


class BreweryDetail extends React.Component{
    constructor(props){
        super(props);
        let data = {
            "id": "z7bUU8",
            "name": "W Brewing",
            "nameShortDisplay": "W",
            "description": "We are bringing back the Craft in German Lager's here in the United States. Keeping it exclusive and tasty per every batch we create.",
            "website": "http://wbrewing.com",
            "established": "2012",
            "isOrganic": "N",
            "images": {
                "icon": "https://brewerydb-images.s3.amazonaws.com/brewery/z7bUU8/upload_L6ku4e-icon.png",
                "medium": "https://brewerydb-images.s3.amazonaws.com/brewery/z7bUU8/upload_L6ku4e-medium.png",
                "large": "https://brewerydb-images.s3.amazonaws.com/brewery/z7bUU8/upload_L6ku4e-large.png",
                "squareMedium": "https://brewerydb-images.s3.amazonaws.com/brewery/z7bUU8/upload_L6ku4e-squareMedium.png",
                "squareLarge": "https://brewerydb-images.s3.amazonaws.com/brewery/z7bUU8/upload_L6ku4e-squareLarge.png"
            },
            "status": "verified",
            "statusDisplay": "Verified",
            "createDate": "2013-02-17 16:18:16",
            "updateDate": "2018-11-08 22:10:26",
            "isMassOwned": "N",
            "isInBusiness": "Y",
            "brewersAssociation": {
                "brewersAssocationId": "48EVD10HNC",
                "isCertifiedCraftBrewer": "Y"
            },
            "isVerified": "N",
            "locations": [
                {
                    "id": "gq0pJS",
                    "name": "W Brewing",
                    "streetAddress": "2491 Alluvial Ave",
                    "locality": "Clovis",
                    "region": "California",
                    "postalCode": "93611",
                    "phone": "559.473.1875",
                    "latitude": 36.845216,
                    "longitude": -119.668837,
                    "isPrimary": "Y",
                    "inPlanning": "N",
                    "isClosed": "N",
                    "openToPublic": "Y",
                    "locationType": "micro",
                    "locationTypeDisplay": "Micro Brewery",
                    "countryIsoCode": "US",
                    "yearOpened": "2012",
                    "status": "verified",
                    "statusDisplay": "Verified",
                    "createDate": "2013-02-18 14:34:45",
                    "updateDate": "2014-07-23 19:11:34",
                    "country": {
                        "isoCode": "US",
                        "name": "UNITED STATES",
                        "displayName": "United States",
                        "isoThree": "USA",
                        "numberCode": 840,
                        "createDate": "2012-01-03 02:41:33"
                    }
                }
            ]
        };
        this.state = {
            data: data,
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {}
        }
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render(){
        return(
            <div className="h-100">
                <nav className="navbar navbar-expand navbar-dark sticky-top bg-dark">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item nav-link col-md-4">
                        </li>
                        <li className="nav-item nav-link col-4 text-center">
                            <a className="navbar-brand" href="#">
                                Beerewery
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="beer-heading-one">
                    <div className="beer-heading-one-inner">
                        <h4 className="text-white">
                            {this.state.data.name}
                        </h4>
                        {
                            this.state.data.locations && this.state.data.locations[0].locationTypeDisplay &&
                            <div className="text-white">
                                A {this.state.data.locations[0].locationTypeDisplay} in {this.state.data.locations[0].locality}, {this.state.data.locations[0].region}({this.state.data.locations[0].countryIsoCode})
                            </div>
                        }
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <img src={this.state.data.images.squareMedium}/>
                        </div>
                        <div className="col-4 mt-3">
                            <i>{this.state.data.description}</i>
                        </div>
                        <div className="col-5">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Website:</td>
                                    <td className="text-center">
                                        <a href={this.state.data.website}>{this.state.data.website}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Established:</td>
                                    <td className="text-center">{this.state.data.established}</td>
                                </tr>
                                <tr>
                                    <td>Certified Organic</td>
                                    <td className="text-center">
                                        {
                                            this.state.data.isOrganic &&
                                                <div>
                                                    Yes
                                                </div>
                                        }
                                        {
                                            !this.state.data.isOrganic &&
                                                <div>
                                                    No
                                                </div>
                                        }
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="map-wrapper">
                    <div className="map-canvas" style={{position: 'relative', overflow: 'hidden'}}>
                        <Map
                            google={this.props.google}
                            zoom={14}
                            style={{width: '50%', height: '100%'}}
                            initialCenter={{
                                lat: this.state.data.locations[0].latitude,
                                lng: this.state.data.locations[0].longitude
                            }}
                        >
                            <Marker
                                onClick={this.onMarkerClick}
                                name={this.state.data.name}
                            />
                            <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                onClose={this.onClose}
                            >
                                <div>
                                    <h4>{this.state.selectedPlace.name}</h4>
                                </div>
                            </InfoWindow>
                        </Map>
                    </div>

                    Hello
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDWKZPP5ulAqOEP8zYary4J51PtQQ5m1Ls'
})(BreweryDetail);