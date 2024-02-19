import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const [loggedInUsername, setLoggedInUsername] = useState("");

  interface FormValues {
    username: string;
    password: string;
  }

  const initialValues: FormValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("A username is required.")
      .min(3, "Username must be at least 3 characters long.")
      .max(50, "Username must be at most 50 characters long."),
    password: Yup.string()
      .required("A password is required.")
      .min(8, "Password must be at least 8 characters long."),
  });

  const onSubmit = (values: FormValues) => {
    const { username, password } = values;

    axios
      .post("http://localhost:8080/api/v1/auths/login", {
        username,
        password,
      })
      .then(
        (response) => {
          authContext.setIsAuthenticated(true);
          console.log(response.data.data);
          const token = response.data;
          localStorage.setItem("token", token);
          setLoggedInUsername(username);
          navigate("/");
        },
        (error) => {
          console.log(error.response.data);
        }
      );
  };

  const handleLogout = () => {
    authContext.setIsAuthenticated(false);
    localStorage.removeItem("token");
    setLoggedInUsername("");
    navigate("/login");
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Write your username here "
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="******** "
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex items-start mb-5">
            <Field
              type="checkbox"
              id="remember"
              name="remember"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
