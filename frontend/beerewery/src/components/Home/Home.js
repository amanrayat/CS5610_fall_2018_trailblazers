import React from 'react'
import Navbar from '../NavBar/Navbar'

import './Home.css'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
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