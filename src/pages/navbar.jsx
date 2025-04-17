import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaRegCircle } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  // const onClickClear = () => {
  //   // Update on backend/server
  //   dispatch(editUser({ id: "currentuser", updatedData: "" }));
  // };

  const currentUser = users.find((e) => e.login === true);
  // console.log(currentUser);

  const name = currentUser?.name;
  const loginClass = currentUser
    ? "bg-green-500 hover:p-2.5 duration-120 text-green-500 rounded-full "
    : "bg-red-500 hover:p-2.5 duration-120 text-red-500 rounded-full ";
  // You can use loading like this:
  if (loading) {
    console.log("Loading...");
  }

  const navigate = useNavigate();
  // If there's an error:
  if (error) {
    navigate("/nouserfound");
    console.log(error);
  }
  const Linkclass = ({ isActive }) =>
    isActive
      ? "text-white bg-gray-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-black font-semibold border border-gray-300 bg-[#F2F9FF] hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <nav className="bg-[#9ed2f1]  border-b border-[#9ed2f1]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center  justify-between">
            <div className="flex flex-1 items-center  justify-between md:items-stretch md:justify-start">
              <p className=" flex items-center gap-2 py-2 px-2 bg-indigo-300 rounded-2xl">
                {" "}
                <span>
                  <FaRegCircle className={loginClass} />
                </span>{" "}
                {`Hello ${name} `}
              </p>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={Linkclass}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={Linkclass}>
                    Jobs
                  </NavLink>
                  <NavLink to="/userdata" className={Linkclass}>
                    Users
                  </NavLink>
                  <Link
                    // onClick={onClickClear}
                    to="/login"
                    className="text-black font-semibold border border-gray-300 bg-[#F2F9FF] hover:bg-gray-900 hover:text-white rounded-md px-1.5 py-2"
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
