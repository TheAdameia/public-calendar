import { EventsList } from "../events/EventsList"


export const Welcome = () => {
    return (
        <div>
            <h1><span>Welcome to </span><span>Public Calendar</span></h1>
            <div>With absolutely no atrocious music references this time!</div>
            <div>
                <h2>This should display userEvents sorted by startTime - as a placeholder it displays EventsList</h2>
                <EventsList />
            </div>
        </div>
    )
}