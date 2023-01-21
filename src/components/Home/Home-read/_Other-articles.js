import React from 'react';
import {RxReader} from "react-icons/rx";
import {NavLink} from "react-router-dom";

const _OtherArticles = () => {
    return (
        <>
            <div id="other-articles">
                <div className="container">
                    <div className="other-articles">
                        <h1 className="other-articles_title">Другие статьи </h1>
                        <div className="other-articles_blogs">
                            <div className="other-articles_blogs-blog">
                                <span className="other-articles_blogs-blog_title">Статьи</span>
                                <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training
                                    Center. </p>
                                <div className="other-articles_blogs-blog_group">
                                    <div className="other-articles_blogs-blog_group-group">
                                        <RxReader className="other-articles_blogs-blog_group-group_icon"/>
                                        <NavLink className="other-articles_blogs-blog_group-group_link">Читать</NavLink>
                                    </div>
                                    <span>01.02.2022</span>
                                </div>
                            </div>
                            <div className="other-articles_blogs-blog">
                                <span className="other-articles_blogs-blog_title">Статьи</span>
                                <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training
                                    Center. </p>
                                <div className="other-articles_blogs-blog_group">
                                    <div className="other-articles_blogs-blog_group-group">
                                        <RxReader className="other-articles_blogs-blog_group-group_icon"/>
                                        <NavLink className="other-articles_blogs-blog_group-group_link">Читать</NavLink>
                                    </div>
                                    <span>01.02.2022</span>
                                </div>
                            </div>
                            <div className="other-articles_blogs-blog">
                                <span className="other-articles_blogs-blog_title">Статьи</span>
                                <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training
                                    Center. </p>
                                <div className="other-articles_blogs-blog_group">
                                    <div className="other-articles_blogs-blog_group-group">
                                        <RxReader className="other-articles_blogs-blog_group-group_icon"/>
                                        <NavLink className="other-articles_blogs-blog_group-group_link">Читать</NavLink>
                                    </div>
                                    <span>01.02.2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _OtherArticles;