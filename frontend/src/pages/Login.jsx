import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = (e) => {

        e.preventDefault();

        if(email && password){

            alert("Login Successful!");

            navigate("/dashboard");

        }
        else{

            alert("Please enter email and password");

        }

    };


    return (
           <>
        <Navbar />

        <div className="login-page">


            <div className="login-box">


                <h1>Society Presidents Login</h1>


                <form onSubmit={handleLogin}>


                    <input
                        className="login-input"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />


                    <input
                        className="login-input"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />


                    <button 
                        className="login-btn"
                        type="submit"
                    >
                        Login
                    </button>


                </form>


            </div>


        </div>
        </>
    );

}

export default Login;