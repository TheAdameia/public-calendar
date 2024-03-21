import { EventsList } from "../events/EventsList"
import "../pages/Pages.css"

export const Welcome = ({ currentUser }) => {
    const showUsersTrackedEvents = true

    return (
        <div>
            <h1><span>Welcome to </span><span>Public Calendar</span></h1>
            <div name="With absolutely no atrocious music references this time!"></div>
            <div>
                <h2>Your tracked events</h2>
                <EventsList 
                    currentUser={currentUser}
                    showUsersTrackedEvents={showUsersTrackedEvents}
                />
            </div>
        </div>
    )
}