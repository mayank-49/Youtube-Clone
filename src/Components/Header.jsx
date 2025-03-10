import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../assets/yt-logo.png";
import ytLogoMobile from "../assets/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";
import Loader2 from "../shared/loader2";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`searchResult/${searchQuery}`); //navigate hume hmari query pr le jaega
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticy top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader2 />}
        <div className="flex h-5 items-center">
            {pageName !== "video" && (
                <div
                    className="hidden md:flex md:mr-3 cursor-pointer items-center justify-center h-10 w-10 p-2  rounded-full hover:bg-[#303030]/[0.6]"
                    onClick={mobileMenuToggle}
                >
                    {mobileMenu ? (
                        <CgClose className="text-white text-xl" />
                    ) : (
                        <SlMenu className="text-white text-xl" />
                    )}
                </div>
            )}
            <Link to={"/"} className="flex h-5 items-center">
                <img className="h-full hidden dark:md:block" src={ytLogo} alt="" />
                <img className="h-full dark:md:hidden" src={ytLogoMobile} alt="" />
            </Link>
      </div>
      <div className="group flex items-center">
            <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border-2 border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="text-white text-xl"/>
                </div>
                <input type="text" className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] text-md md:text-lg" onChange={(e)=>setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery} placeholder="Search"/>

            </div>
            <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1] cursor-pointer"><IoIosSearch className="text-white text-xl"/></button>
        </div>
        <div className="flex items-center ">
            <div className="hidden md:flex">
                <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <RiVideoAddLine className="text-white text-xl cursor-pointer"/>
                </div>
                <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <FiBell className="text-white text-xl cursor-pointer"/>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="https://xsgames.co/randomusers/assets/avatars/male/40.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
