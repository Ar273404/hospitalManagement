import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../index.js";
import { url } from "../Api.jsx";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${url}/user/login`,
          { email, password, confirmPassword, role },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success("👍👍👍" + res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setRole("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="font-sans bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-2 h-full">
        <div className="max-w-lg p-4">
          <img
            src="https://www.csdtitsolution.com/HospitalManagementSoftware/h2.png"
            className="ml-16 lg:max-w-full w-full h-auto object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <form onSubmit={handleLogin} className="max-w-lg w-full mx-auto">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-yellow-400">
                Login here👉👉
              </h3>
            </div>

            <div className="mt-6">
              <label className="text-white font-bold text-sm block mb-2  ">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-2 outline-none"
                placeholder="Enter email"
              />
            </div>

            <div className="mt-5">
              <label className="text-white font-bold  text-sm block mb-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-2 outline-none"
                placeholder="Enter password"
              />
            </div>

            <div className="mt-5">
              <label className="text-white font-bold text-sm block mb-2">
                ConfirmPassword
              </label>
              <input
                name="password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-2 outline-none"
                placeholder="Confirm password"
              />
            </div>

            <div className="mt-5">
              <label className="text-white font-bold text-sm block mb-2">
                Role
              </label>
              <select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-2 outline-none">
                <option value="" disabled defaultValue>
                  Select role
                </option>
                <option value="Patient" className="bg-gray-700 text-white">
                  Patient
                </option>
                {/* <option value="Doctor" className="bg-gray-700 text-white">
                  Doctor
                </option>
                <option value="Admin" className="bg-gray-700 text-white">
                  Admin
                </option> */}
              </select>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-transparent bg-yellow-400 hover:bg-yellow-500 focus:outline-none">
                Login
              </button>
              <p className="text-sm text-white mt-4">
                having no account?{" "}
                <Link
                  to={"/register"}
                  className="text-yellow-400 font-semibold hover:underline ml-1">
                  register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
