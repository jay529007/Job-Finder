import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    
    const Linkclass = ({ isActive }) =>
        isActive
          ? "text-white bg-gray-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
          : "text-black font-semibold border border-gray-300 bg-[#F2F9FF] hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <nav className="bg-[#9ed2f1]  border-b border-[#9ed2f1]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to='/'  className={Linkclass}>
                    Home
                  </NavLink>
                  <NavLink to='/jobs'  className={Linkclass}>
                    Jobs
                  </NavLink>
                  <NavLink to='/userdata' className={Linkclass}>
                    Users
                  </NavLink>
                  <NavLink  to='/register' className={Linkclass}>
                    Register
                  </NavLink>
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
