import React from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import './breweryDetail.css'
import BeereweryServices from "../../services/BeereweryServices";
import UserService from "../../services/UserService";
import BreweryServices from "../../services/BreweryServices";
import EventList from "../EventList/EventList";
import Navbar from "../NavBar/Navbar";

class BreweryDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},
            userProfile: "",
            eventName: "",
            eventDate: "",
            eventTime: "",
            events: []
        }
    }

    componentWillMount(){
        const breweryId = this.props.match.params.breweryId;
        BeereweryServices.getBrewery(breweryId).then((res_3) => {
            console.log(res_3);
            UserService.profile().then((res) => {
                if (res.data !== "") {
                    let brewery = {
                        _id: res_3.data.id,
                        name: res_3.data.name
                    };
                    BreweryServices.createBrewery(brewery).then((res_1) => {
                        console.log(res.data)
                        BreweryServices.getEventsByBrewery(res_3.id).then((res_2) => {
                            this.setState({
                                userProfile: res.data[0],
                                events: res_2,
                                data: res_3.data
                            })
                        })
                    })
                }
                else {
                    BreweryServices.getEventsByBrewery(res_3.id).then((res_2) => {
                        this.setState({
                            events: res_2,
                            data: res_3.data
                        })
                    })
                }
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

    trackEventName = (e) => {
        this.setState({
            eventName: e.target.value
        })
    };

    trackEventDate = (e) => {
        this.setState({
            eventDate: e.target.value
        })
    };

    trackEventTime = (e) => {
        this.setState({
            eventTime: e.target.value
        })
    };

    submit = () => {
        if(this.state.eventName.length > 0 && this.state.eventDate.length > 0 && this.state.eventTime.length > 0){
            let newEvent = {
                name: this.state.eventName,
                breweryId: this.state.data.id,
                dateOfEvent: this.state.eventDate,
                timeOfEvent: this.state.eventTime
            };
            BreweryServices.createEvent(this.state.userProfile._id, newEvent).then((res) => {
                BreweryServices.getEventsByBrewery(this.state.data.id).then((res_1) =>{
                    console.log(res_1)
                    this.setState({
                        events: res_1
                    })
                })

            })
        }
    }
    ;

    render(){
        return(
            <div className="h-100">
                <Navbar
                    history = {this.props.history}
                    isAuthenticated = {this.props.isAuthenticated}
                    userHasAuthenticated = {this.props.userHasAuthenticated}
                />
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
                                    <div className="col-md-2 text-center col-12">
                                        {
                                            this.state.data.images && this.state.data.images.squareMedium &&
                                            <img src={this.state.data.images.squareMedium} alt={""}/>
                                        }
                                        {
                                            !(this.state.data.images && this.state.data.images.squareMedium) &&
                                            <i className="fa fa-2x fa-beer pt-2" aria-hidden="true"/>
                                        }
                                    </div>
                                    <div className="col-md-4 col-12 mt-3">
                                        <i>{this.state.data.description}</i>
                                    </div>
                                    <div className="col-md-5 col-12 mt-md-0 mt-4">
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
                            <div className="map-wrapper ml-4 d-none d-md-block">
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
                            </div>
                            <div className="row ml-2 mr-0">
                                <div className="col-md-6 col-11 mb-5">
                                    {
                                        this.state.userProfile !== "" && this.state.userProfile.type === 'EVENTPLANNER' &&
                                        <div className="my-2 mx-3">
                                            <h3 className={'mt-5'}>
                                                Create New Event
                                            </h3>
                                            <div className="form-group row">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="eventName"
                                                    placeholder="Enter Event Name"
                                                    onChange={this.trackEventName}
                                                />
                                            </div>
                                            <div className="form-group row">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="date"
                                                    placeholder="Enter Date"
                                                    onChange={this.trackEventDate}
                                                />
                                            </div>
                                            <div className="form-group row">
                                                <input
                                                    type="time"
                                                    className="form-control"
                                                    id="time"
                                                    placeholder="Enter Time"
                                                    onChange={this.trackEventTime}
                                                />
                                            </div>
                                            <div className="form-group text-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    onClick={this.submit}
                                                >
                                                    Add New Event
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    <h4 className="my-2">
                                        All Events Here
                                    </h4>
                                    <EventList events={this.state.events}/>
                                </div>
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