import React, { useState } from "react";
import { logo } from "../../assets";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/Theme";
import http from "../../api";

const Reset = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [form, setForm] = useState({
    password: "",
    cPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    cPassword: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errs = {};

    if (!form.password) {
      errs.password = "Password cannot be empty";
    }

    if (form.password.trim().length < 4) {
      errs.password = "Password must be at least 4 characters long";
    }

    if (!form.cPassword) {
      errs.cPassword = "Confirm Password cannot be empty";
    }

    if (form.password !== form.cPassword) {
      errs.cPassword = "Passwords do not match";
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validateForm();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    } else {
      setErrors({});

      try {
        const email = searchParams.get("email");
        const token = searchParams.get("token");

        const res = await http.post("/user/reset-password", {
          email,
          token,
          password: form.password,
        });

        toast.success("Password has been reset successfully!");
        navigate("/login");
      } catch (error) {
        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  };

  return (
    <div className="h-full flex flex-col bg-primary">
      <div className="py-10 md:pt-14 md:pb-2 flex justify-center relative">
        <img
          src={logo}
          alt="logo"
          className="w-28 md:w-34 dark:filter-none filter invert"
        />
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1 absolute right-10 top-10"
          onClick={() => dispatch(toggleTheme())}
        ></button>
      </div>
      <div className="py-12">
        <div className="">
          <h3 className="pb-4 text-2xl text-white font-medium text-center">
            Reset Password
          </h3>
          <div className="flex flex-col md:justify-center md:flex-row">
            <div className="w-[80%] mx-auto md:mx-0 pt-6">
              <form>
                <div className="flex flex-col gap-4">
                  <label htmlFor="password" className="text-white">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    className="outline-none border border-white dark:border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                  <label htmlFor="cPassword" className="text-white">
                    Confirm Password
                  </label>
                  <input
                    required
                    type="password"
                    name="cPassword"
                    id="cPassword"
                    className="outline-none border border-white dark:border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
                    onChange={handleInputChange}
                  />
                  {errors.cPassword && (
                    <p className="text-red-500 text-sm">{errors.cPassword}</p>
                  )}
                  <button
                    className="border border-white rounded-xl px-8 py-4 mt-4 dark:hover:bg-neutral-900 bg-white dark:bg-inherit hover:bg-gray-200 shadow-md"
                    onClick={handleSubmit}
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
