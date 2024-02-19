import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { object } from "yup";
import './Signup.css';

type Props = {};

const Signup = (props: Props) => {

  const navigate = useNavigate();

  const handleSignup = () => {
    axios
      .post("http://localhost:8080/api/v1/individualCustomers/add")
      .then(
        (response) => {
          navigate("/login");
        },
        (error) => {
          console.log(error.response.data);
        }
      );
  };

  const initialValues = {
    nationalityId: "",
    firstName: "",
    lastName: "",
    email: "",
    gsm: "",
    username: "",
    password: "",
    authorities: "ROLE_CUSTOMER",
    customerType: "ROLE_INDIVIDUAL",
  };

  return (
    <div className="signup-container">
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              HTS Wheels
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
                </h1>
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values) => {
                    handleSignup();
                  }}
                  validationSchema={object({
                  })}
                >
                  <Form className="space-y-4 md:space-y-6" action="#">
                    <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nationality ID
                        </label>
                        <input
                          type="nationalityId"
                          name="nationalityId"
                          id="nationalityId"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="12345678912"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="firstName"
                          name="firstName"
                          id="firstName"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Surname
                        </label>
                        <input
                          type="lastName"
                          name="lastName"
                          id="lastName"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="johndoe@mail.com"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="gsm"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          GSM
                        </label>
                        <input
                          type="gsm"
                          name="gsm"
                          id="gsm"
                          placeholder="05XXXXXXXXX"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="username"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Username
                        </label>
                        <input
                          type="username"
                          name="username"
                          id="username"
                          placeholder="johndoe"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="authorities"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Authorities
                        </label>
                        <input
                          type="authorities"
                          name="authorities"
                          id="authorities"
                          placeholder="ROLE_ADMIN"
                          readOnly 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="authorities"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Customer Type
                        </label>
                        <input
                          type="customerType"
                          name="customerType"
                          id="customerType"
                          placeholder="ROLE_INDIVIDUAL"
                          readOnly 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      {/* <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div> */}

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            aria-describedby="terms"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="terms"
                            className="font-light text-gray-500 dark:text-gray-300"
                          >
                            I accept the{" "}
                            <a
                              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                              href="#"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Create an account
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?{" "}
                        <a
                          href="#"
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Login here
                        </a>
                      </p>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Are you a corporate customer?{" "}
                        <a
                          href="#"
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Click here
                        </a>
                      </p>
                    </form>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
