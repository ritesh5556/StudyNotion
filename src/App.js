import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";


// import Home from "./pages/Home";
// import Navbar from "./components/common/Navbar"
// import OpenRoute from "./components/core/Auth/OpenRoute"
// import { useNavigate } from "react-router-dom";
// import Login from "./pages/Login"
// import Signup from "./pages/Signup"
// import ForgotPassword from "./pages/ForgotPassword";
// import UpdatePassword from "./pages/UpdatePassword";
// import VerifyEmail from "./pages/VerifyEmail";
// import About from "./pages/About";
// import ContactUsForm from "./components/ContactPage/ContactUsForm";
// import ContactPage from "./pages/ContactPage";
// import MyProfile from "./components/core/Dashboard/MyProfile";
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/core/Auth/PrivateRoute";
// import Error from "./pages/Error"
// import Settings from "./components/core/Dashboard/Settings";
// import { useDispatch, useSelector } from "react-redux";
// import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
// import Cart from "./components/core/Dashboard/Cart";
// import { ACCOUNT_TYPE } from "./utils/constants";
// import AddCourse from "./components/core/Dashboard/Add Course/index";
// import MyCourses from "./components/core/Dashboard/MyCourses";
// import EditCourse from "./components/core/Dashboard/EditCourse";
// import Catalog from "./pages/Catalog";
// import CourseDetails from "./pages/CourseDetails";
// import ViewCourse from "./pages/ViewCourse";
// import VideoDetails from "./components/core/ViewCourse/VideoDetails";
// import Instructor from "./components/core/Dashboard/Instructor"
// import toast from "react-hot-toast";
// import picture from '../src/assets/Images/Photo.jpg'
// import { useEffect, useState } from "react";

function App() {

  
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
    </Routes>
      
   </div>
  );
}

export default App;
