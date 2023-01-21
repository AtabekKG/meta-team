import React from 'react';
import {NavLink} from "react-router-dom";

const _CoursesFrontendSection2 = () => {
    return (
        <>
            <div id="frontend-two">
                <div className="container">
                    <div className="frontend-two">
                        <p className="frontend-two_top">Что, как и почему</p>
                        <h1 className="frontend-two_title">О КУРСЕ</h1>
                        <div className="frontend-two_group">
                            <div className="frontend-two_group-left">
                                <p>Это всё, что ты видишь и кликаешь на сайте или в приложении - картинки, кнопочки,
                                    анимации и даже бесячая реклама.</p>
                                <p>Самые главные инструменты frontend разработки сайтов это JavaScript, HTML и CSS.</p>
                                <p>В Кыргызстане фронтенд-разработчики востребованы практически в каждой IT-компании.
                                    Это также одно из самых популярных направлений для фриланса и удаленной работы. Все
                                    потому, что в современном мире сайт нужен каждому</p>
                                <p>В режиме мастер-класса он продемонстрировал, почему так важен неблокирующий
                                    ввод-вывод, в чем минусы классической многопоточности, в каких ситуациях нужна
                                    реактивность, и что она может дать. А еще описал недостатки реактивного подхода.</p>
                            </div>
                            <div className="frontend-two_group-right">
                                <div className="frontend-two_group-right_group">
                                    <p>Доступ: </p>
                                    <span>Навсегда</span>
                                </div>
                                <div className="frontend-two_group-right_group">
                                    <p>В курс входит:  </p>
                                    <span>3 модулей</span> <br/>
                                    <span>60материалов</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="frontend-two_h3">Для кого это </h3>
                        <ul className="frontend-two_list-group">
                            <li>Для людей  с математическим складом ума.</li>
                        </ul>
                        <h3 className="frontend-two_h3">Вы изучтие</h3>
                        <div className="frontend-two_lists">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Soft skills. Нетехнические навыки</li>
                            </ul>
                            <ul>
                                <li>Кроссплатформенность и кроссбраузерность</li>
                                <li>Управление версиями</li>
                                <li>Тестирование и отладка</li>
                            </ul>
                        </div>
                        <h3 className="frontend-two_h3">К каким результатам вас может привести этот курс?</h3>
                        <p className="frontend-two_p">С каждым днем, с каждым месяцем, с каждым годом вы будете физически ощущать, как ваши мечты и цели воплощаются в реальность. И каждый день, каждый год вы будете видеть, что вы живете той жизнью, которую сами для себя выбрали, и именно по тому сценарию, который вы сами для себя создали.</p>
                        <p className="frontend-two_p">Ваш новый навык планирования изменит вашу жизнь и поможет отточить умение выстраивать дела в правильной последовательности. Сначала вы будете видеть на неделю вперед, потом - на месяц, потом - на год, а потом вы будете видеть весь свой путь. Система планирования Кайдзен позволит вам правильно планировать правильные вещи и увеличить степень контроля над своей жизнью, чтобы сделать её счастливой и успешной.</p>
                        <h3 className="frontend-two_h3">Учитесь, применяйте полученные на курсе знания и будьте счастливы!</h3>
                        <div className="frontend-two_buttons">
                            <NavLink className="frontend-two_buttons-btn frontend-two_buttons-first">Купить мастер-класс </NavLink>
                            <NavLink className="frontend-two_buttons-btn frontend-two_buttons-second">Смотреть программу</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _CoursesFrontendSection2;