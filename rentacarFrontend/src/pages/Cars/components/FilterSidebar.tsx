import { useState } from "react";

function FilterSidebar() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event: any) => {
    setSliderValue(event.target.value);
  };
  return (
    <div className="basis-1/4  text-gray-500 ">
      <div className="flex flex-wrap md:flex md:flex-col md:flex-nowrap md:space-y-10 bg-white p-5 rounded-lg">
        <div className="basis-1/2 flex flex-col space-y-2">
          <h4 className="text-xs text-gray-400 tracking-wider">TYPE</h4>
          <label>
            <input className="mr-2" type="checkbox" value="audi" />
            SPORT
          </label>
          <label>
            <input className="mr-2" type="checkbox" value="audi" />
            SUV
          </label>
          <label>
            <input className="mr-2" type="checkbox" value="audi" />
            MPV
          </label>
          <label>
            <input className="mr-2" type="checkbox" value="audi" />
            Sedan
          </label>
          <label>
            <input className="mr-2" type="checkbox" value="audi" />
            Coupe
          </label>
          <label>
            <input className="mr-2" type="checkbox" value="audi" />
            Hatchback
          </label>
        </div>
        <div className="basis-1/2 flex flex-col space-y-2">
          <h4 className="text-xs text-gray-400 tracking-wider">CAPACİTY</h4>
          <label>
            <input className="mr-2" type="checkbox" value="audi" />2 Person
          </label>
          <label>
            <input className="mr-2" type="checkbox" value="audi" />4 Person
          </label>
          <label>
            <input className="mr-2" type="checkbox" value="audi" />6 Person
          </label>
        </div>
        <div className="flex basis-1/2 flex-col space-y-2 mt-5 md:mt-0">
          <h4 className="text-xs text-gray-400 tracking-wider">COLOR</h4>
          <label>
            <input className="mr-2" type="checkbox" />
            White
          </label>
          <label>
            <input className="mr-2" type="checkbox" />
            Black
          </label>
          <label>
            <input className="mr-2" type="checkbox" />
            Red
          </label>
          <label>
            <input className="mr-2" type="checkbox" />
            Gray
          </label>
        </div>
        <div className="flex basis-1/2 flex-col space-y-2 mt-5 md:mt-0">
          <h3 className="text-xs text-gray-400 tracking-wider">FUEL</h3>
          <label>
            <input className="mr-2" type="checkbox" />
            Gasoline
          </label>
          <label>
            <input className="mr-2" type="checkbox" />
            Diesel
          </label>
          <label>
            <input className="mr-2" type="checkbox" />
            LPG
          </label>
          <label>
            <input className="mr-2" type="checkbox" />
            Electricity
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
  );
}

export default FilterSidebar;
