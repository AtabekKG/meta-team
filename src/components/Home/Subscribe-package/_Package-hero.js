import React from 'react';
import {BsCheck2} from "react-icons/bs";

const _PackageHero = () => {
    return (
        <>
            <div id="package-hero">
                <div className="container">
                    <div className="package-hero">
                        <div className="package-hero_links">
                            <span>Главная /</span>
                            <span className="active">Пакет участия</span>
                        </div>
                        <h1 className="package-hero_title">Выберите свой пакет участия</h1>
                        <div className="package-hero_blogs">
                            <div className="package-hero_blogs-blog">
                                <p className="package-hero_blogs-blog_month">Месяц +</p>
                                <p className="package-hero_blogs-blog_price">105,00 $</p>
                                <button className="package-hero_blogs-blog_btn">Ежемесячно</button>
                                <div className="package-hero_blogs-blog_desc">
                                    <div className="package-hero_blogs-blog_desc-group">
                                        <BsCheck2 className="package-hero_blogs-blog_desc-group_icon"/>
                                        <span>Все статьи</span>
                                    </div>
                                </div>
                                <button className="package-hero_blogs-blog_subscribe-btn">Оформить подписку</button>
                            </div>
                            <div className="package-hero_blogs-blog">
                                <p className="package-hero_blogs-blog_month">Месяц +</p>
                                <p className="package-hero_blogs-blog_price">105,00 $</p>
                                <button className="package-hero_blogs-blog_btn">Ежемесячно</button>
                                <div className="package-hero_blogs-blog_desc">
                                    <div className="package-hero_blogs-blog_desc-group">
                                        <BsCheck2 className="package-hero_blogs-blog_desc-group_icon"/>
                                        <span>Все статьи</span>
                                    </div>
                                    <div className="package-hero_blogs-blog_desc-group">
                                        <BsCheck2 className="package-hero_blogs-blog_desc-group_icon"/>
                                        <span>Все мастер классы</span>
                                    </div>
                                </div>
                                <button className="package-hero_blogs-blog_subscribe-btn">Оформить подписку</button>
                            </div>
                            <div className="package-hero_blogs-blog">
                                <p className="package-hero_blogs-blog_month">Месяц +</p>
                                <p className="package-hero_blogs-blog_price">105,00 $</p>
                                <button className="package-hero_blogs-blog_btn">Ежемесячно</button>
                                <div className="package-hero_blogs-blog_desc">
                                    <div className="package-hero_blogs-blog_desc-group">
                                        <BsCheck2 className="package-hero_blogs-blog_desc-group_icon"/>
                                        <span>Все статьи</span>
                                    </div>
                                    <div className="package-hero_blogs-blog_desc-group">
                                        <BsCheck2 className="package-hero_blogs-blog_desc-group_icon"/>
                                        <span>Все мастер классы</span>
                                    </div>
                                    <div className="package-hero_blogs-blog_desc-group">
                                        <BsCheck2 className="package-hero_blogs-blog_desc-group_icon"/>
                                        <span>6 новых статей каждый месяц</span>
                                    </div>
                                    <div className="package-hero_blogs-blog_desc-group">
                                        <BsCheck2 className="package-hero_blogs-blog_desc-group_icon"/>
                                        <span>Доступ к курсу “DevOps - инженер”</span>
                                    </div>
                                </div>
                                <button className="package-hero_blogs-blog_subscribe-btn">Оформить подписку</button>
                            </div>
                        </div>
                        <p className="package-hero_p">Списания будут автоматическими. Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _PackageHero;