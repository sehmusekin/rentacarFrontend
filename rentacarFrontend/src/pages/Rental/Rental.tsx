function Rental() {
  return (
    <div className="flex gap-10 my-10 justify-center">
     
      <div>
        <div className="bg-white w-[631px] h-[600px] p-6 rounded-lg">
          <h4 className="text-lg font-bold">Rental Summary</h4>
          <p className="text-gray-400">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
          <div className="flex gap-10 items-center my-8">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p className="font-bold text-xl">VVV</p>
              <p className="text-gray-700 font-medium">VVV Kilometer</p>
              <p className="text-gray-700 font-medium">V Fuel Type</p>
              <p className="text-gray-700 font-medium">Year</p>
              <p className="text-gray-700 font-medium">WWW</p>
            </div>
          </div>
          <div className="flex justify-between">
            <h6 className="text-gray-400">Subtotal</h6>
            <p className="font-bold">$1.00</p>
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
            <div className="font-bold">$1</div>
          </div>
        </div>

        <div className="bg-white w-[631px] h-[440px] p-6 rounded-lg mt-10">
          <h4 className="text-lg font-bold">Billing Info</h4>
          <p className="text-gray-400">Please enter your billing info</p>
          <div className="w-full p-6 bg-gray-200 h-[310px] rounded-lg mt-7">
            <h4 className="font-bold mb-7">Credit Card</h4>

            <div className="flex">
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">
                  Card Number
                </label>
                <input
                  className="border p-2 rounded-lg w-[256px] h-[48px]"
                  type="text"
                  placeholder="Card Number"
                />
              </div>
              <div className="flex flex-col ml-10">
                <label className="font-semibold" htmlFor="">
                  Expration Date
                </label>
                <input
                  className="border p-2 rounded-lg w-[256px] h-[48px]"
                  type="datetime-local"
                  placeholder="Expration Date"
                />
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">
                  Card Holder
                </label>
                <input
                  className="border p-2 rounded-lg w-[256px] h-[48px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Card Holder"
                />
              </div>
              <div className="flex flex-col ml-10">
                <label className="font-semibold" htmlFor="">
                  CVC
                </label>
                <input
                  className="border p-2 rounded-lg w-[256px] h-[48px]"
                  type="text"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rental;
