import React from 'react';
import {NavLink} from "react-router-dom";

const _CoursesFrontendSection1 = () => {
    return (
        <>
            <div id="section-one">
                <div className="container">
                    <div className="section-one">
                        <div className="section-one_links">
                            <span>Главная /</span>
                            <span>Наши курсы /</span>
                            <span className="active">Frontend- разработчик</span>
                        </div>
                        <div className="section-one_group">
                            <div className="section-one_group-left">
                                <h1 className="section-one_group-left_title">Frontend-разработчик</h1>
                                <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции </p>
                                <NavLink className="section-one_group-left_btn" to={"/Register-course"}>Купить курс за 46 $ </NavLink>
                            </div>
                            <div className="section-one_group-right">
                                <div className="section-one_group-right_group">
                                    <p>Доступ: </p>
                                    <span>6 недель</span>
                                </div>
                                <div className="section-one_group-right_group">
                                    <p>В курс входит:  </p>
                                    <span>3 модулей</span> <br/>
                                    <span>60материалов</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _CoursesFrontendSection1;