// CarList.jsx
import React from "react";
import { Car } from "../../../models/responses/car/GetAllCarResponses";
import heroimage2 from "../../../images/heroImage/heroimage2.png";
interface CarListProps {
  car: Car;
}

const CarList: React.FC<CarListProps> = ({ car }) => {
  return (
    <div className="border">
      <div>
        <h4>{car.modelName}</h4>
        <p>{car.categoryName}</p>
      </div>
      <div>
        <img src={heroimage2} width={280} alt="" />
      </div>
      <div className="flex">
        <div>{car.fuelType}</div>
        <div>{car.colorName}</div>
        <div>{car.kilometer}</div>
      </div>
      <div className="flex">
        <div>{car.price}$</div>
        <button>Rent Now</button>
      </div>
    </div>
  );
};

export default CarList;
