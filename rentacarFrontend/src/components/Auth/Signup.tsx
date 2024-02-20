import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "./Signup.css";

type Props = {};

interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  gsm: string;
  username: string;
  password: string;
  authorities: string[];
}

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (values: SignupFormValues) => {
    try {
      console.log("Form Values:", values);
      const response = await axios.post(
        "http://localhost:8080/api/v1/auths/register",
        values
      );
      navigate("/login");
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    gsm: Yup.string()
      .matches(/^\d{11}$/, "Invalid GSM number")
      .required("GSM is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
     authorities: Yup.array()
       .of(Yup.string())
     .required("Authorities are required"),
  });

  const initialValues: SignupFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    gsm: "",
    username: "",
    password: "",
    authorities: ["ROLE_ADMIN"],
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
                    console.log("Submitting form", values);
                    handleSignup(values);
                  }}
                  validationSchema={validationSchema}
                >
                  <Form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                      />
                      <ErrorMessage name="firstName">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Surname
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe"
                        
                      />
                       <ErrorMessage name="lastName">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="johndoe@mail.com"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                       <ErrorMessage name="email">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                      
                    </div>
                    <div>
                      <label
                        htmlFor="gsm"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        GSM
                      </label>
                      <Field
                        type="tel"
                        name="gsm"
                        id="gsm"
                        placeholder="05XXXXXXXXX"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                       <ErrorMessage name="gsm">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        placeholder="johndoe"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                       <ErrorMessage name="username">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage name="password">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    {/* <div>
                      <label
                        htmlFor="authorities"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Authorities
                      </label>
                      <Field
                        type="text"
                        name="authorities"
                        id="authorities"
                        placeholder="ROLE_ADMIN"
                        readOnly
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div> */}

                    {/* <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <Field
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div> */}

                    <div className="flex items-start">
                      {/* <div className="flex items-center h-5">
                        <Field
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div> */}
                      {/* <div className="ml-3 text-sm">
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
                      </div> */}
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
                        href="/login"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
                      </a>
                    </p>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Do you have a company?{" "}
                      <a
                        href="/company-signup"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Click here
                      </a>
                    </p>
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
