

export const ProfileForm = () => {
    return (
        <form>
            <h2>Enter Profile Information</h2>
            <fieldset>
                <div className="">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="enter usename"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="enter email"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <label>Interested Themes</label>
                    <input
                        type="radio"
                        name="Themes go here? map and return checkboxes or do a dropdown"
                    />
                </div>
            </fieldset>
        </form>
    )
}