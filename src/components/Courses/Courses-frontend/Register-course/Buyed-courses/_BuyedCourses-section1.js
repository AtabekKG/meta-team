import React from 'react';

const _BuyedCoursesSection1 = () => {
    return (
        <>
            <div id="first-section">
                <div className="container">
                    <div className="first-section">
                        <div className="first-section_links">
                            <span>Главная /</span>
                            <span>Мастер классы /</span>
                            <span className="active">Frontend разработчик</span>
                        </div>
                        <div className="first-section_group">
                            <div className="first-section_group-desc">
                                <h1>Frontend-разработчик</h1>
                                <p>Когда нужно переходить от прокачивания личной эффективности к изучению эффективности командой?</p>
                            </div>
                            <div className="first-section_group-range">
                                <h3 className="first-section_group-range_title">Прогресс по курсу</h3>
                                <div className="first-section_group-range_blog">
                                    <span>7%</span>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="first-section_group-range_group">
                                    <div className="first-section_group-range_group-blog">
                                        <p>Пройдено модулей</p>
                                        <span>0/3</span>
                                    </div>
                                    <div className="first-section_group-range_group-blog">
                                        <p>Пройдено материалов</p>
                                        <span>4/60</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _BuyedCoursesSection1;