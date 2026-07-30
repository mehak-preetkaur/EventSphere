import Navbar from "../components/Navbar";
import { useState } from "react";
import "../styles/AddEvent.css";

function AddEvent() {

  const [event, setEvent] = useState({
    title: "",
    society: "",
    date: "",
    time: "",
    venue: "",
    description: "",
    image: ""
  });


  const handleChange = (e) => {

    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await fetch(
        "http://localhost:5000/api/events",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(event)
        }
      );


      const data = await response.json();

      console.log(data);


      if(response.ok){

        alert("Event Added Successfully!");

        setEvent({
          title: "",
          society: "",
          date: "",
          time: "",
          venue: "",
          description: "",
          image: ""
        });


        window.location.href="/events";


      }
      else{

        alert("Failed to add event");

      }


    } catch(error){

      console.error(error);

      alert("Something went wrong!");

    }

  };


  return (
     <>
        <Navbar />
    <div className="add-event-page">

      <div className="add-event-container">

<h1>Add Event</h1>


<form 
className="add-event-form"
onSubmit={handleSubmit}
>


        <input
          type="text"
          name="title"
          placeholder="Title"
          value={event.title}
          onChange={handleChange}
        />

        <br/><br/>


        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
        />

        <br/><br/>

        <input
  type="time"
  name="time"
  value={event.time}
  onChange={handleChange}
/>

<br/><br/>


      <select
  name="society"
  value={event.society}
  onChange={handleChange}
>

  <option value="">
    Select Society
  </option>

  <option value="Code-X Club">
    Code-X Club
  </option>

  <option value="Literary Society">
    Literary Society
  </option>

  <option value="Pheonix Club">
    Pheonix Club
  </option>

  <option value="Apex Managemental Society">
    Apex Managemental Society
  </option>

  <option value="Punjab Sabhyacharak Club">
    Punjab Sabhyacharak Club
  </option>

  <option value="Fine Art Club">
    Fine Art Club
  </option>

  <option value="Sports">
    Sports
  </option>

  <option value="NSS">
    NSS
  </option>

  <option value="NCC">
    NCC
  </option>

  <option value="ISTE Student Chapter">
    ISTE Student Chapter
  </option>

  <option value="Music & Dramatics">
    Music & Dramatics
  </option>

  <option value="BioGen Society">
    BioGen Society
  </option>

  <option value="Agrizone Society">
    Agrizone Society
  </option>

  <option value="EDC Club">
    EDC Club
  </option>

  <option value="S4E Club">
    S4E Club
  </option>

  <option value="Ester Society">
    Ester Society
  </option>

</select>

        <br/><br/>


        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={event.venue}
          onChange={handleChange}
        />

        <br/><br/>


        <textarea
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
        />


        <br/><br/>


        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={event.image}
          onChange={handleChange}
        />


        <br/><br/>


        <button type="submit">
          Add Event
        </button>


      </form>

    </div>

  </div>
</>

  );

}


export default AddEvent;