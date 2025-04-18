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
    <div className=" ">
      <div className=" bg-[#D4EBF8]">
        <div className="  mx-auto p-7  bg-[#61b4e4] shadow-xl  rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Job</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="  space-y-4">
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

            {/* About Company */}
            <br />
            <p className="text-center text-2xl font-bold">About company</p>
            <br />

            {/* Company Name */}
            <div>
              <Input
                label="Company Name: "
                type="text"
                {...register("companyname", {
                  required: "Company Name is required",
                })}
                className=""
                placeholder="Enter the Company Name "
              />
              {errors.title && (
                <p className={errorClass}>{errors.companyname.message}</p>
              )}
            </div>

            {/* Company Description  */}
            <div className="w-full">
              <label className="inline-block mb-1 text-black pl-1">
                Company Description :
              </label>
              <textarea
                placeholder="Write something Description About Company"
                className="w-full bg-slate-50 px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                rows="4"
                {...register("companydescription", {
                  minLength: {
                    value: 10,
                    message: "Too short! Add more detail.",
                  },
                })}
              />
              {errors.companydescription && (
                <p className={errorClass}>
                  {errors.companydescription.message}
                </p>
              )}
            </div>

            {/* Company Email */}
            <div>
              <Input
                label="Company Email: "
                type="email"
                // value={email}
                {...register("companyemail", {
                  required: "Company Email is required",
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Company Email address must be a valid address",
                  },
                })}
                className=""
                placeholder="Enter The Company Email"
              />
              {errors.companyemail && (
                <p className={errorClass}>{errors.companyemail.message}</p>
              )}
            </div>

            {/* Company Number */}
            <div>
              <Input
                label="Company Number: "
                type="number"
                // max={10}
                inputMode="numeric"
                onInput={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  e.target.value = value.slice(0, 10);
                }}
                placeholder="Enter The Company Number"
                {...register("companynumber", {
                  required: "enter the number",
                  validate: (value) =>
                    /^\d{10}$/.test(value) || "Enter Valid Number",
                })}
              />
              {errors.companynumber && (
                <p className={errorClass}>{errors.companynumber.message}</p>
              )}
            </div>

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
    </div>
  );
};

export default AddJob;
