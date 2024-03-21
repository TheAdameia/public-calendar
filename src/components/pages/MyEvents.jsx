import { Link } from "react-router-dom"
import { EventsList } from "../events/EventsList"
import "./Pages.css"


export const MyEvents = ({ currentUser }) => {
    const showUsersOwnedEvents = true
    return (
        <>
            <h2>Your owned events</h2>
            <div>
                <li className="editprofile"> 
                    <Link to={"/myevents/editprofile"}>Edit Profile</Link>
                </li>
            </div>
            <EventsList 
                currentUser={currentUser}
                showUsersOwnedEvents={showUsersOwnedEvents}
            />

            

        </>
    )
    
}