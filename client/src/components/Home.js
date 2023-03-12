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
      <nav className="  flex justify-between py-2 pl-2 border-b-2 bg-white">
        
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
                  that's changed !! Register and have Fun
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link to="/login">
                    <a
                      href="/login"
                      className="relative inline-block px-4 py-2 font-medium group"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-purple-300 border-2 border-black group-hover:bg-black"></span>
                      <span className="relative text-black group-hover:text-white">
                        Login
                      </span>
                    </a>
                  </Link>
                  <Link to="/register">
                    <a
                      href="/register"
                      className="relative inline-block px-4 py-2 font-medium group"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-purple-300 border-2 border-black group-hover:bg-black"></span>
                      <span className="relative text-black group-hover:text-white">
                        Register
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full ml-40 md:w-96">
              <div
                className=" h-auto overflow-visible rounded-md  sm:rounded-xl"
                data-rounded="rounded-xl"
                data-rounded-max="rounded-full"
              >
                <img
                  src="https://i0.wp.com/www.androidmag.de/wp-content/uploads/2014/06/hotornot.jpg"
                 
                  alt="img"
                  className="w-96 rounded-md shadow-2xl shadow-red-600 hover:shadow-xl hover:shadow-red-500"
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
        <div className="flex justify-center mt-8 space-x-6">
          <a href="/" className="text-gray-900  hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="/" className="text-gray-900  hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="/" className="text-gray-900  hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
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
