import React from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import './breweryDetail.css'
import BeereweryServices from "../../services/BeereweryServices";
import UserService from "../../services/UserService";
import BreweryServices from "../../services/BreweryServices";
import EventList from "../EventList/EventList";

let data = {
    "id": "8s5sUs",
        "name": "A1A Ale Works",
        "nameShortDisplay": "A1A Ale Works",
        "description": "Handcrafted and brewed to excellence, A1A Ale Works goes to great lengths to serve each guest the freshest beer possible. This commitment to serving nothing but the finest and freshest beer has led to numerous awards.",
        "website": "http://www.a1aaleworks.com/",
        "isOrganic": "N",
        "images": {
        "icon": "https://brewerydb-images.s3.amazonaws.com/brewery/8s5sUs/upload_3TtipL-icon.png",
            "medium": "https://brewerydb-images.s3.amazonaws.com/brewery/8s5sUs/upload_3TtipL-medium.png",
            "large": "https://brewerydb-images.s3.amazonaws.com/brewery/8s5sUs/upload_3TtipL-large.png",
            "squareMedium": "https://brewerydb-images.s3.amazonaws.com/brewery/8s5sUs/upload_3TtipL-squareMedium.png",
            "squareLarge": "https://brewerydb-images.s3.amazonaws.com/brewery/8s5sUs/upload_3TtipL-squareLarge.png"
    },
    "status": "verified",
        "statusDisplay": "Verified",
        "createDate": "2012-01-03 02:41:43",
        "updateDate": "2018-11-08 18:59:55",
        "isMassOwned": "N",
        "isInBusiness": "Y",
        "isVerified": "N",
        "locations": [
        {
            "id": "Rx4Dnt",
            "name": "Main Brewery",
            "streetAddress": "2001 Riverside Drive",
            "extendedAddress": "Suite 3100",
            "locality": "Chattanooga",
            "region": "Tennessee",
            "postalCode": "37406",
            "phone": "423-424-2000",
            "website": "http://www.a1aaleworks.com/",
            "latitude": 35.05828,
            "longitude": -85.277231,
            "isPrimary": "N",
            "inPlanning": "N",
            "isClosed": "N",
            "openToPublic": "Y",
            "locationType": "micro",
            "locationTypeDisplay": "Micro Brewery",
            "countryIsoCode": "US",
            "status": "deleted",
            "statusDisplay": "Deleted",
            "createDate": "2012-01-03 02:41:43",
            "updateDate": "2014-07-23 19:11:34",
            "country": {
                "isoCode": "US",
                "name": "UNITED STATES",
                "displayName": "United States",
                "isoThree": "USA",
                "numberCode": 840,
                "createDate": "2012-01-03 02:41:33"
            }
        },
        {
            "id": "IDlepc",
            "name": "St. Augustine Florida",
            "streetAddress": "1 King Street",
            "locality": "St. Augustine",
            "region": "Florida",
            "postalCode": "32084",
            "phone": "904-829-2977",
            "website": "http://www.a1aaleworks.com",
            "latitude": 29.8919786,
            "longitude": -81.3111442,
            "isPrimary": "Y",
            "inPlanning": "N",
            "isClosed": "N",
            "openToPublic": "Y",
            "locationType": "brewpub",
            "locationTypeDisplay": "Brewpub",
            "countryIsoCode": "US",
            "status": "verified",
            "statusDisplay": "Verified",
            "createDate": "2012-10-21 16:47:08",
            "updateDate": "2016-09-20 15:44:50",
            "timezoneId": "America/New_York",
            "country": {
                "isoCode": "US",
                "name": "UNITED STATES",
                "displayName": "United States",
                "isoThree": "USA",
                "numberCode": 840,
                "createDate": "2012-01-03 02:41:33"
            }
        }
    ],
        "socialAccounts": [
        {
            "id": 1942,
            "socialMediaId": 4,
            "socialMedia": {
                "id": 4,
                "name": "Untappd",
                "website": "http://www.untappd.com",
                "createDate": "2012-01-03 02:41:41"
            },
            "handle": "9570",
            "createDate": "2012-10-21 16:37:09",
            "link": "http://untappd.com/brewery/9570"
        },
        {
            "id": 1983,
            "socialMediaId": 1,
            "socialMedia": {
                "id": 1,
                "name": "Facebook Fan Page",
                "website": "http://www.facebook.com",
                "createDate": "2012-01-03 02:41:41",
                "updateDate": "2012-01-05 18:36:11"
            },
            "handle": "A1AAleWorks",
            "createDate": "2012-10-21 21:28:33",
            "link": "http://facebook.com/A1AAleWorks"
        },
        {
            "id": 1984,
            "socialMediaId": 2,
            "socialMedia": {
                "id": 2,
                "name": "Twitter",
                "website": "http://www.twitter.com",
                "createDate": "2012-01-03 02:41:41"
            },
            "handle": "A1AAleWorks",
            "createDate": "2012-10-21 21:28:33",
            "link": "http://twitter.com/A1AAleWorks"
        }
    ]
};

class BreweryDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},
            data: data,
            userProfile: "",
            eventName: "",
            eventDate: "",
            eventTime: "",
            events: []
        }
    }

    componentWillMount(){
        const breweryId = this.props.match.params.breweryId;
        UserService.profile().then((res) => {
            if(res.data !== ""){
                let brewery = {
                    _id: data.id,
                    name: data.name
                };
                BreweryServices.createBrewery(brewery).then((res_1) => {
                    BreweryServices.getEventsByBrewery(data.id).then((res_2) => {
                        this.setState({
                            userProfile: res.data[0],
                            events: res_2
                        })
                    })
                })
            }
            else{
                BreweryServices.getEventsByBrewery(data.id).then((res_2) => {
                    console.log(res_2)
                    this.setState({
                        events: res_2
                    })
                })
            }
        })
        /*BeereweryServices.getBrewery(breweryId).then((res) => {
            this.setState({
                data: res.data
            })
        })*/
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
                breweryId: data.id,
                dateOfEvent: this.state.eventDate,
                timeOfEvent: this.state.eventTime
            };
            BreweryServices.createEvent(this.state.userProfile._id, newEvent).then((res) => {
                BreweryServices.getEventsByBrewery(data.id).then((res_1) =>{
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
                            <div className="map-wrapper ml-4">
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
                                <div className="col-6">
                                    {
                                        this.state.userProfile !== "" && this.state.userProfile.type === 'EVENTPLANNER' &&
                                        <div className="my-2">
                                            <h3>
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