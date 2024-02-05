import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const handleLogin = () => {
    navigate("/login");
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <>
      <nav className="bg-white px-1 lg:px-0 ">
        <div className="container">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center ">
              <img
                src="/images/logo/logo.png"
                alt="HTS-Wheels Logo"
                className="h-10 w-15 mr-2"
              />
              <Link to="/" className="font-extrabold text-xl text-blue-900">
                
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
                  {isLogin ? (
                    <button
                      className="border bg-gradient-to-r from-blue-300 via-cyan-700 to-blue-900 px-6 py-2 text-white rounded-lg font-bold "
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      className="border bg-gradient-to-r from-blue-300 via-cyan-700 to-blue-900 px-6 py-2 text-white rounded-lg font-bold "
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  )}
                  {!isLogin && <button className="font-bold">Sign Up</button>}
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleNavbar}
                className="inleni-flex items-center justify-center p-2 rounded-md"
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex items-center space-x-3">
                {isLogin ? (
                  <button
                    className="border bg-gradient-to-r from-blue-300 via-cyan-700 to-blue-900 px-6 py-2 text-white rounded-lg font-bold "
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="border bg-gradient-to-r from-blue-300 via-cyan-700 to-blue-900 px-6 py-2 text-white rounded-lg font-bold "
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                )}
                <button className="font-bold">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
