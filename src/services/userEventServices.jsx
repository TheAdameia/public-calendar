export const getUserEvents = () => {
    return fetch(`http://localhost:8088/userEvent`).then((res) => 
        res.json()
    )
}

// POST


// PUT