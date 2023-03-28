import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const MyProfile = () => {
  const [data, setdata] = useState(null);
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/myprofile`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setdata(res.data));
    axios
      .get(`${process.env.REACT_APP_API_KEY}/myreviews`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setReview(res.data));
  }, []);
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  //https://res.cloudinary.com/dgo3xjjvb/image/upload/v1679824466/aq9ei6rjax74ifyhy12b.jpg
  const sum = review
    .map((profile) => profile.rating)
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
  const revlen = review.length;
  const avgrev = sum / revlen;

  return (
    <>
      <nav className=" bg-white flex justify-between py-2 pl-2 border-b-2 border-b-white">
        <img className="h-20 rounded" src="images/hn2.png" alt="img" />
        <ul className="px-32 py-4 mt-4 flex space-x-12 justify-end ">
          <li className="cursor-pointer font-extrabold hover:text-indigo-900">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="cursor-pointer font-semibold">
            <Link to="/privacy">Privacy</Link>
          </li>
          <li className="cursor-pointer text-red-500 font-extrabold">
            <Link to="/login" onClick={() => localStorage.removeItem("token")}>
              ⛔︎ Logout
            </Link>
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
          ⬅ Back to Dashboard
        </span>
      </a>
      {data && (
        <div className="flex flex-col mt-5 items-center sm:px-5 md:flex-row border-4 tails-selected-element ">
          <div className="w-full md:w-1/2 m-3">
            <a
              href={`https://res.cloudinary.com/dgo3xjjvb/image/upload/v${data.versionid}/${data.publicid}.${data.format}`}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <img
                className=" w-full h-full rounded-lg max-h-64 sm:max-h-96"
                src={`https://res.cloudinary.com/dgo3xjjvb/image/upload/v${data.versionid}/${data.publicid}.${data.format}`}
                alt="profile"
              />
            </a>
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
              <div className="bg-orange-500  items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>⌘ Your Profile</span>
              </div>
              <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                {" "}
                Hi , 👋 {data.fullname}
              </h1>
              <p className="pt-2 text-sm font-medium">
                {" "}
                Fullname : {data.fullname}{" "}
              </p>
              <p className=" text-sm font-medium">
                {" "}
                Username : {data.username}{" "}
              </p>
              <p className=" text-sm font-medium">
                {" "}
                Instagram Id : {data.instaId}{" "}
              </p>
              <p className=" text-sm font-medium"> Email : {data.email} </p>
              <p className=" text-sm font-medium"> Section : {data.section} </p>
              <p className=" text-sm font-medium">
                {" "}
                Total Ratings :{" "}
                <span className="font-semibold text-lg text-orange-600">
                  {revlen}
                </span>
              </p>
              {avgrev ? (
                <p className=" text-sm font-medium">
                  {" "}
                  Average Rating :{" "}
                  <span className="font-semibold text-lg text-orange-600">
                    {avgrev.toFixed(1)}
                  </span>{" "}
                  /10
                </p>
              ) : (
                <p className=" text-sm font-medium">
                  {" "}
                  Average Rating :{" "}
                  <span className="font-semibold text-lg text-orange-600">
                    0
                  </span>{" "}
                  /10
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      <h4 className="w-full text-6xl font-extrabold ml-16 mt-6">
        {" "}
        Your Reviews
      </h4>
      {review ? (
        review.map((review, index) => (
          <blockquote
            key={index}
            className="flex items-center justify-between w-11/12 m-6 col-span-1 p-6 bg-white rounded-lg shadow  border-black border-2 tails-selected-element "
            data-rounded="rounded-lg"
            data-rounded-max="rounded-full"
          >
            <div className="flex flex-col pr-8 ">
              <div className="relative pl-12">
                <p>
                  ► by.{" "}
                  <span className="mt-2 text-2xl font-extrabold text-red-900 underline ">
                    {" "}
                    {review.giver}
                  </span>
                </p>
              </div>

              <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base">
                Out of 10 :
                <span className="mt-1 leading-5 text-gray-500 truncate">
                  {" "}
                  <span className="font-semibold text-red-500 text-2xl">
                    {review.rating}
                  </span>{" "}
                  /10
                </span>
              </h3>
              <h3 className="pl-12 mt-2 mb-2 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base">
                Hot :
                <span className="mt-1 leading-5 text-gray-500 truncate">
                  {" "}
                  <span className="font-semibold text-red-500 text-xl">
                    {review.likes}
                  </span>
                </span>
              </h3>
              <div className="relative pl-12">
                <p className="text-black font-extrabold underline">Advice : </p>
                <span className="mt-2 text-sm text-red-900 sm:text-base lg:text-sm xl:text-base">
                  ☞ {review.comment}
                </span>
              </div>
            </div>
            <img
              className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
              src="images/reviewer.png"
              alt="img"
            />
          </blockquote>
        ))
      ) : (
        <blockquote
          className="flex items-center justify-between w-11/12 m-6 col-span-1 p-6 bg-white rounded-lg shadow  border-black border-2 tails-selected-element "
          data-rounded="rounded-lg"
          data-rounded-max="rounded-full"
        >
          <div className="flex flex-col pr-8 ">No reviews Yet</div>
          <img
            className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rVX2wBmpOg9wwUOTRq5zgtYKDKhzGvBOAA&usqp=CAU"
            alt=""
          />
        </blockquote>
      )}
    </>
  );
};

MyProfile.propTypes = propTypes;
MyProfile.defaultProps = defaultProps;
// #endregion

export default MyProfile;
