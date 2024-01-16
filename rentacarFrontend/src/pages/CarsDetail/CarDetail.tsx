import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarService from "../../services/CarService";
import car from "../../images/car2.png";

interface CarDetailData {
  id: number;
  price: number;
  plate: string;
  kilometer: number;
  year: number;
  category: string;
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
    <div className="flex gap-5 justify-center">
      <div className="bg-white w-[631px] h-[360px] p-6 rounded-lg">
        <h4 className="text-lg font-bold">Billing Info</h4>
        <p className="text-gray-400 mt-1 mb-5">
          Please enter your billing info
        </p>
        <div>
          <div className="flex">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="">
                Name
              </label>
              <input
                className="border rounded-lg w-[272px] h-[48px]"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col ml-10">
              <label className="font-semibold" htmlFor="">
                Adress
              </label>
              <input
                className="border rounded-lg w-[272px] h-[48px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex mt-10">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="">
                Phone
              </label>
              <input
                className="border rounded-lg w-[272px] h-[48px]"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col ml-10">
              <label className="font-semibold" htmlFor="">
                Town/City
              </label>
              <input
                className="border rounded-lg w-[272px] h-[48px]"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[631px]  p-6 rounded-lg">
        <h4 className="text-lg font-bold">Rental Summary</h4>
        <p className="text-gray-400">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
        <div className="flex gap-10 items-center my-8">
          <div>
            <img src={car} alt="" />
          </div>
          <div>
            <p className="font-bold text-xl">{carDetail?.modelName}</p>
            <p className="text-gray-700 font-medium">
              {carDetail?.kilometer} Kilometer
            </p>
            <p className="text-gray-700 font-medium">
              {carDetail?.fuelType} Fuel Type
            </p>
            <p className="text-gray-700 font-medium">{carDetail?.year} Year</p>
            <p className="text-gray-700 font-medium">{carDetail?.colorName}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <h6 className="text-gray-400">Subtotal</h6>
          <p className="font-bold">${carDetail?.price}.00</p>
        </div>
        <div className="flex justify-between">
          <h6 className="text-gray-400">Tax</h6>
          <p className="font-bold">0</p>
        </div>
        <hr className="my-6" />
        <div className="w-full mt-6">
          <input
            className="border w-full h-[48px] p-2 rounded-lg"
            type="text"
            placeholder="Apply Promo code"
          />
          <button className="border font-bold p-2 rounded-lg mt-2">
            Apply now
          </button>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div>
            <h4 className="font-bold text-base">Total Rental Price</h4>
            <p className="text-gray-400">Overall price rental</p>
          </div>
          <div className="font-bold">${carDetail?.price}</div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
