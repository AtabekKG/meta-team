import React from 'react';
import _Hero from "./_Hero";
import _Blogs from "./_Blogs";
import _Subscribe from "./_Subscribe";
import _Questions from "./_Questions";
import _Form from "./_Form";

const Home = () => {
    return (
        <>
            <_Hero/>
            <_Blogs/>
            <_Subscribe/>
            <_Questions/>
            <_Form/>
        </>
    );
};

export default Home;