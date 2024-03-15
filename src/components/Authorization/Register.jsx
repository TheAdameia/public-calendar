import { ProfileForm } from "../forms/ProfileForm"


export const Register = () => {

    return (
        <main>
            <form>
                <h1>Public Calendar</h1>
                <h2>Please Register</h2>
            </form>
            <ProfileForm />
            <button
                type="submit"
            >ze button, it does nothing!</button>
        </main>
    )
}