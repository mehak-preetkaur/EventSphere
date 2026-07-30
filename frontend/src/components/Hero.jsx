import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";
import heroImage from "../assets/uni_img.jpg";

function Hero() {

  const navigate = useNavigate();

  return (

    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImage})`
      }}
    >

      <div className="hero-content">

        <h1>Welcome to EventSphere</h1>

        <p>
          Your one-stop platform to explore college events,
          workshops, competitions and cultural activities.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/events")}
          >
            Explore Events
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/login")}
          >
            President Login
          </button>

        </div>

      </div>

    </section>

  );

}

export default Hero;