import React from "react";
import { GoAlertFill } from "react-icons/go";

const Nouserfound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  bg-gray-100">
      <div className=" w-fit">
        <GoAlertFill className="size-20 text-yellow-500" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          No User Data Found
        </h2>
        <p className="text-gray-500 mt-2">
          Check Conection.
        </p>
      </div>
    </div>
  );
};

export default Nouserfound;
