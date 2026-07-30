import SocietyCard from "./SocietyCard";
import "../styles/Societies.css";

function Societies() {

  const societies = [

    {
      id:1,
      name:"Code-X Club",
      description:"Organizes coding competitions, hackathons and technical workshops."
    },

    {
      id:2,
      name:"Literary Society",
      description:"Conducts debates, poetry, writing competitions and literary events."
    },

    {
      id:3,
      name:"Pheonix Club",
      description:"Provides a platform for students to showcase their talents."
    },

    {
      id:4,
      name:"Apex Managemental Society",
      description:"Organizes management activities, leadership events and seminars."
    },

    {
      id:5,
      name:"Punjab Sabhyacharak Club",
      description:"Promotes Punjabi culture, traditions and cultural activities."
    },

    {
      id:6,
      name:"Fine Art Club",
      description:"Encourages creativity through painting, designing and artwork."
    },

    {
      id:7,
      name:"Sports",
      description:"Organizes sports competitions and athletic activities."
    },

    {
      id:8,
      name:"NSS",
      description:"Social service, awareness drives and volunteer programs."
    },

    {
      id:9,
      name:"NCC",
      description:"Focuses on discipline, leadership and national service activities."
    },

    {
      id:10,
      name:"ISTE Student Chapter",
      description:"Conducts technical seminars, workshops and innovation events."
    },

    {
      id:11,
      name:"Music & Dramatics",
      description:"Organizes music performances, drama and cultural festivals."
    },

    {
      id:12,
      name:"BioGen Society",
      description:"Promotes biotechnology activities and scientific learning."
    },

    {
      id:13,
      name:"Agrizone Society",
      description:"Focuses on agriculture, environment and related activities."
    },

    {
      id:14,
      name:"EDC Club",
      description:"Encourages entrepreneurship and startup ideas among students."
    },

    {
      id:15,
      name:"S4E Club",
      description:"Organizes skill development and educational activities."
    },

    {
      id:16,
      name:"Ester Society",
      description:"Conducts academic and creative student activities."
    }

  ];


  return (

    <section className="societies">

      <h1>College Societies</h1>

      <div className="society-container">

        {societies.map((society)=>(

          <SocietyCard

            key={society.id}
            name={society.name}
            description={society.description}

          />

        ))}

      </div>

    </section>

  );

}

export default Societies;