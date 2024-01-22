import {
  faCarRear,
  faPhoneVolume,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OurServices() {
  return (
    <div className="container bg-gray-900 text-white p-6 rounded-lg">
      <div>
        <h4 className="text-blue-500 font-bold text-2xl">Our Services</h4>
        <div className="flex items-start w-full gap-10 my-12">
          <h3 className="w-1/2 text-3xl font-bold ">
            Our Premier services for your car rental needs
          </h3>
          <p className="w-1/2 text-gray-400 font-semibold">
            We take pride in providing top-notch solutions! Our premier services
            ensure a seamless & simple car rental experience. Offering cars that
            suit your preferences
          </p>
        </div>
        <div className="flex space-x-5 ">
          <div className="flex-grow p-6 rounded-lg bg-gray-800">
            <div>
              <FontAwesomeIcon
                className="h-6 border-8 bg-slate-700 p-4 rounded-full border-slate-900 "
                icon={faCarRear}
              />
            </div>
            <h4 className="font-semibold text-lg mt-8 mb-2">
              Well-Maintained Car
            </h4>
            <p className="text-gray-400 ">
              Enjoy your trip in peace and comfort with our car rental which
              offers a well-maintained fleet, prioritize the health and safety
              of our vehicles
            </p>
          </div>
          <div className="flex-grow p-6 rounded-lg bg-gray-800">
            <div>
              <FontAwesomeIcon
                className="h-6 border-8 bg-slate-700 p-4 rounded-full border-slate-900 "
                icon={faShieldHalved}
              />
            </div>
            <h4 className="font-semibold text-lg mt-8 mb-2">Secure Payments</h4>
            <p className="text-gray-400 ">
              With a safe and reliable payment system, you can continue your
              journey with peace of mind, without worrying about transaction
              security
            </p>
          </div>
          <div className="flex-grow p-6 rounded-lg bg-gray-800">
            <div>
              <FontAwesomeIcon
                className="h-6 border-8 bg-slate-700 p-4 rounded-full border-slate-900 "
                icon={faPhoneVolume}
              />
            </div>
            <h4 className="font-semibold text-lg mt-8 mb-2">7/24 Support</h4>
            <p className="text-gray-400 ">
              We understand that the journey doesn't always run smoothly.
              Therefore, our customer support team is ready to help you 7/24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
