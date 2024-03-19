// FETCH
export const getEvents = () => {
    return fetch(`http://localhost:8088/events`).then((res) =>
    res.json()
    )
}


// POST
export const postEvent = (event) => {
    return fetch(`http://localhost:8088/events`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
    })
}


// PUT
export const updateEvent = (eventObject) => {
    return fetch(`http://localhost:8088/events/${eventObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventObject)
    })
}


// DELETE
export const deleteEvent = (eventObjectId) => {
    return fetch(`http://localhost:8088/events/${eventObjectId}`, {
        method: "DELETE",
    })
}