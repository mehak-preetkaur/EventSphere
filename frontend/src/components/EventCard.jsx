import { useNavigate } from "react-router-dom";
import "../styles/EventCard.css";

function EventCard(props) {

    const navigate = useNavigate();


    const handleDelete = () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this event?"
        );

        if(confirmDelete){

            props.onDelete(props.id);

        }

    };


    return (

        <div className="event-card">


            {props.image && (

                <img
                    src={props.image}
                    alt={props.title}
                />

            )}



            <h2>
                {props.title}
            </h2>



            <p>
                <strong>Society:</strong> {props.society}
            </p>



            <p>
                <strong>Date:</strong> {props.date}
            </p>



            <p>
                <strong>Time:</strong> {props.time}
            </p>



            <p>
                <strong>Venue:</strong> {props.venue}
            </p>



            <p>
                {props.description}
            </p>




            <button
                className="register-btn"
                onClick={() =>
                    navigate("/register", {
                        state:{
                            eventTitle: props.title
                        }
                    })
                }
            >
                Register
            </button>





            {props.onEdit && (

                <button
                    onClick={() => props.onEdit(props)}
                >
                    Edit
                </button>

            )}






            {props.onDelete && (

                <button
                    onClick={handleDelete}
                >
                    Delete
                </button>

            )}



        </div>

    );

}


export default EventCard;