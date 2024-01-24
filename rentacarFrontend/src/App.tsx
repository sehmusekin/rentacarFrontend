import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cars from "./pages/Cars/Cars";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental" element={<Cars />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
