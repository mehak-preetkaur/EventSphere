import "../styles/SocietyCard.css";

function SocietyCard({ name, description }) {

  return (

    <div className="society-card">

      <h2>{name}</h2>

      <p>{description}</p>

    </div>

  );

}

export default SocietyCard;