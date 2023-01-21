import React from 'react';

const _Form = () => {
    return (
        <>
            <div id="form">
                <div className="container">
                    <div className="form">
                        <div className="form-title">
                            <h1>Оставить заявку</h1>
                            <p>Заполните краткую форму с ключевым вопросами, и мы подготовимся к разговору с вами</p>
                        </div>
                        <div className="form-form">
                            <form action="" id="inner-form">
                                <div className="form-form_blog">
                                    <span>ФИО*</span>
                                    <input type="text" name="surname-name"/>
                                </div>
                                <div className="form-form_blog">
                                    <span>Номер телефон*</span>
                                    <input type="tell" name="phone"/>
                                </div>
                                <div className="form-form_blog">
                                    <span>Email*</span>
                                    <input type="email" name="email"/>
                                </div>
                                <button className="form-form_btn">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _Form;