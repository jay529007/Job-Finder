import React from "react";
import { useForm } from "react-hook-form";
import Input from "../index";
import { addUser } from "../features/userAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";


function Register() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const errorClass =
    "text-red-500 text-sm w-fit p-1 font-medium uppercase mt-2 bg-gray-200/50";

  const onSubmit = (data) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password, salt);
    data.password = hashedPassword;
    dispatch(addUser(data));
    navigate = "/userdata";
  };

  return (
    <div className="bg-[#D4EBF8] px-10 py-10">
      <div className="max-w-screen p-7  bg-[#61b4e4] shadow-xl rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <Input
              label="Name: "
              type="text"
              // value={name}
              {...register("name", { required: "Name is required" })}
              className=""
              placeholder="Enter your name"
            />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          {/* UserName */}
          <div>
            <Input
              label="UserName: "
              type="text"
              // value={userName}
              {...register("userName", { required: "UserName is required" })}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your UserName"
            />
            {errors.userName && (
              <p className={errorClass}>{errors.userName.message}</p>
            )}
          </div>

          {/* age */}
          <div>
            <Input
              label="Age: "
              type="number"
              placeholder="Enter your Age"
              inputMode="numeric"
              onInput={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                e.target.value = value.slice(0, 2);
              }}
              {...register("age", {
                required: "Enter Age",
                // validate: (value) =>
                //   /^(?:[5-9]|[1-7][0-9]|80)$/.test(value) || "Enter valid Age",
              })}
            />
            {errors.age && <p className={errorClass}>{errors.age.message}</p>}
          </div>

          <br />
          {/* Gender */}
          <div>
            <select
              className="border bg-slate-50  border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full "
              {...register("gender", { required: true })}
              defaultValue=""
            >
              <option value="" hidden>
                Select Gender
              </option>
              <option className="bg-gray-100 " value="Male">
                Male
              </option>
              <option className="bg-gray-100" value="Female">
                Female
              </option>
            </select>

            {errors.gender && (
              <div>
                <span className={errorClass}>Select Gender</span>
              </div>
            )}
          </div>

          <br />
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

          {/* Email */}
          <div>
            <Input
              label="Email: "
              type="email"
              // value={email}
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>

          {/* password */}
          <div>
            <Input
              label="Password: "
              type="password"
              {...register("password", {
                required: "type it",
                // validate: {
                //   raccoonGuard: (value) =>
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(
                //       value
                //     ) ||
                //     "Password too weak, even a raccoon could guess it! Add Some uppercase, lowercase, number & symbol to make it strong",
                // },
              })}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className={errorClass}>{errors.password.message}</p>
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
                required: "Description is required",
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

          {/* Submit */}
          <button
            type="submit"
            // onClick={handleSubmit(onSubmit)}
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
