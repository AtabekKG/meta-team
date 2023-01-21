import React from 'react';
import {NavLink} from "react-router-dom";

const _Subscribe = () => {
    return (
        <>
           <div id="subscribe">
               <div className="container">
                   <div className="subscribe">
                       <div className="subscribe-desc">
                           <h2>Подпишитесь сейчас за 19,00 $ / мес</h2>
                           <p>И получите доступ к материалам и кейсам, а также к новым мастер-классам </p>
                       </div>
                       <div className="subscribe-buttons">
                           <NavLink className="subscribe-buttons_first">Оформить подписку</NavLink>
                           <NavLink className="subscribe-buttons_second" to={"/Subscribe_package"}>Подробнее о пакетах </NavLink>
                       </div>
                   </div>
               </div>
           </div>
        </>
    );
};

export default _Subscribe;