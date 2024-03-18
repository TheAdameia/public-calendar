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
export const updateEvent = (event) => {
    return fetch(`http://localhost:8088/events/${event.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
}


// DELETE
export const deleteEvent = (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE",
    })
}