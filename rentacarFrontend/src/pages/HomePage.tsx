import BrandSlider from "../components/BrandSlider";
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
    </>
  );
}

export default HomePage;
