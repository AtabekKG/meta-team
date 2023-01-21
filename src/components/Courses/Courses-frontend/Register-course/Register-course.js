import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";

const RegisterCourse = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div id="register-course">
                <div className="container">
                    <div className="register-course">
                        <div className="register-course_links">
                            <span>Главная/</span>
                            <span className="active">Зарегистрироваться на курс</span>
                        </div>
                        <h1 className="register-course_title">Зарегистрироваться на курс</h1>
                        <div className="register-course_group">
                            <div className="register-course_group-blog">
                                <span className="register-course_group-blog_subtitle">Курс</span>
                                <h2 className="register-course_group-blog_title">Frontend-разработчик</h2>
                                <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. </p>
                                <hr/>
                                <span className="register-course_group-blog_subtitle">Лектор</span>
                                <h2 className="register-course_group-blog_title">Евгений Александрович</h2>
                                <p>Frontend разработчик</p>
                                <hr/>
                                <div className="register-course_group-blog_group">
                                    <div className="register-course_group-blog_group-blog">
                                        <span>В курс входит </span>
                                        <p>3 модулей <br/>60материалов</p>
                                    </div>
                                    <div className="register-course_group-blog_group-blog">
                                        <span>Доступ </span>
                                        <p>Навсегда</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="register-course_group-blog_text">* - материалы включают уроки, тесты и задания. Некоторые материалы могут быть недоступны при самостоятельном обучении. </div>
                            </div>
                            <div className="register-course_group-form">
                                <form id="form">
                                    <div className="blog">
                                        <fieldset>
                                            <legend>Ф.И.О*</legend>
                                            <input name="text" type="text"/>
                                        </fieldset>
                                    </div>
                                    <div className="blog">
                                        <fieldset>
                                            <legend>Телефон*</legend>
                                            <select>
                                                <option>+996</option>
                                                <option>+998</option>
                                                <option>+992</option>
                                            </select>
                                            <input name="phone" type="tel"/>
                                        </fieldset>
                                    </div>
                                    <div className="blog">
                                        <fieldset>
                                            <legend>E mail*</legend>
                                            <input name="email" type="email"/>
                                        </fieldset>
                                    </div>
                                    <p className="form-title">Выберите платежную карту</p>
                                    <div className="form-group">
                                        <div className="form-group_block">
                                            <input type="radio" name="money"/>
                                            <span>Visa</span>
                                        </div>
                                        <div className="form-group_block">
                                            <input type="radio" name="money"/>
                                            <span>MasterCard</span>
                                        </div>
                                    </div>
                                    <div className="blog">
                                        <fieldset>
                                            <legend>Номер карты *</legend>
                                            <input name="number" type="number"/>
                                        </fieldset>
                                    </div>
                                    <div className="form-group">
                                        <div className="first-block blog">
                                            <fieldset>
                                                <legend>ММ/ГГ *</legend>
                                                <input name="date" type="date"/>
                                            </fieldset>
                                        </div>
                                        <div className="second-block blog">
                                            <fieldset>
                                                <legend>CVC *</legend>
                                                <input name="number" type="number"/>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <NavLink onClick={handleOpen} className="form-btn">Оплатить 225.00$</NavLink>
                                    <div className="form-check">
                                        <input name="check" type="checkbox"/>
                                        <p>Я ознакомился и согласен с Условиями оказания услуг</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {isOpen && (
                            <div className="modal-block">
                                <div className="modal-block_block">
                                    <h1 className="modal-block_block-title">Благодарим за покупку!!!</h1>
                                    <p>Теперь вам доступен  курс “Frontend разработчик”</p>
                                    <NavLink className="modal-block_block-link" to={"/Buyed-courses"}>Ок, посмотреть покупку  </NavLink>
                                    <AiOutlineClose className="modal-block_block-close" onClick={handleClose}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterCourse;

