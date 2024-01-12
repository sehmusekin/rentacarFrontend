import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import Homepage from "./pages/Homepage/Homepage";
import CarDetail from "./pages/CarDetail/CarDetail";


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/car/:id" element={<CarDetail />} />
        </Routes>
      </>
=======
import Locations from "./pages/Locations/Locations";
import Review from "./pages/Review/Review";
import Cars from "./pages/Cars/Cars";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/locations" element={<Locations />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
      </Routes>
>>>>>>> 184d8930b81a40c3ec393041ac44ec46f6f2db97
    </div>
  );
}

export default App;
