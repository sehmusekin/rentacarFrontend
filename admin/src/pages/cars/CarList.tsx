// CarList.jsx
import React from "react";
import { Car } from "../../models/car/GetAllCarResponses";
import {
  faCalendarDays,
  faDroplet,
  faGasPump,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

interface CarListProps {
  car: Car;
}

const CarList: React.FC<CarListProps> = ({ car }) => {
  const deleteCarRequests = car.id;
  console.log(deleteCarRequests);
  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:8080/api/v1/cars/delete", {
        data: { carId: deleteCarRequests },
      });
      alert("Araba başarıyla silindi");
    } catch (error) {
      console.error("Araba silinirken bir hata oluştu: ", error);
      alert("Araba silinirken bir hata oluştu. Konsolu kontrol edin.");
    }
  };


  return (
    <div className="border p-2 mb-5 rounded-lg ">
      <div className="space-y-2">
        <h4>ID : {car.id}</h4>
        <h4 className="font-bold">{car.brandName}</h4>
        <h4 className="font-bold">{car.modelName}</h4>
      </div>

      <div className="flex justify-start space-x-10 mt-3">
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

        <button
          onClick={handleDelete}
          className=" ml-auto px-2 py-1 rounded-lg border-2 border-red-700 hover:bg-red-700 duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CarList;
