import React from 'react';
import User_image from '../../../../image/userimage.png';

const _AccessComments = () => {
    return (
        <>
            <div id="access-comments">
                <div className="container">
                    <div className="access-comments">
                        <h1 className="access-comments_title">Комментарии</h1>
                        <div className="access-comments_blog">
                            <textarea placeholder="Ваш комментарий"></textarea>
                            <button className="access-comments_blog-btn">Отправить</button>
                        </div>
                        <div className="access-comments_blogs">
                            <div className="access-comments_blogs-blog">
                                <div className="access-comments_blogs-blog_top-group">
                                    <div className="access-comments_blogs-blog_top-group_bg">
                                        <div>
                                            <img src={User_image} alt=""/>
                                        </div>
                                    </div>
                                    <div className="access-comments_blogs-blog_top-group_desc">
                                        <div className="access-comments_blogs-blog_top-group_desc-group">
                                            <span className="access-comments_blogs-blog_top-group_desc-group_user-name">Осмонова Нурай</span>
                                            <span className="access-comments_blogs-blog_top-group_desc-group_time">/  Около минуты назад</span>
                                        </div>
                                        <p className="access-comments_blogs-blog_top-group_desc-p">Очень понравились
                                            уроки. Все более чем понятно! </p>
                                        <details>
                                            <summary>Ответить</summary>
                                            {/*<div></div>*/}
                                        </details>
                                    </div>
                                </div>
                            </div>
                            <div className="access-comments_blogs-blog">
                                <div className="access-comments_blogs-blog_top-group">
                                    <div className="access-comments_blogs-blog_top-group_bg">
                                        <div>
                                            <span className="user-letter">K</span>
                                        </div>
                                    </div>
                                    <div className="access-comments_blogs-blog_top-group_desc">
                                        <div className="access-comments_blogs-blog_top-group_desc-group">
                                            <span className="access-comments_blogs-blog_top-group_desc-group_user-name">Осмонова Нурай</span>
                                            <span className="access-comments_blogs-blog_top-group_desc-group_time">/  Около минуты назад</span>
                                        </div>
                                        <p className="access-comments_blogs-blog_top-group_desc-p">Очень понравились
                                            уроки. Все более чем понятно! </p>
                                        <details>
                                            <summary>Ответить</summary>
                                            {/*<div></div>*/}
                                        </details>
                                    </div>
                                </div>
                            </div>
                            <div className="access-comments_blogs-blog">
                                <div className="access-comments_blogs-blog_top-group">
                                    <div className="access-comments_blogs-blog_top-group_bg">
                                        <div>
                                            <span className="user-letter">T</span>
                                        </div>
                                    </div>
                                    <div className="access-comments_blogs-blog_top-group_desc">
                                        <div className="access-comments_blogs-blog_top-group_desc-group">
                                            <span className="access-comments_blogs-blog_top-group_desc-group_user-name">Осмонова Нурай</span>
                                            <span className="access-comments_blogs-blog_top-group_desc-group_time">/  Около минуты назад</span>
                                        </div>
                                        <p className="access-comments_blogs-blog_top-group_desc-p">Очень понравились
                                            уроки. Все более чем понятно! </p>
                                        <details>
                                            <summary>Ответить</summary>
                                            <div className="details-block">
                                                <div className="bg">
                                                    <div>
                                                        <span className="user-letter">T</span>
                                                    </div>
                                                </div>
                                                <div className="desc">
                                                    <div className="desc-group">
                                                        <span
                                                            className="desc-group_user-name">Таалай Бирдемке</span>
                                                        <span
                                                            className="desc-group_time">/  24.10.2021</span>
                                                    </div>
                                                    <p className="desc-p">Как мне
                                                        кажется, в конце видео, необходимо было сказать о том, что
                                                        информация - это то(в данном случае число) с помощью чего можно
                                                        устранить некую неопределенность(неизвестность) А так вроде все
                                                        замечательно.</p>
                                                    <span className="desc-answer">Ответить</span>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                            <div className="access-comments_blogs-blog">
                                <div className="access-comments_blogs-blog_top-group">
                                    <div className="access-comments_blogs-blog_top-group_bg">
                                        <div>
                                            <img src={User_image} alt=""/>
                                        </div>
                                    </div>
                                    <div className="access-comments_blogs-blog_top-group_desc">
                                        <div className="access-comments_blogs-blog_top-group_desc-group">
                                            <span className="access-comments_blogs-blog_top-group_desc-group_user-name">Осмонова Нурай</span>
                                            <span className="access-comments_blogs-blog_top-group_desc-group_time">/  24.10.2021</span>
                                        </div>
                                        <p className="access-comments_blogs-blog_top-group_desc-p">Мой первый день в мире программирования ✨ Первый ролик 😊 Вы просто гениально объясняете, продолжаю смотреть 😉  Спасибо!</p>
                                        <details>
                                            <summary>Ответить</summary>
                                            {/*<div></div>*/}
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="access-comments_btn">Смотреть все</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _AccessComments;