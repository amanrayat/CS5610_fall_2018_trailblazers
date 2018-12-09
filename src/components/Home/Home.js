import React from 'react'
import {Redirect} from 'react-router-dom'
import Navbar from '../NavBar/Navbar'
import UserFeed from '../UserFeed/UserFeed'

import './Home.css'
import BeerServices from "../../services/BeerServices";
import UserService from "../../services/UserService";

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
        this.state = {
            searchText: "",
            moveToSearchResult: false,
            userActivity: true,
            eventPlannerActivity: false,
            commentData: [],
            loggedInUserID: undefined,
            commentsToShow: [],
            offset: 0
        }
    }

    componentWillMount(){
        UserService.profile().then((res) => {
            BeerServices.findComments(res.data.userId).then((res_1) => {
                setInterval(this.reloadComments, 15000);
                this.setState({
                    commentData: res_1,
                    loggedInUserID: res.data.userId,
                    commentsToShow: res_1.slice(this.state.offset, this.state.offset + 5)
                });
            });
        });
    }

    reloadComments = () => {
        let newOffset = this.state.offset + 5;
        if(newOffset >= this.state.commentData.length){
            this.setState({
                offset: 0,
                commentsToShow: this.state.commentData.slice(0, 5)
            })
        }
        else{
            this.setState({
                offset: newOffset,
                commentsToShow: this.state.commentData.slice(newOffset, newOffset + 5)
            })
        }
    };

    trackSearchTextChanges = (e) => {
        this.setState({
            searchText: e.target.value,
        })
    };

    sendSearchRequest = () => {
        if(this.state.searchText.length !== 0){
            let newPath = '/search-results?q=';
            let queryStringSplit = this.state.searchText.split(" ");
            var i;
            for(i = 0; i < queryStringSplit.length; i++){
                newPath += queryStringSplit[i] + '+'
            }
            newPath.slice(0,-1);
            this.props.history.push(newPath.slice(0,-1))
        }
    };


    render(){
        return(
            <div className="h-100">
                <Navbar
                    history = {this.props.history}
                    isAuthenticated = {this.props.isAuthenticated}
                    userHasAuthenticated = {this.props.userHasAuthenticated}
                />
                <div className="backdropHome">
                    <div className="row mx-0">
                        <div className="col-md-1 d-none d-md-block">

                        </div>
                        <div className="col-md-6 col-10">
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
                        <div className="col-md-3 d-none d-md-block">
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-1">
                        </div>
                        <div className="col-md-6 col-10">
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
                                    commentData = {this.state.commentsToShow}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}