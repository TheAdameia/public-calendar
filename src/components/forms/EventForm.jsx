

export const EventForm = () => {
    return (
        <form>
            <h2>Enter Event Information</h2>
            <fieldset>
                <div className="">
                    <label>Description</label>
                    <input
                        type="Text"
                        placeholder="Title and describe your event!"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <label>Address</label>
                    <input
                        type="Text"
                        placeholder="Where's the event at?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <label>Start, end time placeholder</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <label>Theme placeholder</label>
                    
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <button>Submit (doesn't actually do anything)</button>
                </div>
            </fieldset>
        </form>
    )
}

// note: because state for the event will be handled in the form itself, I will probably have to use a ternary statement
// to determine if the event is updated as opposed to created.

// if I do this as I have planned it, I may have to use a bajillion ternary statements to create the right filler text.
// That may not be a good idea.

// I have no idea if I need a dropdown, a select, or WHAT for theme.