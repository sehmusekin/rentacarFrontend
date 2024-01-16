import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarService from "../../services/CarService";

interface CarDetailData {
  id: number;
  price: number;
  plate: string;
  kilometer: number;
  year: number;
  modelName: string | null;
  colorName: string | null;
  fuelType: string | null;
}

function CarDetail() {
  const [carDetail, setCarDetail] = useState<CarDetailData | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchDetails = async () => {
      if (id) {
        try {
          let service: CarService = new CarService();
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
    <div>
      {carDetail ? (
        <div>{carDetail.modelName}</div>
      ) : (
        // Diğer özelliklere göre JSX'i güncelleyin...
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CarDetail;
