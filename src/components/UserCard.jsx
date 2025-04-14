import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm w-full  bg-white hover:bg-[#ecf1f5]  text-black shadow-2xl rounded-2xl overflow-hidden p-10 transform transition hover:scale-105 hover:shadow-[#3784b0] border-4 border-white/20 backdrop-blur-lg">
      <h2 className="text-2xl font-extrabold mb-1 tracking-wide">
        {user.name}
      </h2>
      <p className="text-sm text-black/80 mb-4">@{user.username}</p>

      <div className="text-black/90 space-y-1 text-sm">
        <p>
          <span className="font-semibold"> Age:</span> {user.age}
        </p>
        <p>
          <span className="font-semibold"> Gender:</span> {user.Gender}
        </p>
        <Link to={`https://www.google.co.in/maps/place/${user.location}`}>
          <div className="flex gap-1">
            <FaLocationDot className="text-red-500" /> {user.location}
          </div>
        </Link>
        <div className="flex items-center gap-1">
          <MdMarkEmailUnread className="text-yellow-300 size-4" /> {user.email}
        </div>
      </div>
      <div className="border-t my-3 border-gray-400/60">
        <p className=" italic border-t border-white/30 pt-2 text-sm">
          “{user.description}”
        </p>
      </div>
    </div>
  );
};

export default UserCard;
