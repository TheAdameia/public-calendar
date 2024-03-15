import { Link } from "react-router-dom"
import { EventsList } from "../events/EventsList"


export const MyEvents = () => {
    return (
        <>
            <h2>displays the events I created!</h2>
            <h3>buttons to edit and delete go in each - all events list below</h3>
            <EventsList />
            <li>
                <Link to={"/myevents/editprofile"}>Edit Profile</Link>
            </li>
        </>
    )
    
}