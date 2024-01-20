import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Locations from "./pages/Locations/Locations";
import Review from "./pages/Review/Review";
import Cars from "./pages/Cars/Cars";
import CarDetail from "./pages/CarsDetail/CarDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/locations" element={<Locations />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
        <Route path="/car-detail/:id" element={<CarDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
