import React from "react";
import axios from 'axios';
import './BeerDetail.css'
import {Link} from 'react-router-dom'


export default class BeerDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            beer: {
                "id": "DMRSxR",
                "name": "Craft Lager",
                "nameDisplay": "Craft Lager",
                "description": "A clean and refreshing beer common amongst craft lagers.  Not bitter and not too dry.",
                "abv": "4",
                "ibu": "11",
                "glasswareId": 5,
                "srmId": 3,
                "availableId": 1,
                "styleId": 94,
                "isOrganic": "N",
                "isRetired": "N",
                "status": "verified",
                "statusDisplay": "Verified",
                "servingTemperature": "very_cold",
                "servingTemperatureDisplay": "Very Cold - (0-4C/32-39F)",
                "createDate": "2014-09-10 15:32:44",
                "updateDate": "2014-09-11 20:04:20",
                "glass": {
                    "id": 5,
                    "name": "Pint",
                    "createDate": "2012-01-03 02:41:33"
                },
                "srm": {
                    "id": 3,
                    "name": "3",
                    "hex": "FFCA5A"
                },
                "available": {
                    "id": 1,
                    "name": "Year Round",
                    "description": "Available year round as a staple beer."
                },
                "style": {
                    "id": 94,
                    "categoryId": 8,
                    "category": {
                        "id": 8,
                        "name": "North American Lager",
                        "createDate": "2012-03-21 20:06:46"
                    },
                    "name": "American-Style Light (Low Calorie) Lager",
                    "shortName": "American Light Lager",
                    "description": "These beers are extremely light colored, light in body, and high in carbonation. Calorie level should not exceed 125 per 12 ounce serving. Corn, rice, or other grain or sugar adjuncts are often used. Flavor is mild and hop bitterness and aroma is negligible to very low. Light fruity esters are acceptable. Chill haze and diacetyl should be absent.",
                    "ibuMin": "5",
                    "ibuMax": "10",
                    "abvMin": "3.5",
                    "abvMax": "4.4",
                    "srmMin": "2",
                    "srmMax": "4",
                    "ogMin": "1.024",
                    "fgMin": "1.002",
                    "fgMax": "1.008",
                    "createDate": "2012-03-21 20:06:46",
                    "updateDate": "2015-04-07 15:39:35"
                },
                "breweries": [
                    {
                        "id": "zTmurX",
                        "name": "Grist Brewing Company",
                        "nameShortDisplay": "Grist",
                        "description": "Grist Brewing Company is located just south of C-470 and Santa Fe Boulevard across the street from Shea Stadium.\r\n\r\nOur focus is simply to make ales and lagers that are of the highest quality, approachable, and true to style. We certainly will experiment, it’s in our nature. However, the primary focus at Grist will be to make consistently great beers to be enjoyed year round.  We balance creativity with science to make great beers.\r\n\r\nWhile striving to make exceptional beer is our passion, we are equally committed to making a positive impact in our community. Rather than saving a couple dollars, Grist made a significant investment in our economy by purchasing a new, American made 20 barrel brewhouse. We feel it’s important to support the community and economy that is going to support us.",
                        "website": "https://www.gristbrewingcompany.com/",
                        "established": "2013",
                        "isOrganic": "N",
                        "images": {
                            "icon": "https://brewerydb-images.s3.amazonaws.com/brewery/zTmurX/upload_kvc6EL-icon.png",
                            "medium": "https://brewerydb-images.s3.amazonaws.com/brewery/zTmurX/upload_kvc6EL-medium.png",
                            "large": "https://brewerydb-images.s3.amazonaws.com/brewery/zTmurX/upload_kvc6EL-large.png",
                            "squareMedium": "https://brewerydb-images.s3.amazonaws.com/brewery/zTmurX/upload_kvc6EL-squareMedium.png",
                            "squareLarge": "https://brewerydb-images.s3.amazonaws.com/brewery/zTmurX/upload_kvc6EL-squareLarge.png"
                        },
                        "status": "verified",
                        "statusDisplay": "Verified",
                        "createDate": "2013-11-06 21:46:31",
                        "updateDate": "2018-11-08 21:51:48",
                        "isMassOwned": "N",
                        "isInBusiness": "Y",
                        "brewersAssociation": {
                            "brewersAssocationId": "WE4U69TJKI",
                            "isCertifiedCraftBrewer": "Y"
                        },
                        "isVerified": "Y",
                        "locations": [
                            {
                                "id": "f3njiC",
                                "name": "Main Brewery",
                                "streetAddress": "9150 Commerce Center Cir",
                                "extendedAddress": "Suite 300",
                                "locality": "Highlands Ranch",
                                "region": "Colorado",
                                "postalCode": "80129",
                                "phone": "(720) 360-4782",
                                "website": "https://www.gristbrewingcompany.com/",
                                "isPrimary": "Y",
                                "inPlanning": "N",
                                "isClosed": "N",
                                "openToPublic": "Y",
                                "locationType": "micro",
                                "locationTypeDisplay": "Micro Brewery",
                                "countryIsoCode": "US",
                                "yearOpened": "2013",
                                "status": "verified",
                                "statusDisplay": "Verified",
                                "createDate": "2013-11-07 00:28:52",
                                "updateDate": "2016-03-29 12:07:31",
                                "hoursOfOperationExplicit": {
                                    "mon": [
                                        {
                                            "startTime": "2:00pm",
                                            "endTime": "10:00pm"
                                        }
                                    ],
                                    "tue": [
                                        {
                                            "startTime": "2:00pm",
                                            "endTime": "10:00pm"
                                        }
                                    ],
                                    "wed": [
                                        {
                                            "startTime": "2:00pm",
                                            "endTime": "10:00pm"
                                        }
                                    ],
                                    "thu": [
                                        {
                                            "startTime": "2:00pm",
                                            "endTime": "10:00pm"
                                        }
                                    ],
                                    "fri": [
                                        {
                                            "startTime": "2:00pm",
                                            "endTime": "11:00pm"
                                        }
                                    ],
                                    "sat": [
                                        {
                                            "startTime": "12:00pm",
                                            "endTime": "11:00pm"
                                        }
                                    ],
                                    "sun": [
                                        {
                                            "startTime": "12:00pm",
                                            "endTime": "8:00pm"
                                        }
                                    ]
                                },
                                "hoursOfOperationExplicitString": "mon-2:00pm-10:00pm,tue-2:00pm-10:00pm,wed-2:00pm-10:00pm,thu-2:00pm-10:00pm,fri-2:00pm-11:00pm,sat-12:00pm-11:00pm,sun-12:00pm-8:00pm",
                                "timezoneId": "America/Denver",
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
                                "id": "aQLUcl",
                                "name": "Main Brewery",
                                "locality": "Littleton",
                                "region": "Colorado",
                                "postalCode": "80129",
                                "isPrimary": "N",
                                "inPlanning": "N",
                                "isClosed": "N",
                                "openToPublic": "Y",
                                "locationType": "micro",
                                "locationTypeDisplay": "Micro Brewery",
                                "countryIsoCode": "US",
                                "status": "deleted",
                                "statusDisplay": "Deleted",
                                "createDate": "2015-04-03 21:28:53",
                                "updateDate": "2016-03-29 12:08:45",
                                "timezoneId": "America/Denver",
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
                    }
                ]
            }
        }
    }

    // componentWillMount = () => {
    //
    //     // if (!this.props.isAuthenticated) {
    //     //     return;
    //     // }
    //
    //     // retrieve beerId from the URL path parameter 'beerId'
    //     // the props.match.params is part of the Route library which
    //     // parses the URL path and names the parameters and creates
    //     // the params map
    //     const beerId = this.props.match.params.beerId;
    //
    //     axios.get().then(res => {
    //         const beer = res.data;
    //         if (beer.status === "success") {
    //             this.setState({
    //                 isLoading: false,
    //                 beer: beer.data
    //             });
    //         }
    //     });
    //
    // };

    render() {
        return (
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
                <div className="main-block">

                    <div className="beer-heading-one">
                        <div className="beer-heading-one-inner">
                            <h2 className="text-white">{this.state.beer.nameDisplay} </h2>
                            <p className="text-white">{(this.state.beer.breweries && this.state.beer.breweries.length > 0) ? this.state.beer.breweries[0].name : ''}</p>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="block-heading-two">
                                    <h3><span>Details</span></h3>
                                </div>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>Availability:</td>
                                        <td width="60%" className="truncate">{this.state.beer.available ?
                                            this.state.beer.available.name : <i>Unknown</i>}</td>
                                    </tr>
                                    <tr>
                                        <td>Glassware:</td>
                                        <td width="60%" className="truncate">{this.state.beer.glass ?
                                            this.state.beer.glass.name : <i>Unknown</i>}</td>
                                    </tr>
                                    <tr>
                                        <td>Serving Temp:</td>
                                        <td width="60%"
                                            className="truncate">{this.state.beer.servingTemperatureDisplay ?
                                            this.state.beer.servingTemperatureDisplay : <i>Unknown</i>}</td>
                                    </tr>
                                    <tr>
                                        <td>Certified Organic?:</td>
                                        <td width="60%" className="truncate">{this.state.beer.isOrganic}</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className="block-heading-two">
                                    <h3><span>Brewed By</span></h3>
                                </div>

                                <div className="brewery_list">

                                    {
                                        this.state.beer.breweries && this.state.beer.breweries.length > 0 && this.state.beer.breweries.map((brewery, index) =>
                                            (<div className="product"><img
                                                className="img-responsive pull-left product-image"
                                                src={brewery.images.squareMedium}/>
                                                <div className="product-info">
                                                    <div className="product-name truncate">
                                                        <Link to={`/course/${brewery.id}`}>{brewery.name}</Link></div>
                                                    <div
                                                        className="product-producer truncate">{brewery.locations[0].locality},{brewery.locations[0].region} {brewery.locations[0].countryIsoCode}</div>
                                                    <div className="product-style truncate">{brewery.website}</div>
                                                </div>
                                            </div>)
                                        )
                                    }


                                </div>

                            </div>

                            <div className="col-sm-8 mt-lg-3">

                                <div className="row font-weight-bold">
                                    <div className="col-sm-3 text-center">
                                        <p className="bg-grey circle-5 truncate bg-gray">{this.state.beer.abv ? this.state.beer.abv + " %" : "N/A"}</p>
                                        <br/>
                                        ABV
                                    </div>
                                    <div className="col-sm-3 text-center">
                                        <p className="bg-grey circle-5 truncate bg-gray">{this.state.beer.ibu ? this.state.beer.ibu + " %" : "N/A"}</p>
                                        <br/>
                                        IBU
                                    </div>
                                    <div className="col-sm-3 text-center">
                                        <p className="bg-grey circle-5 truncate bg-gray">{this.state.beer.og ? this.state.beer.og + " %" : "N/A"}</p>
                                        <br/>
                                        OG
                                    </div>
                                    <div className="col-sm-3 text-center">
                                        <p className="bg-grey circle-5 truncate bg-warning">{this.state.beer.srm ? this.state.beer.srm.name + " %" : "N/A"}</p>
                                        <br/>
                                        SRM
                                    </div>
                                </div>

                                <div className="block-heading-two visible-xs">
                                    <h3><span>Description</span></h3>
                                </div>

                                <div className="row">
                                    <div className="col-xs-8 pl-lg-3">
                                        <div className="description-box">

                                            <p>

                                                {this.state.beer.description ? this.state.beer.description : "No Description Provided"}

                                            </p>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>


                </div>
            </div>

        )
    }
}