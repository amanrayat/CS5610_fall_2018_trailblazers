import React from 'react';
import queryString from 'query-string'
import Navbar from "../NavBar/Navbar";

export default class SearchResult extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchQuery: queryString.parse(this.props.location.search, { ignoreQueryPrefix: true }).q
        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="h-100">
                <Navbar/>
                <div className="h-25">
                </div>
                <div className="row mx-0">
                    <div className="col-md-3 px-0">

                    </div>
                    <div className="col-md-6 col-12 px-0">
                        <div className="row bg-light">
                            <div className="col-12">
                                <div className="row my-4">
                                    <div className="col-10">
                                        <input
                                            value={this.state.searchQuery}
                                            //onChange={this.trackSearchTextChanges}
                                            className="form-control"
                                            type="text"
                                            placeholder="Search for Beers or Breweries"
                                            aria-label="Search"/>
                                    </div>
                                    <div className="col-2">
                                        <button
                                            //onClick={this.sendSearchRequest}
                                            type="button"
                                            className="btn btn-secondary">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 px-0">

                    </div>
                </div>
            </div>
        )
    }
}