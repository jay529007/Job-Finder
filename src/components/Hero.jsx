import React from "react";
import Input from "../index";

const Hero = ({ hideJobSeachBar, hideUser, hidetext, setSearch, setSearchUser }) => {
  return (
    <section className="bg-[#61b4e4] py-16 px-6 text-center shadow-md">
      <h1 className="text-4xl font-bold text-white mb-4">
        {hideUser ? "Find Your Dream Job" : "Find User"}
      </h1>
      {!hidetext && (
        <p className="text-white font-normal max-w-xl mx-auto">
          Search through thousands of jobs and find the one that fits you best.
        </p>
      )}

      {/* Search Bar */}
      {!hideJobSeachBar && (
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <Input
            type="text"
            placeholder="Seach Job"
            className=""
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      )}
      {!hideUser && (
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <Input
            type="text"
            placeholder="Seach User"
            className=""
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
