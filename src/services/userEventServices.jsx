export const getUserEvents = () => {
    return fetch(`http://localhost:8088/userEvent`).then((res) => 
        res.json()
    )
}

// POST
export const postUserEvent = (userEvent) => {
    return fetch(`http://localhost:8088/userEvent`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userEvent),
    })
}


// PUT - this one shouldn't actually be necessary though
export const updateUserEvent = (userEvent) => {
    return fetch(`http://localhost:8088/userEvent/${userEvent.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEvent)
    })
}

// DELETE
export const deleteUserEvent = (userEventId) => {
    return fetch(`http://localhost:8088/userEvent/${userEventId}`, {
        method: "DELETE",
    })
}


// I also need a function that expands userEvent?userId=${currentUser.id}
export const getTrackedEventsByUser = (currentUser) => {
    return fetch(`http://localhost:8088/userEvent?userId=${currentUser.id}&_expand=event`).then(res => res.json())
}


export const getUserEventsByUser = (currentUser) => {
    return fetch(`http://localhost:8088/userEvent?userId=${currentUser.id}`).then(res => res.json())
}