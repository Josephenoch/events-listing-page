import {useRouter} from 'next/router'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import "tailwindcss/tailwind.css"
import Head from 'next/head'
import Link from "next/Link"
const event= ({events}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    var {id} = router.query
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante ut suscipit scelerisque. Nam eget massa vel tortor eleifend posuere eget quis eros. Morbi ornare vitae nibh quis interdum. Nam lobortis molestie augue ac ornare. Donec rutrum augue eget purus pellentesque, et facilisis dui iaculis. Nulla pretium scelerisque porta. Cras pretium sem sed porttitor consequat. In condimentum sem id sem commodo aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque ac mauris a quam commodo sodales sit amet et ligula.Vestibulum vitae purus eu felis viverra pellentesque.Morbi vitae varius massa.Sed iaculis mi justo, id pretium nunc tincidunt quis.Donec neque magna, consequat ut egestas sit amet, fermentum eu dolor.Nam convallis lacus at mollis sagittis.Nullam varius erat in interdum ultrices.Nullam id condimentum orci.Integer placerat cursus diam in gravida.Sed blandit lacinia tristique.Nullam aliquam sapien eget sem sagittis, sit amet malesuada risus tristique.Quisque eget erat eros.Nulla vel ultrices turpis.Fusce sed urna justo."
    for (let i=0; i<events.length; i++){
        if (events[i].id == id){
            const event=events[i].id
            break
        }
    }

    return (

        <div>
            <Head>
                <title>{event.theme ? event.theme : "Theme Unavailable"}</title>
                <meta name="description" content={event.name} />
            </Head>
            <div className="max-w-lg justify-center rounded overflow-hidden shadow-lg mt-24 ml-12 mr-12 h-4/5 w-5/5">
                <div className="px-6 py-4 bg-gray-200">
                    <div className="font-bold text-xl mb-2">{event.theme ? event.theme : "Theme unavailble"}  <p className="text-sm text-gray-700  tracking-wide font-semibold mt-2">
                        Meeting Name: {event.name ? event.name: "No specified Meeting Name"}
                    </p></div>
                    <p className="text-gray-700 text-bas w-5/5">
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
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Code: {event.code ? event.code : "No code"}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Location: {event.venue ? event.venue : "Unspecified Location"}</span>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"><Link href="/">Go back</Link></span>
                </div>
            </div>
        </div>
    )
}
export const getServerSideProps = async(context) => {
    const client = new ApolloClient({
        uri: "https://dev.peddlesoft.com/graphql",
        cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: gql`
        {
            events{
                id
                theme
                name
                description
                venue
                code
                startDate
                startTime
                endDate
                endTime
            }
        }`,
    })

    return {
        props: {
            events: data.events
        }
    }
}

export default event