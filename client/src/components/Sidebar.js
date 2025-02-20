import React from "react";
import { GoHome } from "react-icons/go";
// import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { RiPlayList2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function sidebar() {
    const sidebarItems = [
        {
            id: 1,
            path: "/",
            name: "Home",
            icon: <GoHome />,
        },
        {
            id: 2,
            path: "/subscriptions",
            name: "Subscriptions",
            icon: <MdOutlineSubscriptions />,
        },
        {
            id: 3,
            path: "/your-channel",
            name: "Your channel",
            icon: <PiUserSquareThin />,
        },
        {
            id: 4,
            path: "/history",
            name: "History",
            icon: <MdHistory />,
        },
        {
            id: 5,
            path: "/playlist",
            name: "Playlists",
            icon: <RiPlayList2Line />,
        },
        {
            id: 6,
            path: "/your-videos",
            name: "Your videos",
            icon: <AiOutlinePlaySquare />,
        },
        {
            id: 7,
            path: "/watch-later",
            name: "Watch later",
            icon: <MdOutlineWatchLater />,
        },
        {
            id: 8,
            path: "/liked-videos",
            name: "Liked videos",
            icon: <AiOutlineLike />,
        },
    ];

    return (
        <div className="px-6 w-[15%] sticky top-[80px] h-[calc(100vh-5.25rem)] overflow-y-scroll overflow-x-hidden">
            <div className="items-center space-y-2">
                {sidebarItems.map((item) => {
                    return (
                        <Link to={item.path} key={item.id}>
                            <div
                                className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 cursor-pointer"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default sidebar;
