import { useEffect, useState } from "react";
import CarList from "./components/CarList";
import FilterSidebar from "./components/FilterSidebar";
import { Car } from "../../models/responses/car/GetAllCarResponses";
import CarService from "../../services/CarService/CarService";

function Cars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    let carService = new CarService();
    carService.getAllCars().then((result) => {
      setCars(result.data.data);
    });
  }, []);
  return (
    <div className="flex gap-4 p-5">
      <FilterSidebar />
      <div className="basis-3/4">
        <div className="flex flex-wrap justify-between bg-red-600">
          {cars.map((car) => (
            <CarList car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cars;
