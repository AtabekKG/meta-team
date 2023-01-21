import React from 'react';
import {NavLink} from "react-router-dom";
import {CgArrowLongRight} from "react-icons/cg";

const _CoursesHero = () => {
    return (
        <>
            <div id="courses-hero">
                <div className="container">
                    <div className="courses-hero">
                        <div className="courses-hero_links">
                            <span>Главная /</span>
                            <span className="active">Наши курсы</span>
                        </div>
                        <h1 className="courses-hero_title">Курсы</h1>
                        <div className="courses-hero_blogs">
                            <div className="courses-hero_blogs-blog">
                                <h3 className="courses-hero_blogs-blog_title">Frontend-разработчик</h3>
                                <p className="courses-hero_blogs-blog_p">Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты</p>
                                <div className="courses-hero_blogs-blog_group">
                                    <NavLink className="courses-hero_blogs-blog_group-link" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <CgArrowLongRight className="courses-hero_blogs-blog_group-icon"/>
                                </div>
                            </div>
                            <div className="courses-hero_blogs-blog">
                                <h3 className="courses-hero_blogs-blog_title">Backend-разработчик</h3>
                                <p className="courses-hero_blogs-blog_p">Специалист, который отвечает за построение логики для воплощения любой идеи. Он собирает фундамент и опорную систему для проекта - от простого сайта для магазина одежды до сложных вычислительных систем нейронных сетей.</p>
                                <div className="courses-hero_blogs-blog_group">
                                    <NavLink className="courses-hero_blogs-blog_group-link" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <CgArrowLongRight className="courses-hero_blogs-blog_group-icon"/>
                                </div>
                            </div>
                            <div className="courses-hero_blogs-blog">
                                <h3 className="courses-hero_blogs-blog_title">UX / UI Дизайнер</h3>
                                <p className="courses-hero_blogs-blog_p">Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных параметров для комфорьного использования продукта.</p>
                                <div className="courses-hero_blogs-blog_group">
                                    <NavLink className="courses-hero_blogs-blog_group-link" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <CgArrowLongRight className="courses-hero_blogs-blog_group-icon"/>
                                </div>
                            </div>
                            <div className="courses-hero_blogs-blog">
                                <h3 className="courses-hero_blogs-blog_title">DevOps - инженер</h3>
                                <p className="courses-hero_blogs-blog_p">Он разбирается в программировании и инфраструктуре и объединяет эти знания для оптимальной работы бизнеса.</p>
                                <div className="courses-hero_blogs-blog_group">
                                    <NavLink className="courses-hero_blogs-blog_group-link" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <CgArrowLongRight className="courses-hero_blogs-blog_group-icon"/>
                                </div>
                            </div>
                            <div className="courses-hero_blogs-blog">
                                <h3 className="courses-hero_blogs-blog_title">Android-разработчик</h3>
                                <p className="courses-hero_blogs-blog_p">Создает, обновляет, усовершенствует мобильные приложения для смартфонов, планшетов, электронных книг, игровых приставок и других девайсов, работающих на операционной системе Android.</p>
                                <div className="courses-hero_blogs-blog_group">
                                    <NavLink className="courses-hero_blogs-blog_group-link" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <CgArrowLongRight className="courses-hero_blogs-blog_group-icon"/>
                                </div>
                            </div>
                            <div className="courses-hero_blogs-blog">
                                <h3 className="courses-hero_blogs-blog_title">Java-разработчик</h3>
                                <p className="courses-hero_blogs-blog_p">Cпециалист, который создает приложения разной сложности, используя старейший язык программирования.</p>
                                <div className="courses-hero_blogs-blog_group">
                                    <NavLink className="courses-hero_blogs-blog_group-link" to={"/Courses-java"}>Подробнее</NavLink>
                                    <CgArrowLongRight className="courses-hero_blogs-blog_group-icon"/>
                                </div>
                            </div>
                            <div className="courses-hero_blogs-blog">
                                <h3 className="courses-hero_blogs-blog_title">С++ - разработчик</h3>
                                <p className="courses-hero_blogs-blog_p">Занимается разработкой высокопроизводительных и высоконагруженных систем, таких как поисковики, драйверы, игры и приложения. </p>
                                <div className="courses-hero_blogs-blog_group">
                                    <NavLink className="courses-hero_blogs-blog_group-link" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <CgArrowLongRight className="courses-hero_blogs-blog_group-icon"/>
                                </div>
                            </div>
                            <div className="courses-hero_blogs-blog">
                                <h3 className="courses-hero_blogs-blog_title">IOS - разработчик</h3>
                                <p className="courses-hero_blogs-blog_p">iOS разработчик - идеальная профессия для того, кто любит мобильную продукцию компании Apple. Специальность позволяет совмещать творческие способности.</p>
                                <div className="courses-hero_blogs-blog_group">
                                    <NavLink className="courses-hero_blogs-blog_group-link" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <CgArrowLongRight className="courses-hero_blogs-blog_group-icon"/>
                                </div>
                            </div>
                            <div className="courses-hero_blogs-blog">
                                <h3 className="courses-hero_blogs-blog_title">Python - разработчик</h3>
                                <p className="courses-hero_blogs-blog_p">Cпециалист, который применяет в работе многоуровневый язык программирования Python.</p>
                                <div className="courses-hero_blogs-blog_group">
                                    <NavLink className="courses-hero_blogs-blog_group-link" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <CgArrowLongRight className="courses-hero_blogs-blog_group-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _CoursesHero;