export const getUsers = () => {
    return fetch(`http://localhost:8088/users`).then((res) =>
        res.json()
    )
}


// POST
export const postUser = (user) => {
    return fetch(`http://localhost:8088/users`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    })
}


// PUT
export const updateUser = (user) => {
    return fetch(`http://localhost:8088/users/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
}


// get users by email for auth
export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) => 
        res.json()
    )
}