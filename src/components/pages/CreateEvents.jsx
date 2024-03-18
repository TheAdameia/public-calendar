import {EventForm } from "../forms/EventForm"

export const CreateEvents = ({ currentUser }) => {
    const userCreateEvent = true
    return (
        <>
            <h2>This is where we create events, or something like that</h2>
            <EventForm 
                currentUser={currentUser}
                userCreateEvent={userCreateEvent}
            />
        </>
    )
}