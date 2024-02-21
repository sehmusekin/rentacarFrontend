import { useState, useEffect } from "react";
import { Car } from "../../models/car/GetAllCarResponses";
import CarService from "../../services/CarService/CarService";
import CarList from "./CarList";

function Cars() {
  const [cars, setCars] = useState<Car[]>([]);
  const fetchCars = async () => {
    try {
      const carService = new CarService();
      const result = await carService
        .getAllCars()
        .then((result: any) => result.data.data);
      setCars(result);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className=" w-1/2 gap-10 mx-auto">
      {cars.map((car, index) => (
        <CarList car={car} key={index} />
      ))}
    </div>
  );
}

export default Cars;
