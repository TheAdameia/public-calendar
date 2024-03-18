import { EventForm } from "../forms/EventForm"

export const EditEvent = ({ currentUser }) => {
    const userEditEvent = true
    return (
        <>
            <h2>Placeholder for edit event page, calls for event form</h2>
            <EventForm 
                currentUser={currentUser}
                userEditEvent={userEditEvent}
            />
        </>
    )
}