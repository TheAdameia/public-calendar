import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "../navigation/NavBar"
import { Welcome } from "../welcome/Welcome"
import { CreateEvents } from "../pages/CreateEvents"
import { ViewEvents } from "../pages/ViewEvents"
import { MyEvents } from "../pages/MyEvents"
import { EditEvent } from "../pages/EditEvent"
import { EditProfile } from "../pages/EditProfile"


export const UserViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar />
                    <Outlet />
                </>
            }>
                <Route index element={<Welcome currentUser={currentUser}/>} />
                <Route path="createevents" element={<CreateEvents currentUser={currentUser}/>} />
                <Route path="viewevents">
                    <Route index element={<ViewEvents currentUser={currentUser}/>}>
                        {/* stretch: view individual events */}
                    </Route>
                </Route>
                <Route path="myevents">
                    <Route index element={<MyEvents currentUser={currentUser}/>} />
                    <Route path=":eventId" element={<EditEvent currentUser={currentUser}/>} />
                    <Route path="editprofile" element={<EditProfile currentUser={currentUser}/>} />
                </Route>
            </Route>
        </Routes>
    )
} 