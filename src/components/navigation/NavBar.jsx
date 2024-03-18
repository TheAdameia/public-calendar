import { Link, useNavigate } from "react-router-dom"


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/viewevents">View Events</Link>
            </li>
            <li>
                <Link to="/createevents">Create Events</Link>
            </li>
            <li>
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
