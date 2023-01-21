import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../../../../image/headerlogo.svg";
import {BiBell} from "react-icons/bi";

const _BuyedCoursesHeader = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <div className="header-navbar">
                            <div className="header-navbar_logo">
                                <NavLink to={"/Home"}><img src={Logo} alt=""/></NavLink>
                            </div>
                            <nav className="header-navbar_nav">
                                <NavLink className="header-navbar_nav-item" to={"/School"}>О школе</NavLink>
                                <NavLink className="header-navbar_nav-item" to={"/Courses"}>Наши курсы</NavLink>
                                <NavLink className="header-navbar_nav-item" to={"/About"}>О нас</NavLink>
                            </nav>
                        </div>
                        <div className="header-buttons">
                            <BiBell className="header-buttons_bell-icon"/>
                            <NavLink className="header-buttons_profile">Профиль</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default _BuyedCoursesHeader;