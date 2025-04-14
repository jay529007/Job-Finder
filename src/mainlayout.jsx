import React from "react";
import Navbar from "./pages/navbar";
import { Outlet } from "react-router-dom";
import { login, logout } from "./features/userSlice";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const Mainlayout = () => {
  const isLoggedIn = useSelector((state) => state.users.login);
  return (
    <>
      {isLoggedIn  ? (
        <div>
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Mainlayout;
