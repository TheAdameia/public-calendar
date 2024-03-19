import { ProfileForm } from "../forms/ProfileForm"


export const Register = () => {
    const newUser = true

    return (
        <main>
            <form>
                <h1>Public Calendar</h1>
                <h2>Please Register</h2>
            </form>
            <ProfileForm newUser={newUser}/>
        </main>
    )
}