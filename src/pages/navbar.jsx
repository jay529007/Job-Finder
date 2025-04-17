import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaRegCircle } from "react-icons/fa";
import { editUser } from "../features/userSlice";
// import clearState from "./store/session";
import { clearState, loadState, saveState } from "../store/session";

const Navbar = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  // find current user
  const SessionStorageID = loadState();
  const matchedUser = users.find((e) => e.id === SessionStorageID);

  // onclick
  const onClickClear = () => {
    // login=false
    const updataedUser = { ...matchedUser, login: "false" };
    dispatch(editUser({ id: updataedUser.id, updatedData: updataedUser }));
    // clear Session
    clearState();
  };

  // console.log(currentUser);

  const name = matchedUser?.name;
  const loginClass = matchedUser
    ? "bg-green-500 p-2 text-white rounded-full animate-pulse "
    : "bg-red-500 p-2 text-white rounded-full animate-pulse ";
  if (loading) {
    console.log("Loading...");
  }

  const navigate = useNavigate();
  if (error) {
    navigate("/nouserfound");
    console.error(error);
  }
  const Linkclass = ({ isActive }) =>
    isActive
      ? "text-white bg-gray-900 rounded-xl px-4 py-2 transition-all duration-300 shadow-md "
      : "text-black font-medium border border-gray-300 bg-[#F2F9FF] hover:bg-gray-900 hover:text-white rounded-xl px-4 py-2 transition-all duration-300 shadow-sm";

  return (
    <>
      <nav className="bg-[#9ed2f1]  border-b border-[#9ed2f1]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center  justify-between">
            <div className="flex flex-1 items-center  justify-between md:items-stretch md:justify-start">
              <p className=" flex items-center gap-2  py-2 px-2 bg-indigo-300 rounded-2xl">
                {" "}
                <span>
                  <FaRegCircle className={loginClass} />
                </span>{" "}
                {`Hello ${name} ` || `User Not Found`}
              </p>

              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={Linkclass}>
                    Home
                  </NavLink>
                  <NavLink to="/userfulldata" className={Linkclass}>
                    Profile
                  </NavLink>
                  <NavLink to="/jobs" className={Linkclass}>
                    Jobs
                  </NavLink>
                  <NavLink to="/userdata" className={Linkclass}>
                    Users
                  </NavLink>
                  <Link
                    onClick={onClickClear}
                    to="/login"
                    className="text-black font-medium border border-gray-300 bg-[#F2F9FF] hover:bg-red-600 hover:text-white rounded-xl px-4 py-2 transition-all duration-300 shadow-sm"
                  >
                    logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
