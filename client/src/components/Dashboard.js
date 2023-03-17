import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
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
      <nav className=" container flex flex-wrap items-center justify-between mx-auto ">
        {/* <span className="text-4xl flex items-center mx-3 font-extrabold text- ">
          HOT or NOT
        </span> */}
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
            <Link to="/login" onClick={() => localStorage.removeItem("token")}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <input
        type="text"
        value={search}
        placeholder="Search by Name  🔎 "
        className="w-full h-12 px-6 py-2 mt-4 ml-3 mr-2 bg-slate-200  font-medium text-indigo-800 focus:outline-none tails-selected-element border-2 border-slate-600 rounded-2xl"
        data-primary="indigo-800"
        onChange={(e) => setSearch(e.target.value)}
        data-dashlane-rid="ecf7b122e81b2461"
        data-kwimpalastatus="alive"
        data-kwimpalaid="1678604518890-0"
        data-form-type="text"
      ></input>
      <p className="text-2xl font-semibold ml-14 mt-4  ">
        Total Users :{" "}
        <span className="text-2xl font-semibold  text-purple-600 hover:text-red-400">
          {totalusers}
        </span>{" "}
      </p>
      <div className="">
        <div className="grid  gap-6 m-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* ////// */}
          {data.length >= 1 ? (
            data.filter(profile => profile.fullname.toLowerCase().includes(search.toLowerCase())).map((profile) => (
              <div className="w-full border mt-5 border-gray-600 rounded-lg shadow-black shadow-lg hover:shadow-violet-600 hover:shadow-2xl">
                <div className="flex flex-col items-center justify-center p-10">
                  <Link to="/viewprofile">
                    <img
                      className="w-32 h-32 mb-6 rounded-full"
                      src="https://cdn.devdojo.com/images/june2021/headshot2.jpg"
                      alt="Profile"
                    />
                  </Link>
                  <h2 className="text-lg font-medium">{profile.fullname}</h2>
                  <p className="text-gray-600">Age : {profile.age} </p>

                  <p className="text-gray-600 mb-3">
                    Section : {profile.section}
                  </p>
                  <a
                    href={`/viewprofile/${profile.fullname}/${profile._id}`}
                    className="relative inline-block text-lg group"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-violet-300"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative">Review Now </span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </a>
                </div>

                <div className="flex border-t border-gray-600 divide-x divide-gray-400">
                  <a
                    href="#_"
                    className="flex-1 block p-5 text-center text-gray-600 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                  >
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0ODQ8NDQ0PIBEWFxURHxYYHSggGBooHR8XIzEhJSkrLjouGB8/ODMtNykwLisBCgoKDg0OGhAQGy0lICUvKzYvLTAtLS0tLy8tLS01Mi4tLS0tLS0tLTAwKy8tLi0tLS0vLS01LS0vLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQUGBwQCA//EADwQAAIBAwAHBAcGBAcAAAAAAAABAgMEEQUGEiExUWFBcYGRBxMUIjKhsSNCUmJy0YKSwfEkM1OisrPS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAQFBgEDAv/EADERAQABBAAFAgQFAwUAAAAAAAABAgMEEQUSITFBE1FhcYGxIjIzkcEUI9FCYqHh8P/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP0xpWlaU9ue+TyqdNfFN/t1I+RkU2Keap74+PXfq5aXi1Uu6tzCvXqvLlW2IxXwwioppJeLPDAu13qaq6vd751mizVFFPszpPQQAAAAAAAAAAAAAAAAAAAAAAAAAAAADx6V0jTtaUqtR7lujFfFOXZFHjfvU2aJqqe1izVeriilzPSOkKlzVlVqPLe5JfDCPZFdDMX71V6vmqarHsU2aOWluuoj/AMHLpXnn+WJecL/R+qh4rH9/6Q2MsVaAQCgAAAAAAAAAAAAAAAAAAAAAAAAD5nJRTbaSSbbe5JczkzqNyRG+kOY6x6Yd5Xck36mGY0o9O2Xe/wBjNZmRN6v4R2avBxIsW+vee7FZImk3TdfR7cZhcUu1ThUXisP6IuuFVfhqpUHGKNV01fBuBbqYAAAAAAAAAAAAAAAAAAAAAAAAAAABqmvmlPVUY20HidffPmqS7PF7u5MreI3+WjkjvP2WvCsf1LnqT2j7tB2ii00ptAZvU+/VC9p5eIVk6Mu942fnjzJuBd5Lsb89FdxOz6liZjvHV000TLKAAgAAAAAUABAKBAKAAAAAAAAAAAAHwqkXJxTW1FJtdqTzj6PyObjsalyjWS+9ovK9TOYqbpw/THcvPe/EzeXc9S7MtfgWfSsUx79WNyR0zRkBtPu6rigTG41LqurOlVeW0Jt/awxTrL86XHufE0mLe9W3E+fLH5mPNi7NPjwy5JRAAAAAAAAAAAAAAAAAAAAAAAAAxGsmm4WNHbeJVZ5jRp/ifN9ER8nIizTvyl4eJVkXOWO3mXh1YqTjo+rd1JOVWs7i4nJ8XjMV4YjuR5Y0z6M11d53L1zaaf6iLdPaNQ5omULWRGoMh3RkGjINMpq7pmVjXVTe6UsRrQ5xzxXVdnjzJONfmzXvx5Qs7EjIt68x2dZo1IzjGcWpRlFSjJb0096ZoYmJjcMhMTE6l9nXEAAUAAAAAAAAAAAAAAAAAAAPxuriFGnOrUezCnFyk+SR81VRTG5fVFE11RTT3lyDTelZ3lxOtPcn7tOGd1OHZH9+pnr96btfNLZ4mNTj24oj6/N0TQ9Pa0NCMeMrOovFxl/UuLMbx4j4MxkzrMmf9zlikUOmwXIDaGnTI0GQN/8AR3pbbpzs5v3qS9ZSz20874+D/wCXQt+H3uanknwzXGMbkri7Hnv825xkmsp5T7VwLJSqAAAAAAAAAAAAAAAAAAAAABo3pJ0o4xpWcH8f2tX9KeIR88v+FFbxC7qIohecFx+aqbs+OzQclVppHUtQLtVdHwh96hOpSkumdpfJryLvCq5rUR7MjxW3NGTM+/VoGsejXZ3dWjjEM7dJ9jpt7vLh4FXkWvTuTDRYGRF+zFXntLGZPDSZoyNGjI0aMjRpkNAX/s13QrZxGNRRn+h+7L5PPge2PXyXIlFzbPq2KqXQ7DSHqdJ3FhN+5WSubb8snHM4dze1LzLei5y3ptz56wzFyxzY1N6PHSf4bGSkAAAAKAAAAAAAAAAAAAAAAAcd1vu3V0jdSzujU9VHoopR+ufMosqrmuy2fDLfJjU/Hr+7D7RH0nabDqTptWd1s1JYoXGKdRvhCWfdn3cU+j6EvEu+nXqe0qziuJ61rmp70t61u0Cr+h7mFcUsyoy4KXODfJ/XBY5Nj1afj4Z/AzJxrm57T3cmqRlCTjJOMotxlFrEovtTRSTTMTqWypmKoiqmej52jmndGRo0ZGjSNg02TT+k3G/s7lP3qdtYzl342mvJ/Mm3q9Xaao9oU+Jj7xrlE+ZqdWTyXDLKAAAAAAAAAAAAAAAAAAAEA4dphv2u6zx9pr/9kigvfqVfNu8T9Cj5Q8eTz0kGRo06HqJrSpKFlcy99JRt6kn8a7Kbf4uXPv42mJkbjkqZnivDuSZvW46eY9mQ1w1UjeJ17dKF1Fb1wjXXJ8pcn59PvJxoufip7o3DuIzjzyV9afs5fWpTpzlTqRlCcHsyhJYlF8sFTNMxOpa2iumumKqZ3D4yc0+tGRoMnNGn6XFWVWbb+KWzFLooqMV5JI+5maqtvKm3Fu3MR8Xd6UcRin2RS+RoI7MFM9X2dcAAACAUAAAAAAAAAAAAAADjWu1q6GkrlYwqklWj1Ull/wC7a8ilyqOW7LacKuRcxqfh0YPJ4LEyA2g5Mb6N/wBUteEtm3v5co07l/JT/wDXnzLHHy/9Nf7s3xDhExu5Zj5x/hsusOrdtpGClLEKyj9ncQw3jsT/ABR6eWCTesU3Y6/urMTOu4tXTt5hyrTOia9jVdGvHD3uE1vp1I/iT/pxKm5aqtzqWuxcu3k0c1H1j2eDJ5pRkDM6oWDur+3hjMISVepyUItP5vC8T3xrfNchX8Tvelj1T5npH1doLpigAAAgFAgFAAAAAAAAAAAAABo/pN0O6tGF5TWZW+Y1UuLot/F4P5SZCzLXNTzR4XfBcqLdybVXar7uZZKxqzIDIDIGy6qa3VbGUaVXaq2jeHDjOj+aPT8v0JVjIm30nsqeIcLovxz0dKvu6VpGxtdKWii2qlKpHbo1o4bg8bprr070WNdFN2nXhmLV67i3dx0mO8fw41pSxqWlepb1VidOWG1wkuKkujW8p7lE0VcsttjX6b9uLlPl5c/27T50956dXXNQ9X3ZW7qVY4uLjZlNPjTh92n39r6voW2NZ9Onc95Yzimb/UXdU/ljt/ltJJViAUAAAAAAACAUAAAAAAAAAA+akFKLjJKUZJqUWsprtQdiZidw45rnq1PR9ZzppytKkvs5736t/wCk39H2rqVV+xyTuOzZcM4hGRRy1fmj/n4tbyR1qZAZAZA3f0ZaclTr+wzlmlX2pUk/uVUstLo1nxXUmYlzU8ks/wAbw4qo9anvHf5PZ6U9HuVWzq04SnVq+sobMIuU54xKKwuPGR95lG5iYeHA8iKIrpqnUR1ezUvUr2dxurxJ1171KjulGi/xPscvkvp9WMbl/FV3eXEuKze/t2vy+Z9/+m8kxRgFAAAAEAoAAAAAAAAAAAAAAAD8rm2p1oSpVYRqU5rZnCSTjJdxyYiY1L6orqoqiqmdTDnWn/RxNOVTR81KPH2erLEl0jN8f4vMhXMTzQ0eJx2Nct+PrH8w0i/0ZdWzauLerRx2zhJQ/m4PwZEqt1U94XtrKs3fyVRP/vbu8amua8z5SNG2uGVl8FzGnJ6dZbTqdoC+neWtdW9WnRpVoVJ1akfVR2U9+NrDlnhu5kixar54nSn4nm48WK7fNEzMdo6uxOKbTwsrKTxvXMs2OUABQAEAoEAoAAAAAAAAAAAAAAAAAAgBoDy1NG20nmVvQk+cqMG/mjnLHs9IvXI7VT+79KFnRp/5dKlT/RTjH6IREQ5Vcqq7zMv3OvgAAQCgQCgAAAABAAACgAAAAAAAAAAAAAAAIBQAACAAAFAAQABQIBQAAAAAAAAAAAAAAAACAUAAAAAAACAUAAAAQCgAAACAUAAAAAAAAAAAAIBQAEAoEAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACgQCgAAEAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAKAAAQABQIAAAUAAAAAAEAqAAAAAAgIAAoEAAUCAAAAAAAMAAA/9k="
                      alt=""
                      className="w-16 ml-1"
                    />
                    <p>
                      <b>{(Math.random() * 100).toFixed(2)}%</b>
                    </p>
                  </a>

                  <a
                    href="#_"
                    className="flex-1 block p-5 text-center text-gray-400 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3915/3915794.png"
                      alt=""
                      className="w-14 ml-1 mb-2"
                    />
                    <p>
                      <b className="text-gray-600">
                        {(Math.random() * 10).toFixed(1)}
                      </b>
                      /10
                    </p>
                  </a>

                  <a
                    href={`https://www.instagram.com/${profile.instaId}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png"
                      alt=""
                      className="w-12 ml-1 mt-3"
                    />
                  </a>
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

        {/* <p class="text-gray-600 mb-3">Section : DS-A</p> */}
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

        {/* <p class="text-gray-600 mb-3">Section : DS-A</p> */}
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
