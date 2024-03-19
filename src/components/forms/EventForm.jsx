import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { postEvent, updateEvent } from "../../services/eventServices"


export const EventForm = ({ currentUser, userCreateEvent, userEditEvent }) => {
    const [eventEntry, setEventEntry] = useState({address: "", startTime: "", endTime: "", description: "", theme: ""})

    const navigate = useNavigate()
    const eventId = useParams()
    // useParams() is so cursed.

    const handleSave = (event) => {
        event.preventDefault()
        const newEventEntry = {
            eventCreator: currentUser.id,
            address: eventEntry.address,
            startTime: eventEntry.startTime,
            endTime: eventEntry.endTime,
            theme: eventEntry.theme,
            description: eventEntry.description
        }
        postEvent(newEventEntry).then(() => {
            navigate("/viewevents")
        })
    }

    const handleEdit = (event) => {
        event.preventDefault()
        const updateEventEntry = {
            id: parseInt(eventId.eventId),
            eventCreator: currentUser.id,
            address: eventEntry.address,
            startTime: eventEntry.startTime,
            endTime: eventEntry.endTime,
            theme: eventEntry.theme,
            description: eventEntry.description
        }
        updateEvent(updateEventEntry).then(() => {
            navigate("/viewevents")
        })
    }

    return (
        <form>
            <h2>Enter Event Information</h2>
            <fieldset>
                <div className="">
                    <label>Description</label>
                    <input
                        type="Text"
                        placeholder="Title and describe your event!"
                        onChange={(event) => {
                            const eventCopy = {...eventEntry}
                            eventCopy.description = event.target.value
                            setEventEntry(eventCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <label>Address</label>
                    <input
                        type="Text"
                        placeholder="Where's the event at?"
                        onChange={(event) => {
                            const eventCopy = {...eventEntry}
                            eventCopy.address = event.target.value
                            setEventEntry(eventCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <label>Start, end time</label>
                    <input
                        type="datetime-local"
                        placeholder="start time"
                        onChange={(event) => {
                            const eventCopy = {...eventEntry}
                            eventCopy.startTime = event.target.value
                            setEventEntry(eventCopy)
                        }}
                    />
                    <input
                        type="datetime-local"
                        placeholder="end time"
                        onChange={(event) => {
                            const eventCopy = {...eventEntry}
                            eventCopy.endTime = event.target.value
                            setEventEntry(eventCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <label>Favorite theme options</label><br></br>
                    <input
                        type="radio" 
                        value="" 
                        id="Theme 1"
                        onChange={(event) => {
                            const eventCopy = {...eventEntry}
                            eventCopy.theme = event.target.value
                            setEventEntry(eventCopy)
                        }}
                    />
                    <label>Theme 1</label>
                    <br></br>
                </div>
            </fieldset>
            <fieldset>
            { userCreateEvent ? 
                <>
                <button onClick={handleSave}>Submit new event</button>
                </> :
                ""
            }
            { userEditEvent ? 
                <>
                <button onClick={handleEdit}>Edit event</button>
                </> :
                ""
            }

            </fieldset>
        </form>
    )
}

// note: because state for the event will be handled in the form itself, I will probably have to use a ternary statement
// to determine if the event is updated as opposed to created.

// if I do this as I have planned it, I may have to use a bajillion ternary statements to create the right filler text.
// That may not be a good idea.

// I have no idea if I need a dropdown, a select, or WHAT for theme.