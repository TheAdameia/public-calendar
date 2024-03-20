import { Link } from "react-router-dom"
import { EventsList } from "../events/EventsList"


export const MyEvents = ({ currentUser }) => {
    const showUsersOwnedEvents = true
    return (
        <>
            <h2>Your owned events</h2>
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