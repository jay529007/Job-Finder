import React from "react";
import Hero from "../components/Hero";
import JobHome from "../components/job-cards/JobHome";
import ViewAllJobs from "../components/ViewAlljobs";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#D4EBF8]">
      <Hero hideUser="true" hideJobSeachBar={true} />

      {/* Featured Jobs */}
      <JobHome isHome={true} />
      <ViewAllJobs />
    </div>
  );
};

export default Home;
