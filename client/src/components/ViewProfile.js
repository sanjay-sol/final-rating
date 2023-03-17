import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const ViewProfile = () => {
  const params = useParams();
  const [rating, setrating] = useState("");
  const [comment, setcomment] = useState("No Advice from me");
  const [likes, setlikes] = useState("No");
  const [giver, setgiver] = useState("");

  const fetchData = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3001/myprofile", {
        headers: {
          "x-token": token,
          // ? content type should be json
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setgiver(response.data.username);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = () => {
    const token = localStorage.getItem("token");

    let review = {
      giver,
      taker: params.id,
      rating,
      comment,
      likes,
    };
    axios
      .post("http://localhost:3001/addreview", review, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav className=" bg-white flex justify-between py-2 pl-2  ">
        <img
          className="h-20 rounded"
          src="https://www.datingscout.co.uk/b6/image/upload/ds/upload/reviews/ENG/hot-or-not/hot-or-not-logo.jpg"
          alt="img"
        />
        <ul className="px-32 py-4 mt-4 flex space-x-12 justify-end ">
          <li className="cursor-pointer font-extrabold hover:text-indigo-900">
            <Link to="/myprofile">My Profile</Link>
          </li>
          <li className="cursor-pointer font-semibold">
            <Link to="/privacy">Privacy</Link>
          </li>
          <li className="cursor-pointer text-red-500 font-extrabold">
            <Link to="/login" onClick={() => localStorage.removeItem("token")} >Logout</Link>
          </li>
        </ul>
      </nav>

      <a
        href="/dashboard"
        className="relative inline-block px-4 py-2 mx-4 mt-4 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-red-500 border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          {" "}
          Back to Dashboard
        </span>
      </a>

      <div className="flex flex-col mt-5 items-center sm:px-5 md:flex-row border-4 tails-selected-element ">
        <div className="w-full md:w-1/2 m-3">
          <a href="#_" className="block">
            <img
              className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96"
              src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg"
              alt="profile"
            />
          </a>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
          <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
            <div className="bg-pink-500  items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>profile</span>
            </div>
            <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
              <a href="#_" className="">
                {params.fullname}
              </a>
            </h1>
            {/* <p className="pt-2 text-sm font-medium"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates velit adipisci molestias, sint natus molestiae exercitationem assumenda sapiente dolores ipsam cupiditate dignissimos repudiandae totam quasi quia nesciunt unde excepturi non. <span className="mx-1">April 23rd, 2021</span> · <span className="mx-1 text-gray-600">5 min. read</span></p> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-screen h-full p-10 lg:p-16 xl:p-24 tails-selected-element bg-violet-200">
        <h4 className="w-full text-3xl font-bold">Give Your Review</h4>
        <div
          className="relative w-full mt-10 space-y-8"
          data-dashlane-rid="d330c60cf66f036f"
          data-form-type="other"
        >
          <div className="relative">
            <label className="font-medium text-gray-900">Out of 10</label>
            <input
              type="number"
              className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 border-2 border-slate-400"
              data-primary="blue-600"
              data-rounded="rounded-lg"
              placeholder="1-10"
              onChange={(e) => setrating(e.target.value)}
              data-dashlane-rid="2dff6b03d761c641"
              data-form-type="other"
            />
          </div>
          <div className="relative">
            <label className="font-medium text-gray-900">Your Advice</label>
            <input
              type="text"
              className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 border-2 border-slate-400"
              data-primary="blue-600"
              data-rounded="rounded-lg"
              placeholder="Your Advice for them.."
              onChange={(e) => setcomment(e.target.value)}
              data-dashlane-rid="2dff6b03d761c641"
              data-form-type="other"
            />
          </div>
          <p>Pick One Option Honestly..</p>
          <div className="block">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded"
                  onClick={() => setlikes("Yes")}
                />
                <span className="ml-2 font-extrabold text-orange-600">Hot </span>
              </label>
            </div>
          </div>
          <div className="block">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="w-6 h-6 rounded" />
                <span className="ml-2 font-extrabold text-blue-600">Not</span>
              </label>
            </div>
          </div>
          <div className="relative">
            {rating <= 10 ? (
              <button
                type="button"
                className='inline-block w-40 px-5 ml-3.5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg'
                onClick={handleSubmit}
              >
                Give Rating
              </button>
            ) : (
              <button
                type="button"
                className='inline-block w-40 px-5 ml-3.5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg '
                disabled
              >
                Rate only for 10 !!!
              </button>
            )}

            {/* <a href="#_" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg">Login</a> */}
          </div>
        </div>
      </div>

      {/* <Link to="/login"><span>Dashbo</span> </Link> */}
    </>
  );
};

ViewProfile.propTypes = propTypes;
ViewProfile.defaultProps = defaultProps;
// #endregion

export default ViewProfile;