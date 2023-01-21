import React from 'react';
import Blogs_img from '../../image/homeblogs.png';
import {RxReader} from "react-icons/rx";
import {NavLink} from "react-router-dom";

const _Blogs = () => {
    return (
        <>
            <div id="blogs">
                <div className="container">
                    <div className="blogs">
                        <h1 className="blogs-title">Последние статьи</h1>
                        <div className="blogs-blogs">
                            <div className="blogs-blogs_blog">
                                <div className="blogs-blogs_blog-bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="blogs-blogs_blog-desc">
                                    <span className="blogs-blogs_blog-desc_title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="blogs-blogs_blog-desc_group">
                                        <div className="blogs-blogs_blog-desc_group-group">
                                            <RxReader className="blogs-blogs_blog-desc_group-group_icon"/>
                                            <NavLink className="blogs-blogs_blog-desc_group-group_link" to={"/Home_read"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blogs-blogs_blog">
                                <div className="blogs-blogs_blog-bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="blogs-blogs_blog-desc">
                                    <span className="blogs-blogs_blog-desc_title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="blogs-blogs_blog-desc_group">
                                        <div className="blogs-blogs_blog-desc_group-group">
                                            <RxReader className="blogs-blogs_blog-desc_group-group_icon"/>
                                            <NavLink className="blogs-blogs_blog-desc_group-group_link" to={"/Home_read"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blogs-blogs_blog">
                                <div className="blogs-blogs_blog-bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="blogs-blogs_blog-desc">
                                    <span className="blogs-blogs_blog-desc_title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="blogs-blogs_blog-desc_group">
                                        <div className="blogs-blogs_blog-desc_group-group">
                                            <RxReader className="blogs-blogs_blog-desc_group-group_icon"/>
                                            <NavLink className="blogs-blogs_blog-desc_group-group_link" to={"/Home_read"}>Читать</NavLink>

                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blogs-blogs_blog">
                                <div className="blogs-blogs_blog-bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="blogs-blogs_blog-desc">
                                    <span className="blogs-blogs_blog-desc_title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="blogs-blogs_blog-desc_group">
                                        <div className="blogs-blogs_blog-desc_group-group">
                                            <RxReader className="blogs-blogs_blog-desc_group-group_icon"/>
                                            <NavLink className="blogs-blogs_blog-desc_group-group_link" to={"/Home_read"}>Читать</NavLink>

                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blogs-blogs_blog">
                                <div className="blogs-blogs_blog-bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="blogs-blogs_blog-desc">
                                    <span className="blogs-blogs_blog-desc_title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="blogs-blogs_blog-desc_group">
                                        <div className="blogs-blogs_blog-desc_group-group">
                                            <RxReader className="blogs-blogs_blog-desc_group-group_icon"/>
                                            <NavLink className="blogs-blogs_blog-desc_group-group_link" to={"/Home_read"}>Читать</NavLink>

                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blogs-blogs_blog">
                                <div className="blogs-blogs_blog-bg">
                                    <img src={Blogs_img} alt=""/>
                                </div>
                                <div className="blogs-blogs_blog-desc">
                                    <span className="blogs-blogs_blog-desc_title">Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="blogs-blogs_blog-desc_group">
                                        <div className="blogs-blogs_blog-desc_group-group">
                                            <RxReader className="blogs-blogs_blog-desc_group-group_icon"/>
                                            <NavLink className="blogs-blogs_blog-desc_group-group_link" to={"/Home_read"}>Читать</NavLink>

                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blogs-button">
                            <NavLink className="blogs-button_btn" to={"/Show_more"}>Показать больше</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _Blogs;