import React from 'react';
import {NavLink} from "react-router-dom";
import Read_user_img from '../../../image/readuser.png';

const _ReadComment = () => {
    return (
        <>
            <div id="read-comment">
                <div className="container">
                    <div className="read-comment">
                        <h1 className="read-comment_title">Комментарии</h1>
                        <div className="read-comment_block">
                            <div className="read-comment_block-bg">
                                <img src={Read_user_img} alt=""/>
                            </div>
                            <div className="read-comment_block-desc">
                                <h2>Вы не зарегистрировались!</h2>
                                <div>
                                    <p>Чтобы оставить комментарий, пожалуйста авторизуйтесь или зарегитрируйтесь.</p>
                                </div>
                            </div>
                            <NavLink className="read-comment_block-link">Зарегистрироваться</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _ReadComment;