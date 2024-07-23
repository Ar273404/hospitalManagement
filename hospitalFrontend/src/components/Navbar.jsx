import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../index.js";
import { toast } from "react-toastify";
import { ImProfile } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdLogout, MdDashboard }
 from "react-icons/md";
 import {FaBook } from "react-icons/fa";
 import { FcAbout } from "react-icons/fc";


import axios from "axios";
import { url } from "../Api.jsx";

const Navbar = () => {

  const { isAuthenticated, setIsAuthenticated ,user} = useContext(Context);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigateTo = useNavigate();
  
  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleProfileToggle = () => {
    setProfileOpen(!profileOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.get(
        `${url}/user/patient/logout`,
        {
          withCredentials: true,
        }
      );
      toast.success("Logout successful");
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const goLogin = () => {
    navigateTo("/login");
  };

  return (
    <div>
      <header className="fixed top-0 w-full flex shadow-xl py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide ">
        <div className="flex items-center justify-between w-full">
          <a href="/">
            <img
              src="https://st3.depositphotos.com/1005404/12571/i/450/depositphotos_125715264-stock-photo-small-build-hospital.jpg"
              alt="logo"
              className="w-24"
            />
          </a>
          <ul className="flex  gap-x-5 z-50  profilehidden ">
            <li className="lg:py-3 px-3 ">
              <Link
                to={"/"}
                className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]">
                Home
              </Link>
            </li>
            <li className="lg:py-3 px-3 ">
              <Link
                to={"/appointment"}
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">
                Appointment
              </Link>
            </li>
            <li className=" lg:py-3 px-3">
              <Link
                to={"/about"}
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">
                About
              </Link>
            </li>
            <li className=" lg:py-3 px-3">
              <Link
                to={"/"}
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">
                Admin
              </Link>
            </li>
          </ul>

          <div className="flex  profilehidden  max-lg:ml-auto space-x-3">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={handleProfileToggle}
                  className="flex items-center px-4 py-2 rounded-full text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100">
                  <img
                    src="https://readymadeui.com/profile_6.webp"
                    alt="profile"
                    className="w-7 h-7 mr-3 rounded-full"
                  />
                  {user.firstName} {user.lastName}
                  <IoIosArrowDropdownCircle className="text-lg ml-1" />
                </button>

                {profileOpen && (
                  <ul className="fixed right-7 top-16 z-[1000] mt-1 w-max shadow-lg bg-white py-2 border border-gray-700 rounded-lg max-h-96 overflow-auto">
                    <Link to={"/profile"}>
                      <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                        <ImProfile className="mr-1 w-4 h-full" />
                        View Profile
                      </li>
                    </Link>

                    <li
                      onClick={handleLogout}
                      className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                      <MdLogout className="w-4 h-full mr-1 text-red-800" />
                      Logout
                    </li>
                    <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                      <MdDashboard className="w-4 h-full mr-1 text-neutral-900" />
                      Dashboard
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <button
                onClick={goLogin}
                className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                Login
              </button>
            )}
          </div>
          <button id="toggleOpen" className="md:hidden" onClick={handleToggle}>
            <GiHamburgerMenu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {isSidebarOpen && (
        <div className="fixed inset-y-0 left-0 bg-white w-64 z-50 shadow-lg">
          <a href="/">
            <img
              src="https://www.logomaker.com/wp-content/uploads/2018/06/first-aid-symbol-picture-id816820042.jpg"
              alt="logo"
              className="w-28 mt-4"
            />
          </a>
          <button
            className="absolute top-4 right-4 z-50 rounded-full bg-white p-3"
            onClick={handleToggle}>
            <ImCross className="w-7 h-7 text-blue-700" />
          </button>

          <ul className="space-y-3 mt-10 px-6">
            <ul className="mt-4">
              <li>
                <Link
                  to={"/"}
                  className="text-black hover:text-blue-600  flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                  <FaBook className="mr-1 w-6 font-bold text-blue-700" />
                  Home
                </Link>
              </li>
            </ul>
            <ul className="mt-4">
              <li>
                <Link
                  to={"/appointment"}
                  className="text-black hover:text-blue-600  flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                  <FaBook className="mr-1 w-6 font-bold text-blue-700" />
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="text-black hover:text-blue-600  flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                  <FcAbout className="mr-1 w-7 font-bold text-blue-700" />
                  AboutUs
                </Link>
              </li>
            </ul>
            <ul className="mt-4">
              <li>
                <Link
                  to={"/profile"}
                  className="text-black hover:text-blue-600  flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                  <ImProfile className="mr-1 w-7 font-bold text-blue-700" />
                  view profile
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-black hover:text-blue-600  flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                  <MdDashboard className="mr-1 w-7 font-bold text-blue-700" />
                  Admin
                </Link>
              </li>
            </ul>
            <ul className="mt-4 text-blue-600">
              <li onClick={handleLogout}>
                <Link className="text-black hover:text-blue-600  flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                  <MdLogout className="mr-1 w-7 font-bold text-red-700" />
                  Logout
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
