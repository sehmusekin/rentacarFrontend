import React from "react";
import car from "../../../images/car2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import { faGasPump } from "@fortawesome/free-solid-svg-icons/faGasPump";

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
    <div className="bg-white p-6 w-[322px] h-[345px] rounded-xl">
      <div className="mb-8">
        <h3 className="font-semibold text-lg ">{data.modelName}</h3>
        <p className="text-gray-400">Sport</p>
      </div>

      <img src={car} alt="" />

      <div className="flex  items-center justify-around mt-8">
        <div className="text-sm text-gray-400">
          <FontAwesomeIcon className="mr-1 text-gray-400" icon={faDroplet} />
          {data.colorName}
        </div>
        <div className="text-sm text-gray-400">
          <FontAwesomeIcon className="mr-1 text-gray-400" icon={faCalendar} />
          {data.year}
        </div>
        <div className="text-sm text-gray-400">
          <FontAwesomeIcon className="mr-1 text-gray-400" icon={faGasPump} />
          {data.fuelType}
        </div>
      </div>
      <div className="flex gap-14 justify-center mt-8 items-center">
        <div className="font-bold ">
          ${data.price}/<span className="text-gray-400">day</span>
        </div>

        <button className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-2 px-4 rounded-lg text-white">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarShow;
