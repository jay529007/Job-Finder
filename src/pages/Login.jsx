import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../index";
import { fetchUsers, currentUserData, editUser } from "../features/userSlice";
import { VscLoading } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import Nouserfound from "../pages/error/no-userfound";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    let matchedUser = await users.find((user) => {
      const isMatch =
        (user.email === formData.email || user.userName === formData.email) &&
        bcrypt.compareSync(formData.password, user.password);

      return isMatch;
    });
    if (matchedUser) {
      // Clone and set login true
      const updatedUser = { ...matchedUser, login: "true" };
      sessionStorage.setItem("userId", updatedUser.id);

      // Update on backend/server
      dispatch(editUser({ id: updatedUser.id, updatedData: updatedUser }));
      // updating current user
      navigate("/userdata");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const errorClass =
    "text-red-500 text-sm w-fit p-1 font-medium uppercase mt-2 bg-gray-200/50";
  return (
    <div className="bg-[#D4EBF8] py-8 sm:py-[5%] h-[100dvh] content-center">
      <div className="max-w-screen rounded-xl sm:rounded-2xl shadow-lg mx-4 sm:m-2 md:mx-[5%] lg:mx-[15%] xl:mx-[25%] 2xl:mx-[35%] border border-white p-4 sm:p-6 md:p-7 bg-[#61b4e4]">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
          Login
        </h2>

        {/* loading */}
        {loading && (
          <VscLoading className="my-auto mx-auto animate-spin text-6xl text-gray-500" />
        )}

        {/* Error message */}
        {!loading && error && navigate("/nouserfound")}
        <form
          className="space-y-3 sm:space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email */}
          <div>
            <Input
              label="Username or Email: "
              type="text"
              {...register("email", {
                required: "Email or Username is required",
              })}
              placeholder="Enter your email or username"
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
                required: "enter valid password",
              })}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className={errorClass}>{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg sm:rounded-xl hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Login
          </button>
        </form>
        <div className="pt-2 text-center">
          <p>if you don't have account </p>
          <Link to="/register" className="text-blue-600 underline">
            register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
