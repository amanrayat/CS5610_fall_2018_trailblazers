import React from 'react'
import {Redirect} from 'react-router-dom'


export default class EventPlannerFeed extends React.Component{
    constructor(props){
        super(props);
        let commentData = [
            {userId: 'user1', comment: "fuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beerfuckall beer"},
            {userId: 'user2', comment: "fuckall beer"},
            {userId: 'user3', comment: "fuckall beer"},
            {userId: 'user4', comment: "fuckall beer"},
            {userId: 'user5', comment: "fuckall beer"},
            {userId: 'user5', comment: "fuckall beer"},
        ];
        this.state = {
            userActivity: commentData,
        }
    };

    render(){
        return(
            <div className="list-group">
                {
                    this.state.userActivity.map((comment, index) =>
                        (
                            <a href="#" className="list-group-item text-truncate"><strong>{comment.userId}</strong> commented about blabla: "{comment.comment}"</a>
                        )
                    )
                }
            </div>
        )
    }
}