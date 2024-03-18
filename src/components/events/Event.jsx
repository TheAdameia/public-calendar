import { useNavigate } from "react-router-dom"


export const Event = ({ currentUser, eventObject, showAllEvents,showUsersOwnedEvents, showUsersTrackedEvents }) => {
    const navigate = useNavigate()

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
                            onClick={() => {navigate("/myevents/editevent")}}
                        >Edit Event</button>
                    </> :
                    ""
                }
                { showUsersOwnedEvents ? 
                    <>
                        <button 
                            onClick={console.log("quack")}
                        >Delete Event</button>
                    </> :
                    ""
                }
                <button>Track Event</button>
                <button>Untrack Event</button>
            </footer>
        </section>
    )
}

