import React from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import './breweryDetail.css'
import BeereweryServices from "../../services/BeereweryServices";


class BreweryDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {}
        }
    }

    componentWillMount(){
        const breweryId = this.props.match.params.breweryId;
        BeereweryServices.getBrewery(breweryId).then((res) => {
            this.setState({
                data: res.data
            })
        })
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
                {
                    this.state.data &&
                        <div>

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
                                        {
                                            this.state.data.images && this.state.data.images.squareMedium &&
                                            <img src={this.state.data.images.squareMedium}/>
                                        }
                                        {
                                            !(this.state.data.images && this.state.data.images.squareMedium) &&
                                            <i className="fa fa-2x fa-beer pt-2" aria-hidden="true"/>
                                        }
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
                }
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDWKZPP5ulAqOEP8zYary4J51PtQQ5m1Ls'
})(BreweryDetail);