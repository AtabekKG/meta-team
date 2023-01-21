import React from 'react';
import Blogs_img from "../../../image/homeblogs.png";
import {RxReader} from "react-icons/rx";
import {NavLink} from "react-router-dom";

const _MoreHero = () => {
    return (
        <div>
            <div id="more-hero">
                <div className="container">
                    <div className="more-hero">
                        <div className="more-hero_links">
                            <span>Главная /</span>
                            <span className="active">Наши курсы</span>
                        </div>
                        <h1 className="more-hero_title">Статьи</h1>
                        <div className="more-hero_blogs">
                            <div className="more-hero_blogs-blog">
                                <div className="more-hero_blogs-blog_bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="more-hero_blogs-blog_desc">
                                    <span className="more-hero_blogs-blog_desc-title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="more-hero_blogs-blog_desc-group">
                                        <div className="more-hero_blogs-blog_desc-group_group">
                                            <RxReader className="more-hero_blogs-blog_desc-group_group-icon"/>
                                            <NavLink className="more-hero_blogs-blog_desc-group_group-link" to={"/Home_read"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="more-hero_blogs-blog">
                                <div className="more-hero_blogs-blog_bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="more-hero_blogs-blog_desc">
                                    <span className="more-hero_blogs-blog_desc-title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="more-hero_blogs-blog_desc-group">
                                        <div className="more-hero_blogs-blog_desc-group_group">
                                            <RxReader className="more-hero_blogs-blog_desc-group_group-icon"/>
                                            <NavLink className="more-hero_blogs-blog_desc-group_group-link" to={"/Home_read"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="more-hero_blogs-blog">
                                <div className="more-hero_blogs-blog_bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="more-hero_blogs-blog_desc">
                                    <span className="more-hero_blogs-blog_desc-title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="more-hero_blogs-blog_desc-group">
                                        <div className="more-hero_blogs-blog_desc-group_group">
                                            <RxReader className="more-hero_blogs-blog_desc-group_group-icon"/>
                                            <NavLink className="more-hero_blogs-blog_desc-group_group-link" to={"/Home_read"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="more-hero_blogs-blog">
                                <div className="more-hero_blogs-blog_bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="more-hero_blogs-blog_desc">
                                    <span className="more-hero_blogs-blog_desc-title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="more-hero_blogs-blog_desc-group">
                                        <div className="more-hero_blogs-blog_desc-group_group">
                                            <RxReader className="more-hero_blogs-blog_desc-group_group-icon"/>
                                            <NavLink className="more-hero_blogs-blog_desc-group_group-link" to={"/Home_read"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="more-hero_blogs-blog">
                                <div className="more-hero_blogs-blog_bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="more-hero_blogs-blog_desc">
                                    <span className="more-hero_blogs-blog_desc-title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="more-hero_blogs-blog_desc-group">
                                        <div className="more-hero_blogs-blog_desc-group_group">
                                            <RxReader className="more-hero_blogs-blog_desc-group_group-icon"/>
                                            <NavLink className="more-hero_blogs-blog_desc-group_group-link" to={"/Home_read"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="more-hero_blogs-blog">
                                <div className="more-hero_blogs-blog_bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="more-hero_blogs-blog_desc">
                                    <span className="more-hero_blogs-blog_desc-title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="more-hero_blogs-blog_desc-group">
                                        <div className="more-hero_blogs-blog_desc-group_group">
                                            <RxReader className="more-hero_blogs-blog_desc-group_group-icon"/>
                                            <NavLink className="more-hero_blogs-blog_desc-group_group-link" to={"/Home_read"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default _MoreHero;