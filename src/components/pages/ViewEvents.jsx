import { EventsList } from "../events/EventsList"



export const ViewEvents = ({ currentUser }) => {
    const showAllEvents = true
    return (
        <>
            <h2>All Events</h2>
            <EventsList 
                currentUser={currentUser}
                showAllEvents={showAllEvents}
            />
        </>
    )
    
}