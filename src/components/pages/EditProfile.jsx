import { ProfileForm } from "../forms/ProfileForm"


export const EditProfile = ({ currentUser }) => {
    return (
        <>
            <h2>Edit Profile</h2>
            <ProfileForm
                currentUser={currentUser}
            />
        </>
    )
}