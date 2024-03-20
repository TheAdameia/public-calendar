import { EventForm } from "../forms/EventForm"

export const EditEvent = ({ currentUser }) => {
    const userEditEvent = true
    return (
        <>
            <h2>Edit your event</h2>
            <EventForm 
                currentUser={currentUser}
                userEditEvent={userEditEvent}
            />
        </>
    )
}