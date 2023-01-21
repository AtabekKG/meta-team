import React from 'react';
import {NavLink} from "react-router-dom";
import footerLogo from './../../image/headerlogo.svg';
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import {FaTelegramPlane} from 'react-icons/fa';
import { FiYoutube} from 'react-icons/fi';
import { SiTiktok} from 'react-icons/si';
import {TfiEmail} from 'react-icons/tfi';
import {CiLocationOn} from 'react-icons/ci';
import {BsTelephone} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer-logo">
                        <div>
                            <NavLink to={"/Home"}><img src={footerLogo} alt=""/></NavLink>
                        </div>
                        <div className="footer-logo_buttons">
                            <button>KG</button>
                            <button>RU</button>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h3 className="footer-title">Быстрые ссылки</h3>
                        <div className="footer-links_nav">
                            <NavLink className="footer-links_nav-item" to={"/School"}>О школе</NavLink>
                            <NavLink className="footer-links_nav-item" to={"/Courses"}>Наши курсы</NavLink>
                            <NavLink className="footer-links_nav-item" to={"/About"}>О нас</NavLink>
                        </div>
                    </div>
                    <div className="footer-social">
                        <h3 className="footer-title">Социальные сети</h3>
                        <div className="footer-social_icons">
                            <BsInstagram className="footer-social_icons-icon"/>
                            <FiYoutube className="footer-social_icons-icon"/>
                            <BsFacebook className="footer-social_icons-icon"/>
                            <BsTwitter className="footer-social_icons-icon"/>
                            <SiTiktok className="footer-social_icons-icon"/>
                            <FaTelegramPlane className="footer-social_icons-icon"/>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3 className="footer-title">Контакты</h3>
                        <div className="footer-contact_group">
                            <TfiEmail className="footer-contact_group-icon"/>
                            <span>@motionwebteam@gmail.com</span>
                        </div>
                        <div className="footer-contact_group">
                            <BsTelephone className="footer-contact_group-icon"/>
                            <span>+996 559 - 69 - 26 - 26</span>
                        </div>
                    </div>
                    <div className="footer-address">
                        <h3 className="footer-title">Адреса</h3>
                        <div className="footer-address_group">
                            <CiLocationOn className="footer-address_group-icon"/>
                            <p>Турусбекова 109 / 3</p>
                        </div>
                        <p>Идентификационный код: 1234567890</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;