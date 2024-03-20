

export const getThemes = () => {
    return fetch(`http://localhost:8088/themes`).then((res) =>
        res.json()
    )
}