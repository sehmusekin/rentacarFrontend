import { useEffect, useState } from "react";
import CarService from "../../services/CarService";
import CarShow from "./components/CarShow";
interface Car {
  id: number;
  price: number;
  plate: string;
  kilometer: number;
  year: number;
  modelName: string | null;
  colorName: string | null;
  fuelType: string | null;
}

function Cars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    let carService = new CarService();
    carService.getAllCars().then((result) => {
      setCars(result.data.data);
    });
  }, []);

  return (
    <div>
      {cars.map((car) => (
        <CarShow key={car.id} data={car} />
      ))}
    </div>
  );
}

export default Cars;
