import { useNavigate } from "react-router-dom"


export const Event = () => {
    const navigate = useNavigate()

    return (
        <section>
            <header>Event number ???</header>
            <div>Event description goes here - can be as many divs as needed to describe properties</div>
            <footer>buttons will go here. Just stick every relevant button in here and use ternary statement?
                <button
                    onClick={() => {navigate("/myevents/editevent")}}
                >Edit Event</button>
                <button>Delete Event</button>
                <button>Track Event</button>
                <button>Untrack Event</button>
            </footer>
        </section>
    )
}