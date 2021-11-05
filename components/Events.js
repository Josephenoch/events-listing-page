import Link from "next"
import EventList from "./EventList"

const Event = ({events}) => {
          return (
        <div className= "flex flex-wrap justify-center"> 
            {events.map((event) => {
                return(
                 
                        <EventList event={event} key={event.id}/>
  
                )
            })}
        </div>
    )
}

export default Event