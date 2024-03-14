import { EventsList } from "../events/EventsList"


export const MyEvents = () => {
    return (
        <>
            <h2>displays the events I created!</h2>
            <h3>buttons to edit and delete go in each - all events list below</h3>
            <EventsList />
            <button>Click this button to do absolutely nothing (edit profile)</button>
        </>
    )
    
}