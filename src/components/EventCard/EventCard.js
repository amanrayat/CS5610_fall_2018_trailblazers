import React from 'react'
import { Link} from 'react-router-dom'

function formatTime(time) {
    let splitTime = time.split(":");
    var dd = "AM";
    var h = parseInt(splitTime[0]);
    if (h >= 12) {
        h = h - 12;
        dd = "PM";
    }
    return h + ":" + splitTime[1] + " " + dd;
}

function formatDate(date) {
    let splitDate = date.split("-");
    return splitDate[0] + "/" + splitDate[1] + "/" + splitDate[2].substring(0,2)
}

function EventCard({event}) {
    return(
            <div className="card my-2">
                <div className="card-header text-primary text-center">
                    <h4>
                        {event.name}
                    </h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2 col-4 text-primary text-center mx-0">
                            Planner:
                        </div>
                        <div className="col-5 mx-0">
                            <Link to={`/profile/${event.eventPlannerId._id}`}>
                                {event.eventPlannerId.username}
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-4 text-primary text-center mx-0">
                            Date:
                        </div>
                        <div className="col-5 mx-0">
                            {formatDate(event.dateOfEvent)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-4 text-primary text-center mx-0">
                            Time:
                        </div>
                        <div className="col-5 mx-0">
                            {formatTime(event.timeOfEvent)}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default EventCard