import Link from "next"

const Event = ({events}) => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante ut suscipit scelerisque. Nam eget massa vel tortor eleifend posuere eget quis eros. Morbi ornare vitae nibh quis interdum. Nam lobortis molestie augue ac ornare. Donec rutrum augue eget purus pellentesque, et facilisis dui iaculis. Nulla pretium scelerisque porta. Cras pretium sem sed porttitor consequat. In condimentum sem id sem commodo aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque ac mauris a quam commodo sodales sit amet et ligula.Vestibulum vitae purus eu felis viverra pellentesque.Morbi vitae varius massa.Sed iaculis mi justo, id pretium nunc tincidunt quis.Donec neque magna, consequat ut egestas sit amet, fermentum eu dolor.Nam convallis lacus at mollis sagittis.Nullam varius erat in interdum ultrices.Nullam id condimentum orci.Integer placerat cursus diam in gravida.Sed blandit lacinia tristique.Nullam aliquam sapien eget sem sagittis, sit amet malesuada risus tristique.Quisque eget erat eros.Nulla vel ultrices turpis.Fusce sed urna justo."
    return (
        <div className= "flex flex-wrap justify-center">
            
            {events.map((event) => {
                return(
                    <div key={event.id}>
                        <div className="max-w-lg rounded overflow-hidden shadow-lg mt-24 ml-12 mr-12 h-4/5">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{event.theme ? event.theme : "Theme unavailble"}</div>
                                <p className="text-gray-700 text-bas overflow-ellipsis overflow-hidden w-96 h-40">
                                    {event.description ? event.description : lorem}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                    {event.startDate ? event.startDate : "No specified Start Date"} - {event.endDate ? event.endDate : "No specified End Date"}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                    {event.startTime ? event.startTime : "No specified Start Date"} - {event.endTime ? event.endTime : "No specified Start Date" }
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{event.code ? event.code : "No code"}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                            </div>
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Event