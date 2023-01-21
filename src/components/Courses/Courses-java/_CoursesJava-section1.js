import React from 'react';
import {NavLink} from "react-router-dom";

const _CoursesJavaSection1 = () => {
    return (
        <>
            <div id="section-one">
                <div className="container">
                    <div className="section-one">
                        <div className="section-one_links">
                            <span>Главная /</span>
                            <span>Мастер классы /</span>
                            <span className="active">Реактивное программирование на Java</span>
                        </div>
                        <div className="section-one_group">
                            <div className="section-one_group-left">
                                <h1 className="section-one_group-left_title">Реактивное программирование на Java : как, зачем и стоит ли? Часть 1 </h1>
                                <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции </p>
                                <NavLink className="section-one_group-left_btn">Купить масстер-класс за 46 $</NavLink>
                            </div>
                            <div className="section-one_group-right">
                                <div className="section-one_group-right_group">
                                    <p>Доступ: </p>
                                    <span>6 недель</span>
                                </div>
                                <div className="section-one_group-right_group">
                                    <p>В мастер-класс входит: </p>
                                    <span>5 уроков</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _CoursesJavaSection1;