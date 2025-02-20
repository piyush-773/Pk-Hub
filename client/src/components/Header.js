import React from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";

function Header({ isLoggedIn }) {
    return (
        <div className="flex sticky w-[100%] top-0 bg-white justify-between px-6 py-2 shadow-md">
            {/* Left Side: Logo & Menu */}
            <div className="flex items-center space-x-5">
                <AiOutlineMenu className="text-4xl rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 delay-200 p-2" />
                <Link to="/">
                    <img
                        src="/hub.png"
                        alt="Logo"
                        className="w-24 cursor-pointer px-3 bg-gray-100"
                    />
                </Link>
            </div>

            {/* Middle: Search Bar */}
            <div className="flex items-center w-[35%]">
                <div className="w-full px-3 py-2 border rounded-l-full">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-full outline-none"
                    />
                </div>
                <button className="px-4 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200 duration-200">
                    <CiSearch size="24px" />
                </button>
                <IoMdMic
                    size="42px"
                    className="rounded-full m-3 border p-2 bg-gray-100 cursor-pointer hover:bg-gray-200 duration-200"
                />
            </div>

            {/* Right Side: Icons & User Avatar */}
            {isLoggedIn ? (
                <div className="flex space-x-5 items-center">
                    <RiVideoAddLine className="text-2xl cursor-pointer" />
                    <AiOutlineBell className="text-2xl cursor-pointer" />
                    <div className="cursor-pointer">
                        <Avatar src="/logo.png" size="32" round={true} />
                    </div>
                </div>
            ) : (
                <Link to="/login" className="text-blue-600 hover:underline">
                    Login
                </Link>
            )}
        </div>
    );
}

export default Header;
