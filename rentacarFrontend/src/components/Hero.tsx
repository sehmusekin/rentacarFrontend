import heroimage1 from "../images/heroimage1.png";
import heroimage2 from "../images/heroimage2.png";

function Hero() {
  return (
    <div className="container mt-8">
      <div className="flex space-x-8">
        <div className="flex-grow bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-6 rounded-lg">
          <h3 className="text-3xl font-semibold text-white w-1/2">
            The Best Platform for Car Rental
          </h3>
          <p className="w-1/2 my-4 text-white">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <img className="mx-auto" src={heroimage1} alt="" />
        </div>
        <div className="flex-grow bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-6 rounded-lg">
          <h3 className="text-3xl font-semibold text-white w-1/2">
            Easy way to rent a car at a low price
          </h3>
          <p className="w-1/2 my-4 text-white">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <img className="mx-auto" src={heroimage2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
