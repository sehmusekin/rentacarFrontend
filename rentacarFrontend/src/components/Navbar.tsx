import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white px-1 lg:px-0">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-extrabold text-xl text-blue-900">
              <img
                src="/images/logo/logo.png"
                alt="HTS-Wheels Logo"
                className="h-10 w-15 mr-2"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex font-bold items-center space-x-10">
              <Link to="/">Home</Link>
              <a href="#">Locations</a>
              <a href="#">Services</a>
              <Link to="/contact">Contact</Link>
              <Link to="/cars">Rental Now</Link>
              <div className="flex items-center space-x-3">
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="border bg-gradient-to-r from-blue-300 via-cyan-700 to-blue-900 px-6 py-2 text-white rounded-lg font-bold"
                    >
                      Logout
                    </button>
                    <Link
                      to="/profile"
                      className="border bg-gradient-to-l from-blue-300 via-cyan-700 to-blue-900 px-6 py-2 text-white rounded-lg font-bold"
                    >
                      Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="border bg-gradient-to-r from-blue-300 via-cyan-700 to-blue-900 px-6 py-2 text-white rounded-lg font-bold "
                    >
                      Login
                    </Link>
                    <Link to="/signup">Sign Up</Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="inleni-flex items-center justify-center p-2 rounded-md"></button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleLogout}
                  className="border bg-gradient-to-r from-blue-300 via-cyan-700 to-blue-900 px-6 py-2 text-white rounded-lg font-bold "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="border bg-gradient-to-r from-blue-300 via-cyan-700 to-blue-900 px-6 py-2 text-white rounded-lg font-bold "
                >
                  Login
                </Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
