import React from "react";

import Navbar from "../Components/Navbar/Navbar.Components";

import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
    return (
 <>
    <Navbar/>
    <HeroCarousal/>
    {props.children}
 </>
);
};

export default DefaultLayout;