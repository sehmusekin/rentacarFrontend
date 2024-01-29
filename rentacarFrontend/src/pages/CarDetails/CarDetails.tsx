import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarService from "../../services/CarService/CarService";
import { Car } from "../../models/responses/car/GetAllCarResponses";
import heroimage from "../../images/heroImage/heroimage1.png";
function CarDetail() {
  const [carDetail, setCarDetail] = useState<Car>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchDetails = async () => {
      if (id) {
        try {
          let service = new CarService();
          let response = await service.getByIdCar(parseInt(id));
          setCarDetail(response.data.data);
        } catch (error) {
          console.error("Error fetching details:", error);
        }
      }
    };

    fetchDetails();
  }, []);
  return (
    <div className="container bg-red-300 flex justify-center space-x-5 my-10">
      <div className="basis-1/2 bg-green-600 rounded-lg">
        <div className=" space-y-6 p-6">
          <h3 className="font-bold text-white text-3xl w-1/2">
            Sports car with the best design and acceleration
          </h3>
          <p className="text-white text-lg font-semibold">
            Safety and comfort while driving a futuristic and elegant sports car
          </p>

          <img src={heroimage} alt="" />
        </div>
      </div>
      <div className="basis-1/2 bg-slate-600">{carDetail?.fuelType}</div>
    </div>
  );
}

export default CarDetail;
