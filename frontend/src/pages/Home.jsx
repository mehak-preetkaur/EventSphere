import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import UpcomingEvents from "../components/UpcomingEvents";
import Societies from "../components/Societies";
import Footer from "../components/Footer";


function Home() {

  return (
    <div className="home-page">

      <Navbar />

      <Hero />

      <Stats />

      <UpcomingEvents />

      <Societies />

      <Footer />
    </div>
  );

}

export default Home;