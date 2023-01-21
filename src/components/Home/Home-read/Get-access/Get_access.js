import React from 'react';
import _AccessHero from "./_Access-hero";
import _AccessComments from "./_Access-comments";
import _OtherArticles from "../_Other-articles";

const GetAccess = () => {
    return (
        <>
           <_AccessHero/>
            <_AccessComments/>
            <_OtherArticles/>
        </>
    );
};

export default GetAccess;