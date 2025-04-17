import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";

const user = {
  name: "Tanisha Patel",
  userName: "tanisha",
  age: "22",
  login: "false",
  gender: "Female",
  city: "Ahemdabad",
  email: "tanisha.patel@gmail.com",
  password: "$2b$10$ni5EFxk4pwkxTm6S2IXhde4QfuXCDvCTS0v3kHZz1A9LgkSI97OFK",
  description: "Photographer turned frontend dev 🌈",
  Interests: ["Photography", "Frontend Development", "UI Design"],
};

const UserFullData = () => {
  return (
    <div className="min-h-screen bg-[#D4EBF8] py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-8">
        <Link to="/" className=" pb-2 hover:text-black/80 flex items-center">
          <MdOutlineArrowBack className="text-2xl mr-2" /> Back
        </Link>
        {/* Header */}
        <div className="flex items-center gap-6 border-b pb-6">
          <div className="w-24 h-24 rounded-full bg-blue-200 text-4xl flex items-center justify-center text-blue-700 font-semibold">
            {user.name[0]}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-500 text-lg">@{user.userName}</p>
            <p className="text-sm text-green-600 mt-1">
              {user.login === "true" ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Basic Info */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Info title="Gender" value={user.gender} />
            <Info title="Age" value={user.age} />
            <Info title="City" value={user.city} />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Info title="Email Address" value={user.email} />
            <Info title="Username" value={user.userName} />
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">Bio</h2>
          <p className="text-gray-700 whitespace-pre-line bg-gray-100 p-4 rounded-lg">
            {user.description}
          </p>
        </div>

        {/* Account Details */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Account Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Info
              title="Password (encrypted)"
              value={user.password.slice(0, 30) + "..."}
            />
            <Info
              title="Account Status"
              value={user.login === "true" ? "Active" : "Inactive"}
            />
          </div>
        </div>

        {/* Interests (filler from her description) */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Interests
          </h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Photography</li>
            <li>Frontend Development</li>
            <li>Colorful UI & Aesthetic Web Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Info = ({ title, value }) => (
  <div>
    <p className="text-sm text-gray-500">{title}</p>
    <p className="font-medium text-gray-800">{value}</p>
  </div>
);

export default UserFullData;
