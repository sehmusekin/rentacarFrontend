// CarList.jsx
import React from "react";
import { Car } from "../../models/car/GetAllCarResponses";
import { faCalendarDays, faDroplet, faGasPump } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface CarListProps {
  car: Car;
}

const CarList: React.FC<CarListProps> = ({ car }) => {
  console.log(car);
  return (
    <div className="border p-2 mb-5 rounded-lg ">
      <div>
        <h4>{car.id}</h4>
        <h4 className="font-bold">{car.brandName}</h4>
        <h4 className="font-bold">{car.modelName}</h4>
      </div>

      <div className="flex justify-around">
        <div className="flex items-center">
          <FontAwesomeIcon className="mr-1 text-gray-400" icon={faGasPump} />
          <p className="text-sm text-gray-400">{car.fuelType}</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon className="mr-1  text-gray-400" icon={faDroplet} />
          <p className="text-sm text-gray-400">{car.colorName}</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            className="mr-1  text-gray-400"
            icon={faCalendarDays}
          />
          <p className="text-sm text-gray-400">{car.year}</p>
        </div>
      </div>
    </div>
  );
};

export default CarList;
