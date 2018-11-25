import React from 'react'
import Navbar from '../NavBar/Navbar'

import './Home.css'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            result : {
                "currentPage": 1,
                "numberOfPages": 1,
                "totalResults": 8,
                "data": [
                    {
                        "id": 103,
                        "categoryId": 8,
                        "category": {
                            "id": 8,
                            "name": "North American Lager",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "American-Style Dark Lager",
                        "shortName": "American Dark Lager",
                        "ibuMin": "14",
                        "ibuMax": "20",
                        "abvMin": "4",
                        "abvMax": "5.5",
                        "srmMin": "14",
                        "srmMax": "25",
                        "ogMin": "1.04",
                        "fgMin": "1.008",
                        "fgMax": "1.012",
                        "createDate": "2012-03-21 20:06:46",
                        "updateDate": "2015-04-07 15:41:42"
                    },
                    {
                        "id": 11,
                        "categoryId": 1,
                        "category": {
                            "id": 1,
                            "name": "British Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "English-Style Dark Mild Ale",
                        "shortName": "English Dark Mild",
                        "ibuMin": "10",
                        "ibuMax": "24",
                        "abvMin": "3.2",
                        "abvMax": "4",
                        "srmMin": "17",
                        "srmMax": "34",
                        "ogMin": "1.03",
                        "fgMin": "1.004",
                        "fgMax": "1.008",
                        "createDate": "2012-03-21 20:06:45",
                        "updateDate": "2015-04-07 15:20:43"
                    },
                    {
                        "id": 28,
                        "categoryId": 3,
                        "category": {
                            "id": 3,
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "Dark American-Belgo-Style Ale",
                        "shortName": "American/Belgian Dark",
                        "srmMin": "16",
                        "srmMax": "16",
                        "createDate": "2012-03-21 20:06:45",
                        "updateDate": "2015-04-07 15:26:14"
                    },
                    {
                        "id": 64,
                        "categoryId": 5,
                        "category": {
                            "id": 5,
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Dark Strong Ale",
                        "shortName": "Belgian Dark Strong",
                        "ibuMin": "20",
                        "ibuMax": "50",
                        "abvMin": "7",
                        "abvMax": "11",
                        "srmMin": "9",
                        "srmMax": "35",
                        "ogMin": "1.064",
                        "fgMin": "1.012",
                        "fgMax": "1.024",
                        "createDate": "2012-03-21 20:06:46",
                        "updateDate": "2015-04-07 15:32:23"
                    },
                    {
                        "id": 134,
                        "categoryId": 11,
                        "category": {
                            "id": 11,
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Wood- and Barrel-Aged Dark Beer",
                        "shortName": "BBL Aged Dark",
                        "abvMin": "3.75",
                        "abvMax": "6.5",
                        "createDate": "2012-03-21 20:06:46",
                        "updateDate": "2015-04-07 15:46:44"
                    },
                    {
                        "id": 83,
                        "categoryId": 7,
                        "category": {
                            "id": 7,
                            "name": "European-germanic Lager",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "European-Style Dark / Münchner Dunkel",
                        "shortName": "Euro Dark",
                        "ibuMin": "16",
                        "ibuMax": "25",
                        "abvMin": "4.5",
                        "abvMax": "5",
                        "srmMin": "15",
                        "srmMax": "20",
                        "ogMin": "1.048",
                        "fgMin": "1.014",
                        "fgMax": "1.018",
                        "createDate": "2012-03-21 20:06:46",
                        "updateDate": "2015-04-07 15:37:08"
                    },
                    {
                        "id": 115,
                        "categoryId": 11,
                        "category": {
                            "id": 11,
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Dark American Wheat Ale or Lager with Yeast",
                        "shortName": "Dark Wheat Ale",
                        "ibuMin": "10",
                        "ibuMax": "25",
                        "abvMin": "3.8",
                        "abvMax": "5",
                        "srmMin": "9",
                        "srmMax": "22",
                        "ogMin": "1.036",
                        "fgMin": "1.004",
                        "fgMax": "1.016",
                        "createDate": "2012-03-21 20:06:46",
                        "updateDate": "2015-04-07 15:44:01"
                    },
                    {
                        "id": 116,
                        "categoryId": 11,
                        "category": {
                            "id": 11,
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Dark American Wheat Ale or Lager without Yeast",
                        "shortName": "Dark Wheat Ale",
                        "ibuMin": "10",
                        "ibuMax": "25",
                        "abvMin": "3.8",
                        "abvMax": "5",
                        "srmMin": "9",
                        "srmMax": "22",
                        "ogMin": "1.036",
                        "fgMin": "1.004",
                        "fgMax": "1.016",
                        "createDate": "2012-03-21 20:06:46",
                        "updateDate": "2015-04-07 15:44:07"
                    }
                ],
                "status": "success"
            }
        }
    }

    searchBeer = (e) =>{
        console.log(e.target.value)
    };

    trackSearchTextChanges = (e) => {
        this.setState({
            searchText: e.target.value,
        })
    };

    render(){
        return(
            <div className="h-100">
                <Navbar/>
                <div className="backdrop">
                    <div className="h-25">

                    </div>
                    <div className="row mx-0">
                        <div className="col-1">

                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-8">
                                    <input
                                        value={this.state.searchText}
                                        onChange={this.trackSearchTextChanges}
                                        className="form-control"
                                        type="text"
                                        placeholder="Search for Beers or Breweries"
                                        aria-label="Search"/>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-secondary">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}