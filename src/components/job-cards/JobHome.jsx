import React, { useEffect, useState } from "react";
import HomeJobCards from "./HomeJobCards";
import { fetchJobs } from "../../features/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { VscLoading } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import Nouserfound from "../../pages/error/no-userfound";

const JobHome = ({ isHome, search }) => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs(isHome));
  }, [dispatch]);

  const filteredJobs = jobs.filter((job) => {
    const title = job?.title?.toLowerCase() || "";
    const location = job?.location?.toLowerCase() || "";
    const company = job?.company?.name?.toLowerCase() || "";
    const type = job?.type?.toLowerCase() || "";
    const searchTerm = search?.toLowerCase() || "";

    return (
      title.includes(searchTerm) ||
      location.includes(searchTerm) ||
      type.includes(searchTerm) ||
      company.includes(searchTerm)
    );
  });
  const navigate = useNavigate();
  return (
    <>
      <div>
        <section className="px-10">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
            {/* Loading Spinner */}
            {loading && (
              <VscLoading className="my-auto mx-auto animate-spin text-6xl text-gray-500" />
            )}

            {/* Error message */}
            {!loading && error && navigate("Nouserfound ")}

            {/* Featured Jobs */}
            {isHome ? "Featured Jobs" : "Jobs"}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredJobs.map((jobs) => (
              <HomeJobCards key={jobs.id} jobs={jobs} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default JobHome;
