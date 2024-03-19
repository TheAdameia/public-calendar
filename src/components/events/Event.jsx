import { useNavigate, useParams } from "react-router-dom"
import { deleteEvent } from "../../services/eventServices"


export const Event = ({ currentUser, eventObject, showAllEvents,showUsersOwnedEvents, showUsersTrackedEvents, getAndSetEvents }) => {
    const navigate = useNavigate()

    const handleDelete = () => {
        deleteEvent(eventObject.id).then(() => {
            getAndSetEvents()
        })
    }

    return (
        <section>
            <header>Event {eventObject.id}</header>
            <div>
                <div className="">Description</div>
                <div>{eventObject.description}</div>
            </div>
            <div>
                <div className="">Theme</div>
                <div>{eventObject.theme}</div>
            </div>
            <div>
                <div className="">Address</div>
                <div>{eventObject.address}</div>
            </div>
            <div>
                <div className="">Start and End Times</div>
                <div>{eventObject.startTime}</div>
                <div>{eventObject.endTime}</div>
            </div>
            <footer>buttons will go here. Just stick every relevant button in here and use ternary statement
                { showUsersOwnedEvents ? 
                    <>
                        <button
                            onClick={() => {navigate(`/myevents/${eventObject.id}`)}}
                        >Edit Event</button>
                    </> :
                    ""
                }
                { showUsersOwnedEvents ? 
                    <>
                        <button 
                            onClick={handleDelete}
                        >Delete Event</button>
                    </> :
                    ""
                }
                { showAllEvents ?
                    <> 
                        <button>Track Event</button>
                    </> :
                    ""
                }
                { showAllEvents ?
                    <>
                        <button>Untrack Event</button>
                    </> : 
                    ""
                }
                
            </footer>
        </section>
    )
}

