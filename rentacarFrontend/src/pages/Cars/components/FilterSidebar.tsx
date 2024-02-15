import { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService/CategoryService";

export default function FilterSidebar() {
  interface Category {
    id: number;
    name: string;
  }

  const [sliderValue, setSliderValue] = useState(50);
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getAllCategories()
      .then((result) => setCategory(result.data.data));
  }, []);

  const handleSliderChange = (event: any) => {
    setSliderValue(event.target.value);
  };

  return (
    <>
      {category.map((item: Category) => (
        <div key={item.id} className="basis-1/4  text-gray-500 ">
          <div className="basis-1/4  text-gray-500 ">
            <div className="flex flex-wrap md:flex md:flex-col md:flex-nowrap md:space-y-10 bg-white p-5 rounded-lg">
              <div className="basis-1/2 flex flex-col space-y-2">
                <h4 className="text-xs text-gray-400 tracking-wider">TYPE</h4>
                <label>
                  <input className="mr-2" type="checkbox" value="audi" />
                  {item.name}
                </label>
              </div>
              <div className="basis-1/2 flex flex-col space-y-2">
                <h4 className="text-xs text-gray-400 tracking-wider">
                  CAPACİTY
                </h4>
                <label>
                  <input className="mr-2" type="checkbox" value="audi" />2
                  Person
                </label>
              </div>
              <div className="flex basis-1/2 flex-col space-y-2 mt-5 md:mt-0">
                <h4 className="text-xs text-gray-400 tracking-wider">COLOR</h4>
                <label>
                  <input className="mr-2" type="checkbox" />
                  White
                </label>
              </div>
              <div className="flex basis-1/2 flex-col space-y-2 mt-5 md:mt-0">
                <h3 className="text-xs text-gray-400 tracking-wider">FUEL</h3>
                <label>
                  <input className="mr-2" type="checkbox" />
                  Gasoline
                </label>
              </div>
              <div className="flex flex-col mt-5 md:mt-5">
                <h3 className=" text-xs text-gray-400 tracking-wider">PRICE</h3>

                <label className=" flex flex-col">
                  <input
                    type="range"
                    min="90"
                    max="600"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="my-2"
                  />
                  <p className="text-sm">PRICE {sliderValue}$</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
