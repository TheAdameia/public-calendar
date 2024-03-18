import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getUserByEmail } from "../../services/userServices"

export const Login = () => {
    const [email, setEmail] = useState("monster@monster.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        getUserByEmail(email).then((foundUsers) => {
            if (foundUsers.length === 1) {
                const user = foundUsers[0]
                localStorage.setItem(
                    "calendar_user",
                    JSON.stringify({
                        id: user.id
                    })
                )

                navigate("/")
            } else {
                window.alert("invalid login")
            }
        })
    }

    return (
        <main>
            <section>
                <form onSubmit={handleLogin}>
                    <h1>Public Calendar</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <div className="">
                            <input
                                type="email"
                                placeholder="email address"
                                required
                                autoFocus
                                onChange={(evt) => setEmail(evt.target.value)}
                                value={email}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="">
                            <button
                                type="submit"
                            >Sign in</button>
                        </div>
                    </fieldset>
                </form>
            </section>
            <section>
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}