import React from "react";
import { Link } from "react-router-dom";
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Privacy1 = () => {
  return (
    <>
      <nav className=" bg-white flex justify-between py-2 pl-2 border-b-2 border-b-white">
        <img
          className="h-20 rounded"
          src="images/hn2.png"
          alt="img"
        />
        <ul className="px-32 py-4 mt-4 flex space-x-12 justify-end ">
          <li className="cursor-pointer text-red-500 font-extrabold">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="px-10 py-24 mx-auto max-w-7xl tails-selected-element">
        <div className="w-full mx-auto text-left md:text-center">
          <h1 className="mb-6 text-2xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
            {" "}
            <span className="w-full text-transparent  bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
              Your privacy and security are our top priorities -{" "}
            </span>{" "}
            rest assured with our robust encryption and commitment to
            confidentiality.{" "}
          </h1>
          <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
            In our Website, we take your privacy and security seriously. We
            understand that your personal information is sensitive and should be
            handled with utmost care. When rating the users based on their
            details and stuff, we assure you that we do not have access to your
            gmail , username , fullname or password as we use bcrypt{" "}
            <a
              href="https://github.com/BcryptNet/bcrypt.net"
              className="text-blue-400"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              (bcrypt)
            </a>{" "}
            algorithm to hash your data . This means that even we cannot
            decode your data . Additionally, we will never reveal your full
            name anywhere on our Website or to any third party without your
            explicit consent. We are committed to maintaining the
            confidentiality of your personal information and providing a safe
            and secure experience to review the users.{" "}
          </p>
        </div>
        <a
          href="/"
          className="relative inline-block ml-96 px-4 py-2 mx-4 mt-4 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-violet-500 border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            {" "}
            ⬅ Home
          </span>
        </a>
      </div>
    </>
  );
};

Privacy1.propTypes = propTypes;
Privacy1.defaultProps = defaultProps;
// #endregion

export default Privacy1;
