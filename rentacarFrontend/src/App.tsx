import { Route, Routes, RouteProps } from "react-router-dom";
import BrandList from "./pages/BrandList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<BrandList />} />

          <Route path="/brands" element={<BrandList />} />
        </Routes>
      </>
    </div>
  );
}

export default App;