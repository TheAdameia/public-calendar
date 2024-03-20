import {EventForm } from "../forms/EventForm"

export const CreateEvents = ({ currentUser }) => {
    const userCreateEvent = true
    return (
        <>
            <h2>Create an event!</h2>
            <EventForm 
                currentUser={currentUser}
                userCreateEvent={userCreateEvent}
            />
        </>
    )
}