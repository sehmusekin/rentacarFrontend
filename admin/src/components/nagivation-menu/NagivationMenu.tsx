import { AiOutlineProject } from "react-icons/ai";
import { RiSettings5Line, RiTaskLine } from "react-icons/ri";
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
        to="/tasks"
        className="flex items-center gap-4 text-gray-400 p-2 rounded-lg hover:text-white hover:bg-sky-900 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Tasks</h3>
      </NavLink>
      <NavLink
        to="/projects"
        className="flex items-center gap-4 text-gray-400 p-2 rounded-lg hover:text-white hover:bg-sky-900 transition-all transition-duration: 250ms;"
      >
        <div>
          <AiOutlineProject className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Projects</h3>
      </NavLink>
      <NavLink
        to="/settings"
        className="flex items-center gap-4 text-gray-400 p-2 rounded-lg hover:text-white hover:bg-sky-900 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiSettings5Line className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Settings</h3>
      </NavLink>
    </nav>
  );
};

export default NagivationMenu;
