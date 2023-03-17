import React from "react";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Home = () => {
  return (
    <>
      <nav className="  container flex flex-wrap items-center justify-between mx-auto ">
        <img
          className="h-20 rounded"
          src="https://www.datingscout.co.uk/b6/image/upload/ds/upload/reviews/ENG/hot-or-not/hot-or-not-logo.jpg"
          alt="img"
        />

        <ul className="px-32 py-4 mt-4 flex space-x-12 justify-end ">
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer text-red-600 font-extrabold hover:text-opacity-75 text-xl ">
            <Link to="/privacy1">Security</Link>{" "}
          </li>
        </ul>
      </nav>
      <section className="px-2 py-32  md:px-0 tails-selected-element bg-white">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Rate Your Friends..</span>
                  <span
                    className="block text-red-600 xl:inline"
                    data-primary="indigo-600"
                  >
                    Hot
                  </span>
                  <span
                    className="block text-slate-600 pl-3 xl:inline"
                    data-primary="indigo-600"
                  >
                    or
                  </span>
                  <span
                    className="block text-sky-600 pl-3 xl:inline"
                    data-primary="indigo-600"
                  >
                    Not
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It's never been easier to Rate our Friends Honestly . But
                  that's changed !! Welcome to the ultimate anonymous social
                  rating platform where you can rate your friends on a scale of 1-10 and find out
                  who's Hot and who's Not .   
                  <span className="mx-auto text-base ml-2 font-semibold text-gray-900 sm:max-w-md lg:text-xl md:max-w-3xl">
                       So why wait? Join "Hot or Not hub" today and start rating your friends anonymously. It's free, fun, and addictive! 
                           
                </span>        
                </p>
                
                <div className="relative flex flex-col sm:flex-row p-5 sm:space-x-9">
                  <Link to="/login">
                    <a
                      href="/login"
                      className="relative inline-block px-4 py-3 font-medium group"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-red-600 border-2 border-black group-hover:bg-black"></span>
                      <span className="relative text-black font-extrabold group-hover:text-white">
                        Login
                      </span>
                    </a>
                  </Link>
                  <Link to="/register">
                    <a
                      href="/register"
                      className="relative inline-block px-4 py-3 font-medium group"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-sky-600 border-2 border-black group-hover:bg-black"></span>
                      <span className="relative text-black font-extrabold group-hover:text-white">
                        Register
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex ml-40 md:w-96 sm:w-max ">
              <div
                className=" h-auto overflow-visible rounded-md  sm:rounded-xl"
                data-rounded="rounded-xl"
                data-rounded-max="rounded-full"
              >
                <img
                  src="https://i0.wp.com/www.androidmag.de/wp-content/uploads/2014/06/hotornot.jpg"
                  alt="img"
                  className="w-96 rounded-md shadow-2xl shadow-black hover:shadow-xl hover:shadow-red-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mt-40 px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 tails-selected-element">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2 mr-10">
              <a
                href="/"
                className="text-base leading-6 text-gray-900 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2 mr-10">
              <a
                href="/"
                className="text-base leading-6 text-gray-900 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="/"
                className="text-base leading-6 text-gray-900 hover:text-gray-900"
              >
                Terms
              </a>
            </div>
          </nav>
          <div className="flex justify-center  space-x-6 pb-3 ">
            <a href="/" className="text-gray-900  hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                classN="w-6 h-6 mx-auto fill-current tails-selected-element"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  classN=""
                ></path>
              </svg>
            </a>
            <a href="/" className="text-gray-900  hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                classN="w-6 h-6 fill-current tails-selected-element"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  classN=""
                ></path>
              </svg>
            </a>
            <a href="/" className="text-gray-900  hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                classN="w-6 h-6 fill-current tails-selected-element"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 CVR , Inc. No rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;
