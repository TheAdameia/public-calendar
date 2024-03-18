import { useEffect, useState } from "react"
import { UserViews } from "./UserViews"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState ({})


    useEffect(() => {
        const localCalendarUser = localStorage.getItem("calendar_user")
        const calendarUserObject = JSON.parse(localCalendarUser)

        setCurrentUser(calendarUserObject)
    }, [])

    return ( <UserViews currentUser={currentUser}/> )
}