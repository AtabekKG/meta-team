import React from 'react';
import _ReadHero from "./_Read-hero";
import _ReadComment from "./_Read-comment";
import _OtherArticles from "./_Other-articles";

const HomeRead = () => {
    return (
        <>
            <_ReadHero/>
            <_ReadComment/>
            <_OtherArticles/>
        </>
    );
};

export default HomeRead;