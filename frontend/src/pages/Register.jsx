import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Register.css";

function Register() {

    const location = useLocation();
    const eventTitle = location.state?.eventTitle || "Event";

    const [student, setStudent] = useState({
        name: "",
        branch: "",
        year: "",
        roll: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();
             

    console.log("Submitting:", {
        ...student,
        eventTitle
    });


        try {

            const response = await fetch(
                "http://localhost:5000/api/registrations",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...student,
                        eventTitle
                    })
                }
            );

            if (response.ok) {

                alert("Registration Successful!");

                setStudent({
                    name: "",
                    branch: "",
                    year: "",
                    roll: "",
                    phone: "",
                    email: ""
                });

            } else {

                alert("Registration Failed");

            }

        } catch (error) {

            console.error(error);
            alert("Server Error");

        }

    };

    return (

        <>
            <Navbar />

            <div className="register-page">

                <div className="register-box">

                    <h1>Event Registration</h1>

                    <h3>{eventTitle}</h3>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={student.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="branch"
                            placeholder="Branch"
                            value={student.branch}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="year"
                            placeholder="Year"
                            value={student.year}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="roll"
                            placeholder="Roll Number"
                            value={student.roll}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={student.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={student.email}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">
                            Register Now
                        </button>

                    </form>

                </div>

            </div>

        </>

    );

}

export default Register;