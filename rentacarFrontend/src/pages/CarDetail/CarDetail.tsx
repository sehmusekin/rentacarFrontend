import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllCarsModel } from "../../models/GetAllCarsModel";
import CarService from "../../services/CarService";

const CarDetail = () => {
  const params = useParams<{ id: string }>();
  const [car, setCar] = useState<GetAllCarsModel | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchDetails(params.id);
    }
  }, [params.id]);

  const fetchDetails = async (id: string) => {
    let service: CarService = new CarService();
    let response = await service.getByIdCar(parseInt(id));
    setCar(response.data); // Assuming your response data contains detailed car information
  };

  return (
    <div>
      {car && (
        <div>
          <h2>{car.modelName}</h2>
          {/* Display other details of the car */}
        </div>
      )}
    </div>
  );
};

export default CarDetail;
