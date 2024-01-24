import CarList from "./components/CarList";
import FilterSidebar from "./components/FilterSidebar";

function Cars() {
  return (
    <div className="flex gap-4 p-5">
      <FilterSidebar />
      <CarList />
    </div>
  );
}

export default Cars;
