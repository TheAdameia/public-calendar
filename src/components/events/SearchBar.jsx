export const SearchBar = ({ setSearchTerm }) => {
    
    return (
        <div className="">
            <input type="text"
                onChange={(event) => {setSearchTerm(event.target.value)}}
                placeholder="Search Tickets"
                className="ticket-search"
            />
        </div>
    )
}