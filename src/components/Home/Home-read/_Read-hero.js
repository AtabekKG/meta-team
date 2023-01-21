import React from 'react';
import Read_hero_img from '../../../image/homereadhero.png';
import Read_lock_img from '../../../image/readlock.png';
import {NavLink} from "react-router-dom";

const _ReadHero = () => {
    return (
        <>
            <div id="read-hero">
                <div className="container">
                    <div className="read-hero">
                        <div className="read-hero_top">
                            <span>Главная /</span>
                            <span className="active">Статья /</span>
                            <span className="active">Мы подготовили...</span>
                        </div>
                        <span className="read-hero_date">11.09.2022</span>
                        <h1 className="read-hero_title">Мы подготовили подборку самых популярных курсов по направлению
                            Java в IBS Training Center.</h1>
                        <p className="read-hero_p">Когда-то ни один крупный проект не обходился без применения
                            функционального и асинхронного программирования. Эти подходы до сих пор популярны за счет
                            своих преимуществ: они помогают выдерживать большие нагрузки и писать эффективный код, не
                            теряя в скорости разработки. </p>
                        <div className="read-hero_bg">
                            <img src={Read_hero_img} alt=""/>
                        </div>
                        <p className="read-hero_p">В рамках курса от IBS Training Center вы поймете, как работают
                            основные фичи Spring Framework 5, и узнаете:</p>
                        <ul className="read-hero_list-group">
                            <li>Какие существуют конфигурации для Spring Framework 5;</li>
                            <li>Как работать с REST-сервисами и документацией при помощи Swagger.</li>
                            <li>Что такое бины и как с ними работать;</li>
                            <li>Что такое Концепция IoC;</li>
                            <li>Примеры использования AOP;</li>
                        </ul>
                        <div className="read-hero_block">
                            <div className="read-hero_block-bg">
                                <img src={Read_lock_img} alt=""/>
                            </div>
                            <div className="read-hero_block-desc">
                                <h2>Оформите подписку, чтобы посмотреть полную версию</h2>
                                <div>
                                    <p>Вы уже авторизованы?</p>
                                    <span>Авторизуйтесь</span>
                                </div>
                            </div>
                            <NavLink className="read-hero_block-link" to={"/Get_access"}>Получить доступ за 225,00$</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _ReadHero;