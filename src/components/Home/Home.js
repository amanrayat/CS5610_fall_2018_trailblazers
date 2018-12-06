import React from 'react'
import {Redirect} from 'react-router-dom'
import Navbar from '../NavBar/Navbar'
import UserFeed from '../UserFeed/UserFeed'

import './Home.css'

let commentData1 = [
    {userId: 'user1', comment: "fuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beer"},
    {userId: 'user2', comment: "fuckall beer"},
    {userId: 'user3', comment: "fuckall beer"},
    {userId: 'user4', comment: "fuckall beer"},
    {userId: 'user5', comment: "fuckall beer"},
];

let commentData2 = [
    {userId: 'user1', comment: "fuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beer"},
    {userId: 'user2', comment: "balle beer"},
    {userId: 'user3', comment: "balle beer"},
    {userId: 'user4', comment: "balle beer"},
    {userId: 'user5', comment: "balle beer"},
];


export default class Home extends React.Component{
    constructor(props){
        super(props);
        setInterval(this.reloadComments, 5000);
        this.state = {
            searchText: "",
            moveToSearchResult: false,
            userActivity: true,
            eventPlannerActivity: false,
            commentData: commentData1
        }
    }

    reloadComments = () => {
        if(this.state.commentData === commentData1){
            this.setState({
                commentData: commentData2
            });
        }
        else{
            this.setState({
                commentData: commentData1
            });
        }
    };

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
            <div className="backdropHome">
                <Navbar/>
                <div className="row mx-0">
                    <div className="col-1">

                    </div>
                    <div className="col-6">
                        <div className="row py-5">
                            <div className="col-10">
                                <input
                                    value={this.state.searchText}
                                    onChange={this.trackSearchTextChanges}
                                    className="form-control"
                                    type="text"
                                    placeholder="Search for Beers or Breweries"
                                    aria-label="Search"/>
                            </div>
                            <div className="col-2 text-right">
                                <button
                                    onClick={this.sendSearchRequest}
                                    type="button"
                                    className="btn btn-secondary">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col-1">
                    </div>
                    <div className="col-6">
                        <div className="row mx-0 rounded">
                            <div
                                className={"col-6 text-center py-2 " + (this.state.userActivity? "bg-white": "bg-light border")}
                            >
                                User Activity
                            </div>
                            <div
                                className={"col-6 text-center py-2 " + (this.state.eventPlannerActivity? "bg-white": "bg-light border")}
                            >
                                EventPlanner Activity
                            </div>
                        </div>
                        {
                            this.state.userActivity &&
                            <UserFeed
                                commentData = {this.state.commentData}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}