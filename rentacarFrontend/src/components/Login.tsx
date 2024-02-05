import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is mandatory.")
      .min(3, "Username must be at least 3 characters.")
      .max(50, "Username must be at most 50 characters."),
    password: Yup.string()
      .required("Password is mandatory.")
      .min(8, "Password must be at least 8 characters."),
  });

  const onSubmit = (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const isAuthenticated = true;

    // Local Storage'a kaydet
    localStorage.setItem("isAuthenticated", String(isAuthenticated));

    // Context üzerinden durumu güncelle
    authContext.setIsAuthenticated(isAuthenticated);

    // Form submit işlemleri burada yapılabilir

    setSubmitting(false);
    navigate("/");
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
              placeholder="your username"
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
