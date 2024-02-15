import { RiTaskLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const NagivationMenu = () => {
  return (
    <nav className="flex flex-col gap-2 mt-16">
      <NavLink
        to="/"
        className="flex items-center gap-4 text-gray-400 p-2 rounded-lg hover:text-white hover:bg-sky-900 transition-all transition-duration: 250ms;"
      >
        <div>
          <RxDashboard className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Home</h3>
      </NavLink>
      <NavLink
        to="/cars"
        className="flex items-center gap-4 text-gray-400 p-2 rounded-lg hover:text-white hover:bg-sky-900 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Cars</h3>
      </NavLink>
    </nav>
  );
};

export default NagivationMenu;
