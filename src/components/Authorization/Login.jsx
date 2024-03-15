import React from "react"
import { Link } from "react-router-dom"

export const Login = () => {
    

    return (
        <main>
            <section>
                <form>
                    <h1>Public Calendar</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <div className="">
                            <input
                                type="email"
                                placeholder="email address"
                                required
                                autoFocus
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