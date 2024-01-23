function Footer() {
  return (
    <div className="bg-white  p-6 w-full">
      <div className="w-3/4 mx-auto flex justify-ar">
        <div className=" basis-1/4">
          <h4 className="text-blue-900 font-extrabold text-3xl">Rent-A-Car</h4>
          <p className="text-gray-500 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
            hic asperiores quis id nam quae molestias pariatur deserunt nihil
            voluptatem.
          </p>
        </div>
        <div className="flex basis-3/4 justify-end gap-12">
          <div>
            <h4 className="font-bold text-xl">About</h4>
            <ul className="space-y-3 text-gray-500 mt-4">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Community</h4>
            <ul className="space-y-3 text-gray-500 mt-4">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Socials</h4>
            <ul className="space-y-3 text-gray-500 mt-4">
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
