import React from 'react';
import queryString from 'query-string'

export default class SearchResult extends React.Component {

    constructor(props){
        super(props);
        console.log(queryString.parse(this.props.location.search, { ignoreQueryPrefix: true }).q);
    }

    render(){
        return(
            <div>
                HELLO
            </div>
        )
    }
}