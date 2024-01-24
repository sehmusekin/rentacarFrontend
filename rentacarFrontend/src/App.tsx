import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Car from "./pages/Cars/Car";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental" element={<Car />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
