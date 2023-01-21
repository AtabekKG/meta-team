
import './scss/index.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes, Route, NavLink} from "react-router-dom";
import School from "./components/School/School";
import About from "./components/About/About";
import SignIn from "./components/Sign-in/Sign_in";
import Home from "./components/Home/Home"
import Courses from "./components/Courses/Courses";
// import HomePage from "./components/Home/Home-page/Home-Page";
// import Profile from "./components/Profile/Profile";
import Follow from "./components/Follow/Follow";
import HomeRead from "./components/Home/Home-read/Home_read";
import GetAccess from "./components/Home/Home-read/Get-access/Get_access";
import ShowMore from "./components/Home/Show-more/Show_more";
import SubscribePackage from "./components/Home/Subscribe-package/Subscribe_package";
import CoursesFrontend from "./components/Courses/Courses-frontend/Courses-frontend";
import CoursesJava from "./components/Courses/Courses-java/Courses-java";
import RegisterCourse from "./components/Courses/Courses-frontend/Register-course/Register-course";
import React from "react";
import BuyedCourses from "./components/Courses/Courses-frontend/Register-course/Buyed-courses/Buyed-courses";
// import Paket from "./components/Home/Home-statya/Paket/Paket";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/School"} element={<School/>}/>
                <Route path={"/Courses"} element={<Courses/>}/>
                <Route path={"/About"} element={<About/>}/>
                <Route path={"/Sign-in"} element={<SignIn/>}/>
                <Route path={"/Header"} element={<Header/>}/>
                <Route path={"/Footer"} element={<Footer/>}/>
                <Route path={"/Home"} element={<Home/>}/>
                {/*<Route path={"/Profile"} element={<Profile/>}/>*/}
                <Route path={"/Follow"} element={<Follow/>}/>
                <Route path={"/Home_read"} element={<HomeRead/>}/>
                <Route path={"/Get_access"} element={<GetAccess/>}/>
                <Route path={"/Show_more"} element={<ShowMore/>}/>
                <Route path={"/Subscribe_package"} element={<SubscribePackage/>}/>
                <Route path={"/Courses-frontend"} element={<CoursesFrontend/>}/>
                <Route path={"/Courses-java"} element={<CoursesJava/>}/>
                <Route path={"/Register-course"} element={<RegisterCourse/>}/>
                <Route path={"/Buyed-courses"} element={<BuyedCourses/>}/>
                {/*<Route path={"/Paket"} element={<Paket/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;

