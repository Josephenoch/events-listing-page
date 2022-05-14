import {ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Head from 'next/head'
import { useState } from 'react'
import Event from "../components/Events"

export default function Home(results) {
  const initialState = results
  const [events, setEvents] = useState(initialState.events)
  return (
    <div className= "px-8 mt-10 flex justify-center">
      <Head>
        <title>Events</title>
        <meta name="description" content="An Events listing page built with Nextjs, Graphql, Apollo and Tailwind CSS" />
      </Head>
      
      <Event events={events} />
    </div>
  )
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri: "https://dev.peddlesoft.com/graphql",
    cache: new InMemoryCache(),
  });

  const {data} = await client.query({
    query: gql`
     query{
        events {
          id
          theme
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

  return{
    props:{
      events: data.events
    }
  }
}