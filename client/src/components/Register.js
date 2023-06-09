import React from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from './cloud.json';

// import Alert from "./Alert";
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Register = () => {
  const randomnumber = (Math.random() * 10).toFixed(0)
  const preset_key = "x5orflhb";
  const cloud_name = "dgo3xjjvb";
  const [fullname1, setFullname1] = useState("");
  const [username1, setUsername1] = useState("");
  const [instaId1, setInstaId1] = useState("");
  const [versionid1 , setversionid1] = useState(data[randomnumber].versionid1);
  const [publicid1 , setpublicid1] = useState(data[randomnumber].publicid1);
  const [format1 , setformat1] = useState(data[randomnumber].format);

  // const [profileurl1, setprofileurl1] = useState(`https://res.cloudinary.com/dgo3xjjvb/image/upload/v1679824466/aq9ei6rjax74ifyhy12b.jpg`);

  const [age1, setAge1] = useState("");
  const [email1, setEmail1] = useState("");
  const [value, setvalue] = useState("");
  const [password1, setPassword1] = useState("");
  const [confirmpassword1, setConfirmpassword1] = useState("");
  const [auth , setAuth] = useState(false);
  const [imagename , setimagename] = useState("DROP YOUR IMAGE");


  const getValue = () => {
    var selectedvalue = document.getElementById("mySelect").value;
    setvalue(selectedvalue);



  };

//////////
const handlefile = (e) => {
  const filename = e.target.files[0].name;
  setimagename(filename);
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", preset_key);
  // setloading(true);
  axios
    .post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    )
    .then((res) => setpublicid1(res.data.public_id))
    .then((res) => setversionid1(res.data.verion))
    .then((res) => setformat1(res.data.format))

    
    // .then(() => {
    //   setloading(false);
    // })
    .catch((err) => console.log(err));
}


  // const handleChange = (e) =>{
  //     setdata({...data,[e.target.name]:e.target.value})
  // }



  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      fullname: fullname1,
      username: username1,
      instaId: instaId1,
     versionid: versionid1,
     publicid: publicid1,
     format: format1,
      age: age1,
      email: email1,
      section: value,
      password: password1,
      confirmpassword: confirmpassword1,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}/register`, user)
      .then((res) => {
        // toast(res.data);
        toast.success(res.data, {
          position: "top-center",
          autoClose: 1999,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
       
        if(res.data === "User added Successfully"){
          setAuth(true);
        }
       
        // setAuth(true);
      })
      .catch((err) => {
        // toast(err.response.data);
        toast.warn(err.response.data, {
          position: "top-center",
          autoClose: 1999,
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
    return <Navigate to="/redirects" />;
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
          <li className="cursor-pointer font-bold ">
            <Link to="/privacy1">Privacy</Link>{" "}
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-start w-screen mt-4 bg-slate-300 rounded-xl h-full p-10 lg:p-16 xl:p-24 tails-selected-element">
          <h4 className="w-full text-3xl font-bold">Register</h4>
          <p className="text-lg text-gray-500">
            wait !! , I Already have an Account..!!{" "}
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
              <label className="font-medium text-gray-900">Full Name<span className="text-xl text-red-600 " > * </span> </label>
              <input
                type="text"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setFullname1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Enter Your Full Name"
                data-dashlane-rid="2dff6b03d761c641"
                data-form-type="other"
              />
            </div>
            <div className="relative">
              <label className="font-medium text-gray-900">User Name <span className="text-xl text-red-600 " > * </span></label>
              <input
                type="text"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
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
                Instagram Username 
              </label>
              <input
                type="text"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setInstaId1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Instagram username"
                data-dashlane-rid="2dff6b03d761c641"
                data-form-type="other"
              />
            </div>
            <br />
{/* /////////////////////////////// */}
<label className="font-medium text-gray-900 ">
                Choose Profile Picture (or) We pick a random image for you !!
              </label>
            
<div className="relative">

    <div className="extraOutline p-4  bg-white w-max bg-whtie mt-4 rounded-lg ">
        <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg" >
            <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <div className="input_field flex flex-col w-max mx-auto text-center">
                <label>
                    <input className="text-sm cursor-pointer w-36 hidden" type="file"  onChange={handlefile}  />
                    {imagename === "DROP YOUR IMAGE" ?  
                    <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Upload</div>
                   : <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold  p-1 px-3 hover:bg-indigo-500 cursor-not-allowed " disabled>Uploaded</div> }
                     
                    </label>

                <div className="title text-indigo-500 uppercase">{imagename}</div>
            </div>
        </div>
    </div>
    </div> 
    

{/* ///////////////////////// */}


            <div className="relative">
              <label className="font-medium text-gray-900">Age <span className="text-xl text-red-600 " > * </span></label>
              <input
                type="number"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                onChange={(e) => setAge1(e.target.value)}
                data-rounded="rounded-lg"
                placeholder="Age"
                data-dashlane-rid="2dff6b03d761c641"
                data-form-type="other"
              />
            </div>
            <div className="relative">
              <label className="font-medium text-gray-900">Email <span className="text-xl text-red-600 " > * </span></label>
              <input
                type="email"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
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
            <p className="font-medium text-gray-900">Section <span className="text-xl text-red-600 " > * </span></p>
            <select
              id="mySelect"
              className="border-2 w-44 h-10 bg-white rounded"
              onChange={getValue}
            >
              <option value="CSE">Select</option>

              <option value="CSE">CSE</option>
              <option value="DS">DS</option>
              <option value="AI-ML">AI-ML</option>
              <option value="EEE">EEE</option>
              <option value="MECH">MECH</option>
              <option value="ECE">ECE</option>
              <option value="CIVIL">CIVIL</option>
              <option value="EIE">EIE</option>
              <option value="CS-IT">CSIT</option>
              <option value="CS">CS</option>
              <option value="CS">IT</option>
              <option value="OTHERS">Others</option>
            </select>

            <div className="relative">
              <label className="font-medium text-gray-900">Password <span className="text-xl text-red-600 " > * </span></label>
              <input
                type="password"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
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
                Confirm Password<span className="text-xl text-red-600 " > * </span>
              </label>
              <input
                type="password"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
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
        <ToastContainer />
      </form>
      
    </>
  );
};

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
// #endregion

export default Register;
