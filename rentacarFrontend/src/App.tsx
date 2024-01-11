import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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
    </div>
  );
}

export default App;
