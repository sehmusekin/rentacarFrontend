import { Route, Routes } from "react-router-dom";
import BrandList from "../pages/BrandList";

const Homepage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BrandList />} />
        <Route path="/brands" element={<BrandList />} />
      </Routes>
    </div>
  );
};

export default Homepage;
