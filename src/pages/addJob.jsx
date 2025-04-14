import React from "react";
import Input from "..";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  const errorClass =
    "text-red-500 text-sm w-fit p-1 font-medium uppercase mt-2 bg-gray-200/50";
  return (
    <>
      <div className="bg-[#D4EBF8] px-10 py-10">
        <div className="max-w-screen p-7  bg-[#61b4e4] shadow-xl rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Job</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <div>
              <Input
                label="Title: "
                type="text"
                {...register("title", { required: "Title is required" })}
                className=""
                placeholder="Enter the Position Name "
              />
              {errors.title && (
                <p className={errorClass}>{errors.title.message}</p>
              )}
            </div>

            {/* <br /> */}
            {/* Type */}
            <div>
              <select
                className="border bg-slate-50  border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full "
                {...register("type", { required: true })}
                defaultValue=""
              >
                <option value="" hidden>
                  Select Type
                </option>
                <option className="bg-gray-100 " value="Part-Time">
                  Part-Time
                </option>
                <option className="bg-gray-100" value="Full-Time">
                  Full-Time
                </option>
              </select>

              {errors.type && (
                <div>
                  <span className={errorClass}>Select Type</span>
                </div>
              )}
            </div>

            {/* description */}
            <div className="w-full">
              <label className="inline-block mb-1 text-black pl-1">
                Description :
              </label>
              <textarea
                placeholder="Write something cool..."
                className="w-full bg-slate-50 px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                rows="4"
                {...register("description", {
                  minLength: {
                    value: 10,
                    message: "Too short! Add more detail.",
                  },
                })}
              />
              {errors.description && (
                <p className={errorClass}>{errors.description.message}</p>
              )}
            </div>

            {/* City */}
            <div>
              <select
                className="border bg-slate-50  border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full "
                {...register("city", { required: true })}
                defaultValue=""
              >
                <option value="" hidden>
                  Select City
                </option>
                <option className="bg-gray-100 " value="Rajkot">
                  Rajkot
                </option>
                <option className="bg-gray-100" value="Ahemdabad">
                  Ahemdabad
                </option>
              </select>

              {errors.city && (
                <div>
                  <span className={errorClass}>Select Gender</span>
                </div>
              )}
            </div>

            {/* Salary */}
            <div>
              <select
                className="border bg-slate-50  border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full "
                {...register("salary", { required: true })}
                defaultValue=""
              >
                <option value="" hidden>
                  Select Salary
                </option>
                <option className="bg-gray-100" value="Ahemdabad">
                  ₹85,000 - ₹95,000
                </option>
                <option className="bg-gray-100 " value="Rajkot">
                  1,00,000 - ₹1,10,000
                </option>
              </select>

              {errors.salary && (
                <div>
                  <span className={errorClass}>Select the salary Package</span>
                </div>
              )}
            </div>

            <br />
            <p className="text-center text-2xl font-bold">About company</p>
            <br />

            {/* Submit */}
            <button
              type="submit"
              // onClick={handleSubmit(onSubmit)}
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJob;
