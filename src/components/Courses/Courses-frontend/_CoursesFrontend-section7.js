import React from 'react';
import Slider_boy_img from "../../../image/reactslick1.png";
import Slider_girl_img from "../../../image/reactslick2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const _CoursesFrontendSection7 = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const block = [{
        image: Slider_boy_img,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: Slider_girl_img,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: Slider_boy_img,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: Slider_girl_img,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: Slider_boy_img,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: Slider_girl_img,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: Slider_boy_img,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }
    ]
    return (
        <>
            <div id="frontend-seven">
                <div className="container">
                    <div className="frontend-seven">
                        <h3>Отзывы наших студентов</h3>
                        <Slider className="slider" {...setting}>
                            {block.map((el, idx) => (
                                <div  className='frontend-seven_blog' key={idx}>
                                    <div className="frontend-seven_blog-bg">
                                        <img src={el.image} alt=""/>
                                    </div>
                                    <h1>{el.name}</h1>
                                    <p>
                                        {el.desc}
                                    </p>
                                    <span className="frontend-seven_blog-date">{el.date}</span>
                                </div>))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _CoursesFrontendSection7;