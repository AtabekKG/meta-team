import React from 'react';
import _BuyedCoursesSection1 from "./_BuyedCourses-section1";
import _BuyedCoursesHeader from "./_BuyedCourses-header";
import _BuyedCoursesSection2 from "./_BuyedCourses-section2";
import _AccessComments from "../../../../Home/Home-read/Get-access/_Access-comments";
import _CoursesJavaSection6 from "../../../Courses-java/_CoursesJava-section6";

const BuyedCourses = () => {
    return (
        <>
            <_BuyedCoursesHeader/>
            <_BuyedCoursesSection1/>
            <_BuyedCoursesSection2/>
            <_AccessComments/>
            <_CoursesJavaSection6/>
        </>
    );
};

export default BuyedCourses;