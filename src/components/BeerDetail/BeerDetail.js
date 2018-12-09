import React from "react";
import axios from 'axios';
import './BeerDetail.css'
import {Link} from 'react-router-dom'
import BeereweryServices from "../../services/BeereweryServices";
import BeerServices from "../../services/BeerServices";
import UserService from "../../services/UserService";
import Navbar from "../NavBar/Navbar";


export default class BeerDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            beer: {},
            commentInput: "",
            comments: []
        }
    }

    componentWillMount(){

        // if (!this.props.isAuthenticated) {
        //     return;
        // }

        // retrieve beerId from the URL path parameter 'beerId'
        // the props.match.params is part of the Route library which
        // parses the URL path and names the parameters and creates
        // the params map
        const beerId = this.props.match.params.beerId;

        BeereweryServices.getBeer(beerId).then((res) => {
            let beerJson = {
                _id : res.data.id,
                name : res.data.name,
                nameDisplay : res.data.nameDisplay,
                description : res.data.description,
                createDate : res.data.createDate,
                updateDate : res.data.updateDate,
                servingTemperatureDisplay : res.data.servingTemperatureDisplay,
                isOrganic : res.data.isOrganic === 'Y',
                abv: res.data.abv,
                ibu : res.data.ibu,
                og : res.data.og,
            };
            BeerServices.createBeer(beerJson).then((res_1) => {
                BeerServices.findCommentsForBeerId(beerId).then((res_2) => {
                    this.setState({
                        comments: res_2,
                        beer: res.data
                    })
                })
            })

        });

    };

    trackCommentInput = (e) => {
        this.setState({
            commentInput: e.target.value
        })
    };

    addComment = () => {
        if(this.state.commentInput.length){
            UserService.profile().then((res) => {
                BeerServices.addCommentForBeerId(this.state.commentInput, res.data[0]._id, this.state.beer.id).then((res_1) =>{
                    BeerServices.findCommentsForBeerId(this.state.beer.id).then((res_2) => {
                        this.setState({
                            comments: res_2,
                            commentInput: ""
                        })
                    })
                })
            });
        }
    };

    render() {
        return (
            <div className="h-100">
                <Navbar
                    history = {this.props.history}
                    isAuthenticated = {this.props.isAuthenticated}
                    userHasAuthenticated = {this.props.userHasAuthenticated}
                />
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
                                            (<div className="product">{brewery.images ? <img
                                                className="img-responsive pull-left product-image"
                                                src={brewery.images.squareMedium}/> : <i className=" pull-left product-image fa fa-2x fa-beer pt-2" aria-hidden="true"></i>}
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
                                {
                                    this.props.isAuthenticated &&
                                    <div className="row pl-lg-3">
                                        <div className="col-8 list-group">
                                        <textarea
                                            value={this.state.commentInput}
                                            id="multiliner"
                                            name="multiliner"
                                            placeholder="Write a comment..."
                                            onChange={this.trackCommentInput}
                                        />
                                        </div>
                                        <div className="col-4">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => this.addComment()}
                                            >
                                                Comment
                                            </button>
                                        </div>
                                    </div>
                                }
                                <div className="row pl-lg-3">
                                    <div className="col-8 list-group mt-4">
                                        <span className="mb-1">User comments</span>
                                        {
                                            this.state.comments.map((comment, index) => (
                                                <div className="list-group-item">
                                                    <div className="row">
                                                        <div className="col-1 text-primary">
                                                            {comment.userId.username}:
                                                        </div>
                                                        <div className="ml-1 col-10">
                                                            {comment.comment}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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