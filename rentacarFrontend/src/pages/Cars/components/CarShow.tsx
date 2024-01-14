import React from "react";
import car from "../../../images/car2.png";

interface CarShowProps {
  data: {
    id: number;
    price: number;
    plate: string;
    kilometer: number;
    year: number;
    modelName: string | null;
    colorName: string | null;
    fuelType: string | null;
  };
}

const CarShow: React.FC<CarShowProps> = ({ data }) => {
  // JSX öğesi döndür
  return (
    <div className=" mb-4">
      <div>
        <h3>{data.modelName}</h3>
        <p>Sport</p>
      </div>

      <img src={car} alt="" />

      <div className="flex gap-3">
        <div>{data.colorName}</div>
        <div>{data.year}</div>
        <div>{data.fuelType}</div>
      </div>
      <div>{data.price}TL/GÜNLÜK</div>
    </div>
  );
};

export default CarShow;
