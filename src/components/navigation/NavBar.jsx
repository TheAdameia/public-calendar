import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
                <Link to="/viewevents">View Events</Link>
            </li>
            <li className="navbar-item">
                <Link to="/createevents">Create Events</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myevents">My Events</Link>
            </li>
            {localStorage.getItem("calendar_user") ? (
                <li className="navbar-item navbar-logout">
                    <Link
                        className="navbar-link"
                        to=""
                        onClick={() => {
                            localStorage.removeItem("calendar_user")
                            navigate("/", { replace: true })
                        }}
                    >Logout</Link>
                </li>
                ) : (
                ""
            )}
        </ul>
    )
}
