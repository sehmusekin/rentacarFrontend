import { GetAllCarsModel } from "../../models/GetAllCarsModel";
import { useDispatch } from "react-redux";

type Props = {
  car: GetAllCarsModel;
};

const CarList = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">
        {props.car.modelName}
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {/* Diğer içerikleri buraya ekleyin */}
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src={props.car.plate}
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  {props.car.modelName}
                </h2>
                <p className="mt-1 text-xs text-gray-700">{`${props.car.colorName}EU - ${props.car.fuelType}US`}</p>
              </div>
              {/* Diğer içerikleri buraya ekleyin */}
            </div>
          </div>
          {/* Diğer ürünlerin listelendiği kısım buraya ekleyin */}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          {/* Diğer içerikleri buraya ekleyin */}
        </div>
      </div>
    </div>
  );
};

export default CarList;
