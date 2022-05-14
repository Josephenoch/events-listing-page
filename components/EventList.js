import Link from "next/link"

const EventList = ({event}) => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante ut suscipit scelerisque. Nam eget massa vel tortor eleifend posuere eget quis eros. Morbi ornare vitae nibh quis interdum. Nam lobortis molestie augue ac ornare. Donec rutrum augue eget purus pellentesque, et facilisis dui iaculis. Nulla pretium scelerisque porta. Cras pretium sem sed porttitor consequat. In condimentum sem id sem commodo aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque ac mauris a quam commodo sodales sit amet et ligula.Vestibulum vitae purus eu felis viverra pellentesque.Morbi vitae varius massa.Sed iaculis mi justo, id pretium nunc tincidunt quis.Donec neque magna, consequat ut egestas sit amet, fermentum eu dolor.Nam convallis lacus at mollis sagittis.Nullam varius erat in interdum ultrices.Nullam id condimentum orci.Integer placerat cursus diam in gravida.Sed blandit lacinia tristique.Nullam aliquam sapien eget sem sagittis, sit amet malesuada risus tristique.Quisque eget erat eros.Nulla vel ultrices turpis.Fusce sed urna justo."
    return (
        <div key={event.id} className="">
            <div className="h-[390px] rounded-xl overflow-hidden shadow-lg mt-24 mx-8 w-[400px] hover:scale-105 transition-all duration-500 ease-in cursor-pointer flex flex-col justify-between">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 line-clamp-1">{event.theme ? event.theme : "Theme unavailble"}</div>
                    <p className="text-gray-700 text-base line-clamp-3 w-full mt-5">
                        {event.description ? event.description : lorem}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Start Date: {event.startDate ? event.startDate : "No specified Start Date"} - End Date: {event.endDate ? event.endDate : "No specified End Date"}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <p className="text-sm text-gray-700  tracking-wide font-semibold mt-2">
                        Start Time: {event.startTime ? event.startTime : "No specified Start Date"} - End Time:{event.endTime ? event.endTime : "No specified End Time"}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{event.code ? event.code : "No code"}</span>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"><Link href="/events/[id]" as={`/events/${event.id}`}>Click here to read more</Link></span>
                </div>
            </div>
        </div>

    )
}

export default EventList