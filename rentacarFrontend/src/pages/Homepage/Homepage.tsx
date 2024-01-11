import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllCarsModel } from "../../models/GetAllCarsModel";
import CarService from "../../services/CarService";
import CarList from "../../components/car/CarList";

const Homepage = () => {
  const [cars, setCars] = useState<GetAllCarsModel[]>([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    let service: CarService = new CarService();
    service.getAllCars().then((response) => {
      setCars(response.data.cars);
    });
  };

  return (
    <div className="car-list">
      {cars.map((car) => (
        <Link to={`/car/${car.id}`} key={car.id}>
          <CarList car={car} />
        </Link>
      ))}
    </div>
  );
};

export default Homepage;
