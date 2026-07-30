import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import "../styles/UpcomingEvents.css";

function UpcomingEvents() {

    const [events, setEvents] = useState([]);


    useEffect(() => {

        fetch("http://localhost:5000/api/events")

            .then((response) => response.json())

            .then((data) => {

                setEvents(data.slice(0, 4));

            })

            .catch((error) => {

                console.error(error);

            });


    }, []);



    return (

        <section className="events">


            <h1>Upcoming Events</h1>


            <div className="event-container">


                {events.length > 0 ? (

                    events.map((event) => (

                        <EventCard

                            key={event._id}

                            id={event._id}

                            title={event.title}

                            society={event.society}

                            date={event.date}

                            time={event.time}

                            venue={event.venue}

                            description={event.description}

                            image={event.image}

                        />

                    ))

                ) : (

                    <p>No upcoming events available</p>

                )}



            </div>


        </section>

    );

}


export default UpcomingEvents;