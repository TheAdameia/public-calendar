import { useEffect, useState } from "react"
import { Event } from "./Event"
import { getEvents } from "../../services/eventServices"
import { getTrackedEventsByUser } from "../../services/userEventServices"

export const EventsList = ({ currentUser, showAllEvents,showUsersOwnedEvents, showUsersTrackedEvents }) => {
    const [allEvents, setAllEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])

    const getAndSetEvents = () => {
        getEvents().then(eventsArray => {
            setAllEvents(eventsArray)
        })
    }

    // I need to do something else with this to make the output readable
    const getAndSetTrackedEvents = () => {
        getTrackedEventsByUser(currentUser).then(data => {
            const trackedArray = []
            for (const iterator of data) {
                trackedArray.push(iterator.event)
            }
            setFilteredEvents(trackedArray)
        })
    }


    // fetches whole array of events at the start and if currentUser changes
    useEffect(() => {
        getAndSetEvents()
    }, [currentUser])

    useEffect(() => {
        if (showAllEvents) {
            setFilteredEvents(allEvents)
        } else if (showUsersOwnedEvents) {
            const userOwnedEvents = allEvents.filter(eventThing => eventThing.eventCreator === currentUser.id)
            setFilteredEvents(userOwnedEvents)
        } else if (showUsersTrackedEvents) {
            getAndSetTrackedEvents()
        } else {
            window.alert("unexpected error! One of the three views must be true.")
        }
    }, [currentUser, allEvents])

    return (
        <div>
            <article>
                {filteredEvents.map((eventObject) => {
                    return (
                        <Event
                            eventObject={eventObject}
                            currentUser={currentUser}
                            key={eventObject.id}
                            showAllEvents={showAllEvents}
                            showUsersOwnedEvents={showUsersOwnedEvents}
                            showUsersTrackedEvents={showUsersTrackedEvents}
                            getAndSetEvents={getAndSetEvents}
                        />
                    )
                })}
                
            </article>
        </div>
    )
}