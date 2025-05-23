import React, { useEffect } from "react";
import Hero from "../components/Hero";
import JobHome from "../components/job-cards/JobHome";
import ViewAllJobs from "../components/ViewAlljobs";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    if (user) toast.success("Login Successfully!");
  }, [user]);

  return (
    <div className="min-h-screen  bg-[#D4EBF8]">
      <Hero hideUser="true" hideJobSeachBar={true} />
      <div className="px-0 3xl:px-[10%]">
        <JobHome isHome={true} />
      </div>
      {/* Featured Jobs */}
      <ViewAllJobs />
    </div>
  );
};

export default Home;
