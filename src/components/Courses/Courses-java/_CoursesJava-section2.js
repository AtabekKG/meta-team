import React from 'react';
import {NavLink} from "react-router-dom";

const _CoursesJavaSection2 = () => {
    return (
        <>
            <div id="section-two">
                <div className="container">
                    <div className="section-two">
                        <p className="section-two_title">Что, как и почему</p>
                        <div className="section-two_group">
                            <div className="section-two_group-left">
                                <h1 className="section-two_group-left_title"> О МАСТЕР-КЛАССЕ</h1>
                                <p>В режиме мастер-класса он продемонстрировал, почему так важен неблокирующий ввод-вывод, в чем минусы классической многопоточности, в каких ситуациях нужна реактивность, и что она может дать. А еще описал недостатки реактивного подхода.</p>
                            </div>
                            <div className="section-two_group-right">
                                <div className="section-two_group-right_group">
                                    <p>Доступ: </p>
                                    <span>6 недель</span>
                                </div>
                                <div className="section-two_group-right_group">
                                    <p>В мастер-класс входит: </p>
                                    <span>5 уроков</span>
                                </div>
                            </div>
                        </div>
                        <h2>Переходите к видеоурокам, что бы научится: </h2>
                        <ul className="section-two_list-group">
                            <li>Чтению  файла (blocked on reading file);</li>
                            <li>Что бы научиться базе данных (blocked on reading from DB);</li>
                            <li>Научится использовать в  сложных вычислениях (blocked on heavy calculations);</li>
                            <li>На ответе от клиента (blocked on responding the client).</li>
                        </ul>
                        <div className="section-two_buttons">
                            <NavLink  className="section-two_buttons-button section-two_buttons-first">Купить мастер-класс </NavLink>
                            <NavLink className="section-two_buttons-button section-two_buttons-second">Смотреть программу</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _CoursesJavaSection2;