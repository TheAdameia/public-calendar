import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postUser } from "../../services/userServices"

export const ProfileForm = ({ newUser }) => {
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

    return (
        <form>
            <h2>Enter Profile Information</h2>
            <fieldset>
                <div className="">
                    <label>Name</label>
                    <input
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
                <div className="">
                    <label>Email</label>
                    <input
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
                <div className="">
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
                    <button onClick={handleSave}>Create your account!</button>
                </> :
                <>
                    <button>Edit profile</button>
                </>
            }
            </fieldset>
        </form>
    )
}