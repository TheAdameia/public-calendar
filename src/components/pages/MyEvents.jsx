import { Link } from "react-router-dom"
import { EventsList } from "../events/EventsList"


export const MyEvents = ({ currentUser }) => {
    const showUsersOwnedEvents = true
    return (
        <>
            <h2>displays the events I created!</h2>
            <h3>buttons to edit and delete go in each - all events list below</h3>
            <EventsList 
                currentUser={currentUser}
                showUsersOwnedEvents={showUsersOwnedEvents}
            />
            <li>
                <Link to={"/myevents/editprofile"}>Edit Profile</Link>
            </li>
        </>
    )
    
}