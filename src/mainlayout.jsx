import React from "react";
import Navbar from "./pages/navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";

const Mainlayout = () => {
  const { users, loading, error } = useSelector((state) => state.users);

  if (loading) console.log("Loading...");

  const navigate = useNavigate();
  // If there's an error:
  if (error) {
    navigate("/nouserfound");
    console.error(error);
    return null;
  }
  return (
    <>
      {/* {isLoggedIn ? ( */}
        <div>
          <Navbar />
          <Outlet />
        </div>
      {/* ) : (
        <div>
          <ToastContainer />
          <Login />
        </div>
      )} */}
    </>
  );
};

export default Mainlayout;
