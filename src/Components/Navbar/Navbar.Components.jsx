import React from "react";
import { BiChevronRight, BiSearch, BiMenu, BiChevronDown } from "react-icons/bi"

const NavSm = () => {
    return (
        <>
        <div className="text-white font-bold flex items-center justify-between">
            <div >
                <h3>
                  It ALL Starts Here! </h3>
                  <span className="text-grey-300 text-xs flex items-center ">Chandighar <BiChevronRight/></span>  
               
            </div>
            <div className="w-8 h-8"><BiSearch  className="w-full h-full"/></div>
        </div></>
    )
};
const NavMd = () => {
    return(
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch/>
            <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
        </div>
    )
};
const NavLg = () => {
    return <>
        <div className="container mx-auto px-4 flex item-center justify-between">
        <div className="flex item-center w-1/2 p-2 gap-2">
            <div className="  ">
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo"
                className="w-full h-full"/>
            </div>
            <div className="w-full h-10 flex items-center gap-3 bg-white px-3 rounded-md">
            <BiSearch/> 
            <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
        </div>
        </div>
        <div className="flex item-center ">
        <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">Chandighar <BiChevronDown/></span>
        <button className="bg-red-500 text-white px-3 h-6 text-sm rounded m-4">Sign in</button>
        <div className="w-12 h-14 text-white">
        <BiMenu className="w-full h-full"/>
        </div>
        </div>
        </div>  </>
};
 
const Navbar = () => {
    return ( <>
    <nav className="bg-gray-800 p-1">
        <div className="md:hidden">
            <NavSm/>
        </div>
        <div className="hidden md:flex lg:hidden">
            <NavMd/>
        </div>
        <div className="hidden lg:flex">
            <NavLg/>
        </div>
        </nav>
        </>
    )
;};

export default Navbar;