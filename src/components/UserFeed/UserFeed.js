import React from 'react'
import { Link} from 'react-router-dom'


function UserFeed({isAuthenticated, commentData}){
    return(
        <div className="list-group">
            {
                commentData.map((comment, index) =>
                    (
                        <div key={comment._id} className="list-group-item text-truncate">
                            {
                                isAuthenticated &&
                                    <div>
                                        <Link to={`/profile/${comment.userId._id}`}>
                                            <strong>{comment.userId.username}: </strong>
                                        </Link>
                                        <Link to={`/beer/${comment.beerId}`}>
                                            commented: "{comment.comment}"
                                        </Link>
                                    </div>

                            }
                            {
                                !isAuthenticated &&
                                <div className="text-primary">
                                    <strong>{comment.userId.username}: </strong> commented : "{comment.comment}"
                                </div>
                            }
                        </div>
                    )
                )
            }
        </div>
    )
}

export default UserFeed;