// import logo from './logo.svg';
// import "./App.css";
import { Routes , Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile";
import PageNotFound from "./components/PageNotFound";
import Privacy1 from "./components/Pivacy1";
import Privacy from "./components/Privacy";
import Redirects from "./components/Redirects";
import Register from "./components/Register";
import ViewProfile from "./components/ViewProfile";

function App() {
  return (
    <>
    <div className="">
     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/myprofile" element={<MyProfile/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/privacy1" element={<Privacy1/>}/>
      <Route path="/redirects" element={<Redirects/>}/>

      <Route path="/viewprofile/:fullname/:id/:versionid/:publicid/:format" element={<ViewProfile/>}/>


      <Route path="*" element={<PageNotFound/>}/>



     </Routes>
     </div>
    </>
  );
}

export default App;
