import React from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <>
      <section className=" border-t w-full border-gray-600/50 mt-6 py-6">
        <Link
          to="/jobs"
          className="block bg-black  text-white text-center py-4 px-6 max-w-lg m-auto rounded-xl hover:bg-[#1f1f20]"
        >
          View All Jobs
        </Link>
      </section>
    </>
  );
};

export default ViewAllJobs;
