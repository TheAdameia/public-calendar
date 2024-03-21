import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { postEvent, updateEvent } from "../../services/eventServices"
import { getThemes } from "../../services/themeServices"
import "./Form.css"

export const EventForm = ({ currentUser, userCreateEvent, userEditEvent }) => {
    const [eventEntry, setEventEntry] = useState({address: "", startTime: "", endTime: "", description: "", theme: ""})
    const [themesArray, setThemeArray] = useState([])

    const navigate = useNavigate()
    const eventId = useParams()

    const getAndSetThemes = () => {
        getThemes().then(returnData => {
            setThemeArray(returnData)
        })
    }

    useEffect(() => {
        getAndSetThemes()
    }, [currentUser])


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
                <div className="form-group">
                    <label className="form-label">Description</label>
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
                <div className="form-group">
                    <label className="form-label">Address</label>
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
                <div className="form-group-datetime">
                    <label className="form-label">Start, end times</label>
                    <input
                        className="datetime"
                        type="datetime-local"
                        placeholder="start time"
                        onChange={(event) => {
                            const eventCopy = {...eventEntry}
                            eventCopy.startTime = event.target.value
                            setEventEntry(eventCopy)
                        }}
                    />
                    <input
                        className="datetime"
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
                <div className="form-group">
                    <label className="form-label">Select the best-fitting Theme</label>
                    {themesArray.map((themeObject) => {
                        return (
                            <div
                                key={themeObject.id}
                            >
                                <input
                                    type="radio" 
                                    value={themeObject.theme} 
                                    id={themeObject.id}
                                    name="theme"
                                    
                                    onChange={(event) => {
                                        const eventCopy = {...eventEntry}
                                        eventCopy.theme = event.target.value
                                        setEventEntry(eventCopy)
                                    }}
                                />
                                <label>{themeObject.theme}</label>
                                <br></br>
                            </div>
                        )
                    })}
                </div>
            </fieldset>
            <fieldset>
            { userCreateEvent ? 
                <>
                <button
                    className="btn-primary"
                    onClick={handleSave}>Submit new event</button>
                </> :
                ""
            }
            { userEditEvent ? 
                <>
                <button
                    className="btn-primary"
                    onClick={handleEdit}>Edit event</button>
                </> :
                ""
            }
            </fieldset>
        </form>
    )
}