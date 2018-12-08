import React from 'react'
import {Redirect} from 'react-router-dom'
import Navbar from '../NavBar/Navbar'

import './Home.css'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            moveToSearchResult: false,
        }
    }

    trackSearchTextChanges = (e) => {
        this.setState({
            searchText: e.target.value,
        })
    };

    sendSearchRequest = () => {
        if(this.state.searchText.length !== 0){
            this.setState({
                moveToSearchResult: true,
            });
        }
    };

    generateSearchRoute = () => {
        let newPath = '/search-results?q=';
        let queryStringSplit = this.state.searchText.split(" ");
        var i;
        for(i = 0; i < queryStringSplit.length; i++){
            newPath += queryStringSplit[i] + '+'
        }
        return newPath.slice(0,-1);
    };


    render(){
        if(this.state.moveToSearchResult){
            return <Redirect to={this.generateSearchRoute()} />
        }
        return(
            <div className="h-100">
                <Navbar
                    history = {this.props.history}
                />
                <div className="backdropHome">
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
                                    <button
                                        onClick={this.sendSearchRequest}
                                        type="button"
                                        className="btn btn-secondary">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}