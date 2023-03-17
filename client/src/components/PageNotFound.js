import React from "react";

const propTypes = {};

const defaultProps = {};

/**
 *
 */
const PageNotFound = () => {
  return (
    <>
      <div className="">
        <img
          src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif"
          alt="page not found"
          className="w-screen"
        />
      </div>
    </>
  );
};

PageNotFound.propTypes = propTypes;
PageNotFound.defaultProps = defaultProps;
// #endregion

export default PageNotFound;
