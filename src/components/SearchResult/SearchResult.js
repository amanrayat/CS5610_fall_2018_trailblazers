import React from 'react';
import queryString from 'query-string'
import {Redirect, Router} from 'react-router-dom'
import Pagination from 'react-paginating';

import Navbar from "../NavBar/Navbar";
import BeereweryServices from "../../services/BeereweryServices";
import './SearchResult.css'

import SearchResultBeerCards from "../SearchResultCards/SearchResultBeerCards";
import SearchResultBreweryCard from "../SearchResultCards/SearchResultBreweryCards";

export default class SearchResult extends React.Component {

    constructor(props){
        super(props);
        let query = queryString.parse(this.props.location.search, { ignoreQueryPrefix: true }).q;
        this.state = {
            initialSearchQuery: query,
            searchQuery: query,
            beerActive: true,
            breweryActive: false,
            currentPage: 1
        };
    }

    componentDidMount(){
        BeereweryServices.searchBeer(this.state.initialSearchQuery, 1).then((res) => {
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
            BeereweryServices.searchBeer(this.state.initialSearchQuery, this.state.currentPage).then((res) => {
                this.setState({
                    data: res,
                    beerActive: true,
                    breweryActive: false,
                });
            });
        }
    };

    toggleBrewery = () => {
        if(!this.state.breweryActive){
            BeereweryServices.searchBrewery(this.state.initialSearchQuery, this.state.currentPage).then((res) => {
                this.setState({
                    data: res,
                    beerActive: false,
                    breweryActive: true,
                });
            });
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
        let newPath = '/searchBeer-results?q=';
        let queryStringSplit = this.state.searchQuery.split(" ");
        var i;
        for(i = 0; i < queryStringSplit.length; i++){
            newPath += queryStringSplit[i] + '+'
        }
        return newPath.slice(0,-1);
    };

    handlePageChange = page => {
        if(this.state.beerActive){
            BeereweryServices.searchBeer(this.state.initialSearchQuery, page).then((res) => {
                this.setState({
                    data: res,
                    currentPage: page
                });
            });
        }
        else{
            BeereweryServices.searchBrewery(this.state.initialSearchQuery, page).then((res) => {
                this.setState({
                    data: res,
                    currentPage: page
                });
            });
        }
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
                                className={"col-6 py-2 text-center " + (this.state.breweryActive? "bg-white border-right": "bg-light border")}
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
                                    {
                                        this.state.beerActive &&
                                        <SearchResultBeerCards
                                            results = {this.state.data.data}
                                        />
                                    }
                                    {
                                        this.state.breweryActive &&
                                            <SearchResultBreweryCard
                                                results = {this.state.data.data}
                                            />
                                    }
                                </div>

                            )
                        }
                        {
                            this.state.data &&
                                <div className="text-center my-4">
                                    <Pagination
                                        total={this.state.data.totalResults}
                                        limit={50}
                                        pageCount={this.state.data.numberOfPages}
                                        currentPage={1}
                                    >
                                        {({
                                              pages,
                                              currentPage,
                                              hasNextPage,
                                              hasPreviousPage,
                                              previousPage,
                                              nextPage,
                                              totalPages,
                                              getPageItemProps
                                          }) => (
                                            <div>
                                                <button className="btn btn-light btn-outline-primary mx-1 my-1"
                                                    {...getPageItemProps({
                                                        pageValue: 1,
                                                        onPageChange: this.handlePageChange
                                                    })}
                                                >
                                                    first
                                                </button>

                                                {hasPreviousPage && (
                                                    <button className="btn btn-light btn-outline-primary mx-1 my-1"
                                                        {...getPageItemProps({
                                                            pageValue: previousPage,
                                                            onPageChange: this.handlePageChange
                                                        })}
                                                    >
                                                        {'<'}
                                                    </button>
                                                )}

                                                {pages.map(page => {
                                                    return (
                                                        <button className={"btn btn-light btn-outline-primary mx-1 my-1 " + (page == this.state.currentPage? "bg-primary text-white": "bg-light")}
                                                            key={page}
                                                            {...getPageItemProps({
                                                                pageValue: page,
                                                                onPageChange: this.handlePageChange
                                                            })}
                                                        >
                                                            {page}
                                                        </button>
                                                    );
                                                })}

                                                {hasNextPage && (
                                                    <button className="btn btn-light btn-outline-primary mx-1 my-1"
                                                        {...getPageItemProps({
                                                            pageValue: nextPage,
                                                            onPageChange: this.handlePageChange
                                                        })}
                                                    >
                                                        {'>'}
                                                    </button>
                                                )}

                                                <button className="btn btn-light btn-outline-primary mx-1 my-1"
                                                    {...getPageItemProps({
                                                        pageValue: totalPages,
                                                        onPageChange: this.handlePageChange
                                                    })}
                                                >
                                                    last
                                                </button>
                                            </div>
                                        )}
                                    </Pagination>
                                </div>
                        }
                    </div>
                    <div className="col-md-3 px-0">

                    </div>
                </div>
            </div>
        )
    }
}
