import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const HomeJobCards = ({ jobs }) => {
  const [showFullDes, setShowFullDes] = useState(false);

  const descriptionText = jobs?.description || ""; // fallback if undefined
  const Description = showFullDes
    ? descriptionText
    : `${descriptionText.substring(0, 150)}...`;

  return (
    <div className="bg-white hover:bg-[#ecf1f5] rounded-xl transform transition hover:scale-103 hover:shadow-[#3784b0] shadow-md relative border-4 border-white/20 backdrop-blur-lg">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2"> {jobs.type} </div>
          <h3 className="text-xl font-bold">{jobs.title}</h3>
        </div>

        <div className="mb-5">{Description}</div>

        <button
          onClick={() => setShowFullDes((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDes ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{jobs.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <Link to={`https://www.google.co.in/maps/place/${jobs.location}`}>
            <div className="text-orange-700 mb-3">
              <FaMapMarkerAlt className="inline text-lg mb-1 mr-0.5" />
              {jobs.location}
            </div>
          </Link>
          <Link
            to="/fullCard"
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeJobCards;
