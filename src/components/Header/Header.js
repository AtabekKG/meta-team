import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from './../../image/headerlogo.svg';

const Header = () => {
    return (
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
                        <NavLink className="header-buttons_first" to={"/Sign-in"}>Войти</NavLink>
                        <NavLink className="header-buttons_second" to={"/Follow"}>Подписаться </NavLink>
                    </div>
                    <div className="burger">
                        <input type="checkbox" id="menu-toggle" className="burger-input"/>
                        <label htmlFor="menu-toggle" className="burger-label"></label>
                        <ul className="burger-menu">
                            <li>
                                <NavLink className="nav-header" to={"/School"}>О школе</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-header" to={"/Courses"}>Наши курсы</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-header" to={"/About"}>О нас</NavLink>
                            </li>
                            <li className="burger-menu_group">
                                <NavLink className="nav-right" to={"/Sign-in"}>Войти</NavLink>
                                <NavLink to={"/Follow"} className="button-header">Подписаться</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;