import React from 'react'
import EventCard from "../EventCard/EventCard";

function EventList({events}){
    return(
        events.map((event, index) => (
            <EventCard
                event= {event}
            />
            )
        )
    );
}

export default EventList