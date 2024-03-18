import { EventsList } from "../events/EventsList"



export const ViewEvents = ({ currentUser }) => {
    const showAllEvents = true
    return (
        <>
            <div>This displays a list of all the events with a track/untrack button on each.</div>
            <h2>All Events</h2>
            <EventsList 
                currentUser={currentUser}
                showAllEvents={showAllEvents}
            />
        </>
    )
    
}