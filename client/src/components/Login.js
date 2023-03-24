import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Login = () => {
  const [auth, setAuth] = useState(false);
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      email: email1,
      password: password1,
    };
    axios
      .post("http://localhost:3001/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuth(true);
      })
      .catch((err) => {
        // alert(err.response.data);
        toast.error(err.response.data, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };
  if (auth) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <nav className=" bg-white flex justify-between py-2 pl-2 ">
        <img
          className="h-20 rounded"
          src="https://www.datingscout.co.uk/b6/image/upload/ds/upload/reviews/ENG/hot-or-not/hot-or-not-logo.jpg"
          alt="img"
        />
        <ul className="px-32 py-4 mt-4 flex space-x-12 justify-end ">
          <li className="cursor-pointer font-bold ">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link to="/privacy1">Privacy</Link>{" "}
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-start w-screen h-full p-10 lg:p-16 xl:p-24 tails-selected-element">
          <h4 className="w-full text-3xl font-bold">Login </h4>
          <p className="text-lg text-gray-500">
            or, Don't have an Account.??{" "}
            <a
              href="/register"
              className="text-blue-600 underline"
              data-primary="blue-600"
            >
              Register
            </a>
          </p>
          <div
            className="relative w-full mt-10 space-y-8"
            data-dashlane-rid="d330c60cf66f036f"
            data-form-type="other"
          >
            <div className="relative">
              <label className="font-medium text-gray-900">Email<span className="text-xl text-red-600 " > * </span></label>
              <input
                type="email"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setEmail1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Enter Your Email Address"
                data-dashlane-rid="245af15fde166637"
                data-kwimpalastatus="alive"
                data-kwimpalaid="1678577683458-3"
                data-form-type="email"
              />
            </div>
            <div className="relative">
              <label className="font-medium text-gray-900">Password<span className="text-xl text-red-600 " > * </span></label>
              <input
                type="password"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setPassword1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Password"
                data-dashlane-rid="2cc032c75efcb892"
                data-kwimpalastatus="alive"
                data-kwimpalaid="1678577683458-4"
                data-form-type="password"
              />
            </div>
            <div className="relative">
              <button
                type="submit"
                className='inline-block w-40 px-5 ml-3.5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg'
              >
                Login
              </button>
              {/* <a href="#_" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg">Login</a> */}
            </div>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
// #endregion

export default Login;
