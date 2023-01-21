import React from 'react';
import {BsCheck2} from "react-icons/bs";

const _CoursesJavaSection5 = () => {
    return (
        <>
            <div id="section-five">
                <div className="container">
                    <div className="section-five">
                        <h1 className="section-five_title">Процесс обучения</h1>
                        <p className="section-five_p">Каждый из наших мастер-классов состоит из 2-8 уроков. Рекомендуем проходить мастер-класс последовательно, урок за уроком</p>
                        <div className="section-five_group">
                            <div className="section-five_group-blogs">
                                <div className="section-five_group-blogs_blog">
                                    <span>1</span>
                                    <h3>Мастер-класс</h3>
                                    <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам</p>
                                </div>
                                <div className="section-five_group-blogs_blog">
                                    <span>2</span>
                                    <h3>Своё расписание</h3>
                                    <p>Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок</p>
                                </div>
                                <div className="section-five_group-blogs_blog">
                                    <span>3</span>
                                    <h3>Сообщество</h3>
                                    <p> Вы сможете общаться и обмениваться мнениями с другими учениками в комментариях</p>
                                </div>
                                <div className="section-five_group-blogs_blog">
                                    <span>4</span>
                                    <h3>Доступ</h3>
                                    <p>Мы предоставляем вам 6 неделный  доступ к материалам оплаченного мастер-класса</p>
                                </div>
                            </div>
                            <div className="section-five_group-blog">
                                <p className="section-five_group-blog_p">Мастер-класс “Реактивное программирование на Java : как, зачем и стоит ли? Часть 1”</p>
                                <span className="section-five_group-blog_price">46,00 $</span>
                                <div className="section-five_group-blog_group">
                                    <BsCheck2 className="section-five_group-blog_group-icon"/>
                                    <p>Доступ к мастер классу навсегда</p>
                                </div>
                                <div className="section-five_group-blog_group">
                                    <BsCheck2 className="section-five_group-blog_group-icon"/>
                                    <p>Доступны все 5 уроков</p>
                                </div>
                                <div className="section-five_group-blog_group">
                                    <BsCheck2 className="section-five_group-blog_group-icon"/>
                                    <p>Дополнительные материалы</p>
                                </div>
                                <button className="section-five_group-blog_btn">Купить мастер-класс </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _CoursesJavaSection5;