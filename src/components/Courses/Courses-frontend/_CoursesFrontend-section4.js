import React from 'react';
import Frontend_four_img1 from '../../../image/pencil.png';
import Frontend_four_img2 from '../../../image/star.png';
import Frontend_four_img3 from '../../../image/time.png';

const _CoursesFrontendSection4 = () => {
    return (
        <>
            <div id="frontend-four">
                <div className="container">
                    <div className="frontend-four">
                        <div className="frontend-four_blog">
                            <div className="frontend-four_blog-bg">
                                <img src={Frontend_four_img1} alt=""/>
                            </div>
                            <h2 className="frontend-four_blog-title">100 материалов</h2>
                            <p>Только полезная информация, никакой воды. Применяйте эти знания первыми!</p>
                        </div>
                        <div className="frontend-four_blog">
                            <div className="frontend-four_blog-bg">
                                <img src={Frontend_four_img2} alt=""/>
                            </div>
                            <h2 className="frontend-four_blog-title">100% эксклюзив</h2>
                            <p>Курс записан эксклюзивно для нашей платформы</p>
                        </div>
                        <div className="frontend-four_blog">
                            <div className="frontend-four_blog-bg">
                                <img src={Frontend_four_img3} alt=""/>
                            </div>
                            <h2 className="frontend-four_blog-title">В любое время, в любом месте</h2>
                            <p> Занимайтесь как вам удобно и где угодно, на своем мобильном или компьютере</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _CoursesFrontendSection4;