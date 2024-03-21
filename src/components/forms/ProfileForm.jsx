import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postUser, updateUser } from "../../services/userServices"
import "./Form.css"

export const ProfileForm = ({ newUser, currentUser }) => {
    const [userProfile, setUserProfile] = useState({theme: "none"})

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()
        const newUserEntry = {
            name: userProfile.name,
            email: userProfile.email
        }
        postUser(newUserEntry).then(() => {
            navigate("/")
        })
    }

    const handleEdit = (event) => {
        event.preventDefault()
        const updateUserProfile = {
            id: currentUser.id,
            name: userProfile.name,
            email: userProfile.email
        }
        updateUser(updateUserProfile).then(() => {
            navigate("/")
        })
    }

    return (
        <form>
            <h2>Enter Profile Information</h2>
            <fieldset>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                        className="datetime"
                        type="text"
                        placeholder="enter name"
                        required
                        onChange={(event) => {
                            const userCopy = {...userProfile}
                            userCopy.name = event.target.value
                            setUserProfile(userCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        className="datetime"
                        type="email"
                        placeholder="enter email"
                        required
                        onChange={(event) => {
                            const userCopy = {...userProfile}
                            userCopy.email = event.target.value
                            setUserProfile(userCopy)
                        }}
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label>Favorite Theme</label>
                    <input
                        type="text"
                        placeholder="The one theme you're most interested in!"
                    />
                </div>
            </fieldset> */}
            <fieldset>
            { newUser ?
                <>
                    <button
                        className="btn-primary"
                        onClick={handleSave}>Create your account!</button>
                </> :
                <>
                    <button
                        className="btn-primary"
                        onClick={handleEdit}>Edit profile</button>
                </>
            }
            </fieldset>
        </form>
    )
}