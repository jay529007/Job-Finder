import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userSlice";
import Nouserfound from "./error/no-userfound";
// import { AiOutlineLoading } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);
  const [search, setSearchUser] = useState("");

  const filteredUser = users?.filter((user) => {
    const userName = user?.userName?.toLowerCase() || "";
    const searchT = search?.toLowerCase() || "";

    return userName.includes(searchT);
  });

  return (
    <>
      <div className="bg-[#D4EBF8]">
        <Hero
          hidetext={true}
          hideJobSeachBar={true}
          setSearch={setSearchUser}
        />

        {/* Loading Spinner */}
        {loading && (
          <VscLoading className="my-auto mx-auto animate-spin text-6xl text-gray-500" />
        )}

        {/* Error message */}
        {!loading && error && navigate("/Nouserfound")}

        <div className=" justify-center  flex  py-10">
          <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredUser?.map((user) => (
              <UserCard key={user.id} search={search} user={user} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
