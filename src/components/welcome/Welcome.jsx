import { useState } from "react"
import { EventsList } from "../events/EventsList"


export const Welcome = ({ currentUser }) => {
    const showUsersTrackedEvents = true

    return (
        <div>
            <h1><span>Welcome to </span><span>Public Calendar</span></h1>
            <div>With absolutely no atrocious music references this time!</div>
            <div>
                <h2>This should display userEvents sorted by startTime - currently does not sort</h2>
                <EventsList 
                    currentUser={currentUser}
                    showUsersTrackedEvents={showUsersTrackedEvents}
                />
            </div>
        </div>
    )
}