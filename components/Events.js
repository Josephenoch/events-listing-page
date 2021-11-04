

const Event = ({events}) => {
    return (
        <div>
            {events.map((event) => {
                return(
                    <div key={event.id}>
                        <h1>{event.theme ? event.theme : "Theme unavailble"}</h1>
                        <h6>{event.description}</h6>
                    </div>
                )
            })}
        </div>
    )
}

export default Event