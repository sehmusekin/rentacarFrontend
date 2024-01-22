import BrandSlider from "../components/BrandSlider";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Locations from "../components/Locations";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandSlider />
      <OurServices />
      <Locations />
      <Footer />
    </>
  );
}

export default HomePage;
