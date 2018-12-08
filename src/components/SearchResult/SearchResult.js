import React from 'react';
import queryString from 'query-string'
import {Redirect, Router} from 'react-router-dom'

import Navbar from "../NavBar/Navbar";
import BeereweryServices from "../../services/BeereweryServices";
import './SearchResult.css'
import SearchResultCards from "../SearchResultCards/SearchResultCards";

export default class SearchResult extends React.Component {

    constructor(props){
        super(props);
        let query = queryString.parse(this.props.location.search, { ignoreQueryPrefix: true }).q;
        this.state = {
            initialSearchQuery: query,
            searchQuery: query,
            beerActive: true,
            breweryActive: false
        };
    }

    componentDidMount(){
        BeereweryServices.search(this.state.initialSearchQuery).then((res) => {
            console.log(res);
            this.setState({
                data: res
            })
        });
    }

    componentWillReceiveProps(newProps){
        let query = queryString.parse(newProps.location.search, { ignoreQueryPrefix: true }).q;
        this.setState({
            initialSearchQuery: query,
            searchQuery: query,
            beerActive: true,
            breweryActive: false
        });
        window.location.reload();
    }

    trackSearchTextChanges = (e) => {
        this.setState({
            searchQuery: e.target.value,
        })
    };

    toggleBeer = () => {
        if(!this.state.beerActive){
            this.setState({
                beerActive: true,
                breweryActive: false,
            })
        }
    };

    toggleBrewery = () => {
        if(!this.state.breweryActive){
            this.setState({
                beerActive: false,
                breweryActive: true
            })
        }
    };

    sendSearchRequest = () => {
        if(this.state.searchQuery.length !== 0 && this.state.searchQuery !== this.state.initialSearchQuery){
            this.setState({
                moveToSearchResult: true,
            });
        }
    };

    generateSearchRoute = () => {
        let newPath = '/search-results?q=';
        let queryStringSplit = this.state.searchQuery.split(" ");
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
                    isAuthenticated = {this.props.isAuthenticated}
                    userHasAuthenticated = {this.props.userHasAuthenticated}
                />
                <div className="h-25">
                </div>
                <div className="row mx-0">
                    <div className="col-md-3 px-0">

                    </div>
                    <div className="col-md-6 col-12 px-0">
                        <div className="row bg-light border">
                            <div className="col-12">
                                <div className="row my-4">
                                    <div className="col-10">
                                        <input
                                            value={this.state.searchQuery}
                                            onChange={this.trackSearchTextChanges}
                                            className="form-control"
                                            type="text"
                                            placeholder="Search for Beers or Breweries"
                                            aria-label="Search"/>
                                    </div>
                                    <div className="col-2">
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
                        <div className="row">
                            <div
                                className={"col-6 py-2 text-center " + (this.state.beerActive? "bg-white border-left": "bg-light border")}
                                onClick={this.toggleBeer}
                            >
                                Beer
                            </div>
                            <div
                                className={"col-6 py-2 text-center " + (this.state.breweryActive? "bg-white": "bg-light border")}
                                onClick={this.toggleBrewery}
                            >
                                Brewery
                            </div>
                        </div>
                        {
                            this.state.data &&
                            (
                                <div>
                                    <div className="row bg-white border-left border-right">
                                        <div className="col-12 my-4">
                                            <h4>
                                                <strong>{this.state.data.totalResults} beer</strong> results for <strong>"{this.state.initialSearchQuery}"</strong>
                                            </h4>
                                        </div>
                                    </div>
                                    <SearchResultCards
                                        results = {this.state.data.data}
                                    />
                                </div>

                            )
                        }
                    </div>
                    <div className="col-md-3 px-0">

                    </div>
                </div>
            </div>
        )
    }
}
