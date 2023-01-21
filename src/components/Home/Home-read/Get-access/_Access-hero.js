import React from 'react';
import Access_hero_img from "../../../../image/homereadhero.png";

const _AccessHero = () => {
    return (
        <>
            <div id="access-hero">
                <div className="container">
                    <div className="access-hero">
                        <div className="access-hero_top">
                            <span>Главная/</span>
                            <span className="active">Статья/</span>
                            <span className="active">Мы подготовили...</span>
                        </div>
                        <p className="access-hero_date">11.09.2022</p>
                        <h1 className="access-hero_title">Мы подготовили подборку самых популярных курсов  по направлению Java в IBS Training Center.</h1>
                        <p className="access-hero_p">Когда-то ни один крупный проект не обходился без применения функционального и асинхронного программирования. Эти подходы до сих пор популярны за счет своих преимуществ: они помогают выдерживать большие нагрузки и писать эффективный код, не теряя в скорости разработки. </p>
                        <div className="access-hero_bg">
                            <img src={Access_hero_img} alt=""/>
                        </div>
                        <ul className="access-hero_list-group">
                            <li>Какие существуют конфигурации для Spring Framework 5;</li>
                            <li>Как работать с REST-сервисами и документацией при помощи Swagger.</li>
                            <li>Что такое бины и как с ними работать;</li>
                            <li>Что такое Концепция IoC;</li>
                            <li>Примеры использования AOP;</li>
                        </ul>
                        <br/>
                        <br/>
                        <p>Ищите способы ускорить проектирование приложений? Используйте Spring Framework 5. Этот легковесный каркас с открытыми исходными текстами не связан с конкретной моделью программирования и поэтому универсален. Его можно использовать не только для крупных корпоративных кейсов, но и для небольших проектов.</p>
                        <p>Интересно? Присоединяйтесь к нашему курсу и узнайте об основных модулях этого фреймворка, вариантах их использования и как Spring Framework работает совместно с другими технологиями.</p>
                        <p>Если вы уже знакомы с Spring Framework 5 и хотите углубить свои знания, то этот курс для вас! Вместе с IBS Training Center вы изучите темы, необходимые для профессионального применения Spring Framework на практике. Вы познакомитесь со Spring REST, HATEOAS и CORS, научитесь использовать сериализацию и ограничение данных, освоите тонкости применения аннотации @Transactional и оптимистических транзакций.</p>
                        <p>Также вас ждет много практики, разбор реальных кейсов и другие важные темы:</p>
                        <br/>
                        <ul className="access-hero_list-group">
                            <li>JWT-авторизация;</li>
                            <li>Практическое применение реактивного программирования с использованием WebFlux;</li>
                            <li>Тестирование Spring-сервисов</li>
                            <li>Планировщик задач и Actuator</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _AccessHero;