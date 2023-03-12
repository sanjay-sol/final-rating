import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Register = () => {
  const [fullname1, setFullname1] = useState("");
  const [username1, setUsername1] = useState("");
  const [instaId1, setInstaId1] = useState("");
  const [age1, setAge1] = useState("");
  const [email1, setEmail1] = useState("");
  const [value, setvalue] = useState("");
  const [password1, setPassword1] = useState("");
  const [confirmpassword1, setConfirmpassword1] = useState("");

  const getValue = () => {
    var selectedvalue = document.getElementById("mySelect").value;
    setvalue(selectedvalue);
  };
  // const handleChange = (e) =>{
  //     setdata({...data,[e.target.name]:e.target.value})
  // }
  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      fullname: fullname1,
      username: username1,
      instaId: instaId1,
      age: age1,
      email: email1,
      section: value,
      password: password1,
      confirmpassword: confirmpassword1,
    };
    axios
      .post("http://localhost:3001/register", user)
      .then((res) => {
        alert(res.data);
        // setAuth(true);
      })
      .catch((err) => {
        alert(err.response.data);
      });
    //     axios.post('http://localhost:3001/register',user).then((res) => {
    //       alert(res.data);
    //       // setAuth(true);
    //   }).catch((err)=>{
    //     alert(err.response.data);
    //   })
  };
  return (
    <>
      <nav className=" bg-white flex justify-between py-2 pl-2 ">
        <img
          className="h-20 rounded"
          src="https://www.datingscout.co.uk/b6/image/upload/ds/upload/reviews/ENG/hot-or-not/hot-or-not-logo.jpg"
          alt="img"
        />
        <ul className="px-32 py-4 mt-4 flex space-x-12 justify-end ">
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/privacy1">Privacy</Link>{" "}
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-start w-screen h-full p-10 lg:p-16 xl:p-24 tails-selected-element">
          <h4 className="w-full text-3xl font-bold">Register</h4>
          <p className="text-lg text-gray-500">
            or, Already have an Account.?{" "}
            <a
              href="/login"
              className="text-blue-600 underline"
              data-primary="blue-600"
            >
              Login
            </a>
          </p>
          <div
            className="relative w-full mt-10 space-y-8"
            data-dashlane-rid="d330c60cf66f036f"
            data-form-type="other"
          >
            <div className="relative">
              <label className="font-medium text-gray-900">Full Name</label>
              <input
                type="text"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setFullname1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Enter Your Full Name"
                data-dashlane-rid="2dff6b03d761c641"
                data-form-type="other"
              />
            </div>
            <div className="relative">
              <label className="font-medium text-gray-900">User Name</label>
              <input
                type="text"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setUsername1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Pick a Good UserName.."
                data-dashlane-rid="2dff6b03d761c641"
                data-form-type="other"
              />
            </div>
            <div className="relative">
              <label className="font-medium text-gray-900">
                Instagram Username (optional)
              </label>
              <input
                type="text"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setInstaId1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Instagram username"
                data-dashlane-rid="2dff6b03d761c641"
                data-form-type="other"
              />
            </div>
            <div className="relative">
              <label className="font-medium text-gray-900">Age</label>
              <input
                type="number"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setAge1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Age"
                data-dashlane-rid="2dff6b03d761c641"
                data-form-type="other"
              />
            </div>
            <div className="relative">
              <label className="font-medium text-gray-900">Email</label>
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
            <p className="font-medium text-gray-900">Section</p>
            <select
              id="mySelect"
              className="border-2 w-16 h-9 rounded"
              onChange={getValue}
            >
              <option value="CSE">CSE</option>
              <option value="DS">DS</option>
              <option value="AI-ML">AI-ML</option>
              <option value="EEE">EEE</option>
              <option value="MECH">MECH</option>
              <option value="ECE">ECE</option>
              <option value="CIVIL">CIVIL</option>
              <option value="EIE">EIE</option>
              <option value="CS-IT">CS-IT</option>
              <option value="CS">CS</option>
              <option value="OTHERS">Others</option>
            </select>

            <div className="relative">
              <label className="font-medium text-gray-900">Password</label>
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
              <label className="font-medium text-gray-900">
                Confirm Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setConfirmpassword1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Confirm Password"
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
                Register
              </button>
              {/* <a href="#_" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg">Login</a> */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
// #endregion

export default Register;
