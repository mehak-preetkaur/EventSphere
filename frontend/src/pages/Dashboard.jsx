import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
const [eventCount, setEventCount] = useState(0);


useEffect(()=>{

fetch("http://localhost:5000/api/events")

.then(res=>res.json())

.then(data=>{

setEventCount(data.length);

})

.catch(err=>console.log(err));


},[]);
  return (
     <>
        <Navbar />
    <div style={{
      padding: "40px"
    }}>


      <h1>President Dashboard</h1>

      <p>
        Welcome, Society President! Manage your college events here.
      </p>


      <div style={{
        display:"flex",
        gap:"20px",
        marginTop:"30px",
        flexWrap:"wrap"
      }}>


        <div style={{
          padding:"25px",
          border:"1px solid #ddd",
          borderRadius:"10px",
          width:"200px"
        }}>

          <h2>Events</h2>

<p>
Total Events: {eventCount}
</p>

          <Link to="/events">
            <button>
              View Events
            </button>
          </Link>

        </div>



        <div style={{
          padding:"25px",
          border:"1px solid #ddd",
          borderRadius:"10px",
          width:"200px"
        }}>

          <h2>Add Event</h2>

          <p>
            Create a new college event
          </p>


          <Link to="/add-event">

            <button>
              Add Event
            </button>

          </Link>

        </div>




        <div style={{
          padding:"25px",
          border:"1px solid #ddd",
          borderRadius:"10px",
          width:"200px"
        }}>

          <h2>Society</h2>

          <p>
            Manage society details
          </p>


          <button>
            Manage
          </button>

        </div>


      </div>


    </div>
    </>
  );

}


export default Dashboard;