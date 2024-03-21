import { Link, useNavigate } from "react-router-dom"
import { EventsList } from "../events/EventsList"
import "./Pages.css"


export const MyEvents = ({ currentUser }) => {
    const navigate = useNavigate()
    const showUsersOwnedEvents = true
    return (
        <>
            <h2>Your owned events</h2>
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => {navigate(`/myevents/editprofile`)}}
                >Edit Profile</button>
            </div>
            <EventsList 
                currentUser={currentUser}
                showUsersOwnedEvents={showUsersOwnedEvents}
            />

            

        </>
    )
    
}