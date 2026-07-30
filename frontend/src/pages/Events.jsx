import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

function Events() {

const [events, setEvents] = useState([]);
const [editingEvent, setEditingEvent] = useState(null);

const [search, setSearch] = useState("");
const [selectedSociety, setSelectedSociety] = useState("All");

const [editForm, setEditForm] = useState({
 
 
    title: "",
    society: "",
    date: "",
    time: "",
    venue: "",
    description: "",
    image: "",
});

    useEffect(() => {
        fetch("http://localhost:5000/api/events")
            .then((response) => response.json())
            .then((data) => {
                setEvents(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

   const handleDelete = async (id) => {

    try {

        await fetch(`http://localhost:5000/api/events/${id}`, {
            method: "DELETE",
        });

        setEvents(events.filter((event) => event._id !== id));

        alert("Event deleted successfully!");

    } catch(error){

        console.error(error);
        alert("Failed to delete event");

    }

};

   const handleEdit = (event) => {

    setEditingEvent(event);

    setEditForm({
        title: event.title,
        society: event.society,
        date: event.date?.split("T")[0] || event.date,
        time: event.time,
        venue: event.venue,
        description: event.description,
        image: event.image,
    });
};

const handleChange = (e) => {
    setEditForm({
        ...editForm,
        [e.target.name]: e.target.value,
    });
};

const handleUpdate = async () => {

    try {

       const response = await fetch(
`http://localhost:5000/api/events/${editingEvent._id}`,
{

            method: "PUT",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(editForm),

        });

        const updatedEvent = await response.json();

        setEvents(
            events.map((event) =>
                event._id === updatedEvent._id ? updatedEvent : event
            )
        );

        alert("Event Updated Successfully!");

        setEditingEvent(null);

    } catch (error) {

        console.error(error);

        alert("Failed to update event");

    }
};

const societies = [
    "All",
    "Code-X Club",
    "Literary Society",
    "Pheonix Club",
    "Apex Managemental Society",
    "Punjab Sabhyacharak Club",
    "Fine Art Club",
    "Sports",
    "NSS",
    "NCC",
    "ISTE Student Chapter",
    "Music & Dramatics",
    "BioGen Society",
    "Agrizone Society",
    "EDC Club",
    "S4E Club",
    "Ester Society"
];


const filteredEvents = events.filter((event)=>{

    return (

        event.title
        .toLowerCase()
        .includes(search.toLowerCase())

        &&

        (
            selectedSociety === "All"
            ||
            event.society === selectedSociety
        )

    );

});
    return (
        <>
            <Navbar />

            <div className="events">


                <h1>All Events</h1>

                <div style={{
    display:"flex",
    gap:"20px",
    marginBottom:"30px"
}}>


<input

type="text"

placeholder="Search events..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

style={{
padding:"10px",
width:"250px"
}}

/>


<select

value={selectedSociety}

onChange={(e)=>setSelectedSociety(e.target.value)}

style={{
padding:"10px"
}}

>

{societies.map((society)=>(

<option key={society}>
{society}
</option>

))}

</select>


</div>

                {editingEvent && (

<div style={{marginBottom:"30px"}}>

<h2>Edit Event</h2>

<input
type="text"
name="title"
value={editForm.title}
onChange={handleChange}
placeholder="Title"
/>

<br /><br />

<input
type="text"
name="society"
value={editForm.society}
onChange={handleChange}
placeholder="Society"
/>

<br /><br />

<input
type="date"
name="date"
value={editForm.date}
onChange={handleChange}
/>

<br /><br />

<input
type="text"
name="time"
value={editForm.time}
onChange={handleChange}
placeholder="Time"
/>

<br /><br />

<input
type="text"
name="venue"
value={editForm.venue}
onChange={handleChange}
placeholder="Venue"
/>

<br /><br />

<textarea
name="description"
value={editForm.description}
onChange={handleChange}
placeholder="Description"
/>

<br /><br />

<input
type="text"
name="image"
value={editForm.image}
onChange={handleChange}
placeholder="Image URL"
/>

<br /><br />

<button onClick={handleUpdate}>
    Update Event
</button>

</div>

)}

                <div className="event-container">

                    {filteredEvents.map((event) => (

                        <EventCard
                              key={event._id}
                              id={event._id}
                              title={event.title}
                              society={event.society}
                              date={event.date}
                              venue={event.venue}
                              description={event.description}
                              image={event.image}
                              onDelete={handleDelete}
                              onEdit={handleEdit}
                        />

                    ))}

                </div>

            </div>

        </>
    );
}

export default Events;