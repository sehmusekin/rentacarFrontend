function Footer() {
  return (
    <div className="bg-white p-1 lg:p-6 w-full">
      <div className="w-full md:w-3/4 mx-auto flex-col lg:flex lg:flex-row">
        <div className=" md:basis-1/4">
          <h4 className="text-blue-900 font-extrabold text-3xl">Rent-A-Car</h4>
          <p className="text-gray-500 mt-4">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex md:basis-3/4 justify-around lg:justify-end gap-6 lg:gap-12 mt-6 lg:mt-0">
          <div>
            <h4 className="font-bold text-xl">About</h4>
            <ul className="space-y-3 text-gray-500 mt-4 text-sm md:text-base">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Community</h4>
            <ul className="space-y-3 text-gray-500 mt-4 text-sm md:text-base">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Socials</h4>
            <ul className="space-y-3 text-gray-500 mt-4 text-sm md:text-base">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
