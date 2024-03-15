import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "../navigation/NavBar"
import { Welcome } from "../welcome/Welcome"
import { CreateEvents } from "../pages/CreateEvents"
import { ViewEvents } from "../pages/ViewEvents"
import { MyEvents } from "../pages/MyEvents"
import { EditEvent } from "../pages/EditEvent"
import { EditProfile } from "../pages/EditProfile"


export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar />
                    <Outlet />
                </>
            }>
                <Route index element={<Welcome/>} />
                <Route path="createevents" element={<CreateEvents />} />
                <Route path="viewevents">
                    <Route index element={<ViewEvents/>}>
                        {/* stretch: view individual events */}
                    </Route>
                </Route>
                <Route path="myevents">
                    <Route index element={<MyEvents />} />
                    <Route path="editevent" element={<EditEvent />} />
                    <Route path="editprofile" element={<EditProfile />} />
                </Route>
            </Route>
        </Routes>
    )
}