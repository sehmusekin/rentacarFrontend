import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cars from "./pages/Cars/Cars";
import CarDetails from "./pages/CarDetails/CarDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cardetail/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
