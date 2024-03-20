import { useNavigate } from "react-router-dom"
import { deleteEvent } from "../../services/eventServices"
import { deleteUserEvent, getUserEventsByUser, postUserEvent } from "../../services/userEventServices"
import { useEffect, useState } from "react"
import "./Event.css"


export const Event = ({ currentUser, eventObject, showAllEvents,showUsersOwnedEvents, showUsersTrackedEvents, getAndSetEvents }) => {

    const [thisUsersEvents, setThisUsersEvents] = useState([])
    const navigate = useNavigate()

    const getThisUsersEvents = () => {
        getUserEventsByUser(currentUser).then(array => {
            setThisUsersEvents(array)
        })
    }
    
    const handleDelete = () => {
        deleteEvent(eventObject.id).then(() => {
            getAndSetEvents()
        })
    }

    const handleCreateUserEvent = (event) => {
        event.preventDefault()
        const newUserEvent = {
            eventId: eventObject.id,
            userId: currentUser.id
        }
        for (const iterator of thisUsersEvents) {
            if (iterator.userId === newUserEvent.userId && iterator.eventId === newUserEvent.eventId) {
                window.alert("Event already tracked!")
                return
            }
        }
        postUserEvent(newUserEvent).then(() => {
                getThisUsersEvents()
            })
        window.alert("Event tracked!")
    }


    const handleDeleteUserEvent = (event) => {
        event.preventDefault()
        const toBeDeletedUserEvent = {
            eventId: eventObject.id,
            userId: currentUser.id
        }
        let count = 0
        for (const iterator of thisUsersEvents) {
            if (iterator.userId === toBeDeletedUserEvent.userId && iterator.eventId === toBeDeletedUserEvent.eventId) {
                deleteUserEvent(iterator.id).then(() => {
                    getThisUsersEvents()
                })
                count++
                window.alert("Event successfully untracked!")
            }
        }
        if (count === 0) {window.alert("Event already untracked!")}
    }

    useEffect(() => {
        getThisUsersEvents()
    }, [currentUser])

    return (
        <section className="event">
            <header className="event-info">Event {eventObject.id}</header>
            <div>
                <div className="event-info">Description</div>
                <div>{eventObject.description}</div>
            </div>
            <div>
                <div className="event-info">Theme</div>
                <div>{eventObject.theme}</div>
            </div>
            <div>
                <div className="event-info">Address</div>
                <div>{eventObject.address}</div>
            </div>
            <div>
                <div className="event-info">Start and End Times</div>
                <div>{eventObject.startTime}</div>
                <div>{eventObject.endTime}</div>
            </div>
            <footer className="btn-container">
                { showUsersOwnedEvents ? 
                    <>
                        <button
                            className="btn"
                            onClick={() => {navigate(`/myevents/${eventObject.id}`)}}
                        >Edit Event</button>
                    </> :
                    ""
                }
                { showUsersOwnedEvents ? 
                    <>
                        <button
                            className="btn btn-warning"
                            onClick={handleDelete}
                        >Delete Event</button>
                    </> :
                    ""
                }
                { showAllEvents ?
                    <> 
                        <button
                            className="btn btn-secondary"
                            onClick={handleCreateUserEvent}
                        >Track Event</button>
                    </> :
                    ""
                }
                { showAllEvents ?
                    <>
                        <button
                        className="btn btn-warning"
                            onClick={handleDeleteUserEvent}
                        >Untrack Event</button>
                    </> : 
                    ""
                }
                
            </footer>
            <br></br>
        </section>
    )
}

