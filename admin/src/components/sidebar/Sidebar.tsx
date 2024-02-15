import NagivationMenu from "../nagivation-menu/NagivationMenu";

const Sidebar = () => {
  return (
    <div className=" gap-4 w-1/5 p-7 text-white h-screen border-r border-gray-500">
      <NagivationMenu />
    </div>
  );
};

export default Sidebar;
