export const getEvents = () => {
    return fetch(`http://localhost:8088/users`).then((res) =>
    res.json()
    )
}


// POST


// PUT


// DELETE