import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Dashboard = () => {
  const [data, setdata] = useState([]);
  const [search , setSearch] = useState("");
  
  useEffect(() => {
    axios
      .get("http://localhost:3001/allprofiles", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setdata(res.data);
      });

    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3001/myprofile", {
        headers: {
          "x-token": token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(" User Logged in");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  /*   TOTAL NUMBER OF USERS REGISTERED */
  const keys = Object.keys(data);
  const totalusers = keys.length;

  return (
    <>
      <nav className="   bg-white flex justify-between py-2 pl-2 border-b-2 border-b-white  ">
        {/* <span className="text-4xl flex items-center mx-3 font-extrabold text- ">
          HOT or NOT
        </span> */}
        <img
          className="h-20 rounded"
          src="images/hn2.png"
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
            <Link to="/login" onClick={() => localStorage.removeItem("token")}>
              ⛔︎ Logout
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-red-500 hover:bg-red-600  items-center m-5 p-6 py-4 leading-none rounded text-lg  uppercase text-white font-bold inline-block">
                <span>  ✓ Total Users : <span className="text-xl text-neutral-900" > {totalusers}</span>  </span>
              </div>
            
      <input
        type="text"
        value={search}
        placeholder="Search by Fullname  🔎 "
        className="w-8/12 h-12 px-6 py-2 mt-4 ml-3 mr-2 bg-slate-200 text-lg   font-medium placeholder:text-slate-400 focus:outline-none tails-selected-element border-2 border-slate-500 rounded "
        data-primary="indigo-800"
        onChange={(e) => setSearch(e.target.value)}
        data-dashlane-rid="ecf7b122e81b2461"
        data-kwimpalastatus="alive"
        data-kwimpalaid="1678604518890-0"
        data-form-type="text"
        
      ></input>
   

      
      <div className="">
        <div className="grid  gap-6 m-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* ////// */}
          {data.length >= 1 ? (
            data.filter(profile => profile.fullname.toLowerCase().includes(search.toLowerCase())).map((profile , index) => (
              <div key={index} className="w-full border mt-5 border-gray-600 rounded-lg shadow-black shadow-lg hover:shadow-violet-600 hover:shadow-2xl">
                <div className="flex flex-col items-center justify-center p-10">
                <a href={`https://res.cloudinary.com/dgo3xjjvb/image/upload/v${profile.versionid}/${profile.publicid}.${profile.format}`} target="_blank" rel="noreferrer" className="block">

                    <img
                      className="w-40 h-40 mb-6 rounded-full"
                      src={`https://res.cloudinary.com/dgo3xjjvb/image/upload/v${profile.versionid}/${profile.publicid}.${profile.format}`}
                      alt="Profile"
                    />
                  </a>
                  <h2 className="text-lg font-medium">{profile.fullname}</h2>
                  <p className="text-gray-600">Age : {profile.age} </p>

                  <p className="text-gray-600 mb-3">
                    Section : {profile.section}
                  </p>
                  <a
                    href={`/viewprofile/${profile.fullname}/${profile._id}/${profile.versionid}/${profile.publicid}/${profile.format}`}
                    className="relative inline-block text-lg group"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-violet-400"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative"> <span className="font-extrabold text-2xl " >⇱</span> Review Now  </span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </a>
                </div>

                <div className="flex border-t border-gray-600 divide-x divide-gray-400">
                <Tooltip content="Hot Percetage">
                  <a
                    href="#_"
                    className="flex-1 block p-5 text-center text-gray-600 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                  >
                     
                    <img
                      src="https://www.freeiconspng.com/thumbs/flame-png/fire-vector-icon-png-27.png"
                      alt=""
                      className="w-8 ml-5 mt-3 mb-2"
                    />
                   
                    <p>
                   
                   <b>{(Math.random() * 100).toFixed(2)}%</b>
                 </p>

                   
                    
                    
                  </a>
                  </Tooltip>
                  <Tooltip content="Average of 10">
                  <a
                    href="#_"
                    className="flex-1 block p-5 text-center text-gray-400 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3915/3915794.png"
                      alt=""
                      className="w-12 ml-1 mb-2"
                    />
                    <p className="text-gray-500">
                      <b className="text-gray-600">
                        {(Math.random() * 10).toFixed(1)}
                      </b>
                      /10
                    </p>
                  </a>
                  </Tooltip>
                  <Tooltip content="View on Instagram">
                  
                  <a
                    href={`https://www.instagram.com/${profile.instaId}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 block p-5  text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png"
                      alt=""
                      className="w-12 ml-1 mt-3"
                    />
                    
                  </a>
                  </Tooltip>

                  
                </div>
              </div>
            ))
          ) : (
            <p>No User Registered</p>
          )}
        </div>

      </div>
      {search === "123456789" ? 
      <div className="grid grid-flow-col gap-5">
      <div class="w-96 border border-gray-600 rounded-lg shadow-2xl ">
      <div class="flex flex-col mb-3 items-center justify-center p-10">
        <Link to="/viewprofile">
          <img
            class="w-32 h-32 mb-6 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvE4zCWyWEb3CPziWvi-wHuomwZElMxhAyl82StUXfHa4ZVOAHM5tU5-FBI-a_7f7uusE&usqp=CAU"
            alt="Profile"
          />
        </Link>
        <h2 class="text-lg font-medium">Sanjay</h2>
        <p class="text-gray-600">Age : 20 </p>

        
        <a
          href="https://github.com/sanjay-sol"
          class="relative inline-block text-lg group" target="_blank" rel="noreferrer"
        >
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative">See U on GitHub </span>
          </span>
          <span
            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      
      
    </div> 
    <div class="w-96 border border-gray-600 rounded-lg shadow-2xl ">
      <div class="flex flex-col mb-3 items-center justify-center p-10">
        <Link to="/viewprofile">
          <img
            class="w-32 h-32 mb-6 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2METwv1tSd-ZYz9vCWZTEptIz8KVa9RgZPw&usqp=CAU"
            alt="Profile"
          />
        </Link>
        <h2 class="text-lg font-medium">Vikas Rushi</h2>
        <p class="text-gray-600">Age : 20 </p>

       
        <a
          href="https://github.com/0xVikasRushi"
          class="relative inline-block text-lg group" target="_blank" rel="noreferrer"
        >
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative">See U on GitHub </span>
          </span>
          <span
            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      
      
    </div> 
    </div>
     : <p></p> }
    </>
  );
};

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

export default Dashboard;
