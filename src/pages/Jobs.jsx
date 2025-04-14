import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import JobHome from "../components/job-cards/JobHome";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="min-h-screen  bg-[#D4EBF8]">
        <Hero setSearch={setSearch} hideUser={true} />
        <JobHome search={search} />
        <section className=" border-t w-full border-gray-600/50 mt-6 py-6 px-6">
          <Link
            to="/addjobs"
            className="block bg-black  text-white text-center py-4 px-6 max-w-lg m-auto rounded-xl hover:bg-[#1f1f20]"
          >
            Add Jobs
          </Link>
        </section>
      </div>
    </>
  );
};

export default Jobs;
