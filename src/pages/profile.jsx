import React, { useEffect } from "react";
import UserFullData from "../components/UserFullData";

const Profile = () => {
  return (
    <>
      <div className="min-h-screen bg-[#D4EBF8] py-10 px-6">
        <UserFullData />;
      </div>
    </>
  );
};

export default Profile;
