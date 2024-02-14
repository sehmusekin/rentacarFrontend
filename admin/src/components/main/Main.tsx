import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="text-white p-8 ">
      <Outlet />
    </div>
  );
};

export default Main;
