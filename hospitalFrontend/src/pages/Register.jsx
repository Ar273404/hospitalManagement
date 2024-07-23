import React, { useContext, useState } from "react";
import { Link, useNavigate,Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../Api";
import { Context } from "../index";

const Register = () => {
  const [isAuthenticated,setIsAuthenticated] = useContext(Context)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}/user/patient/register`,
        { firstName, lastName, email, phone, nic, dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      toast.success("👍👍👍" + response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error("🫢🫢🫢" + error.response.data.message);
      } else {
        console.error("An error occurred:", error);
        toast.error("🫢🫢🫢An unexpected error occurred. Please try again later.");
      }
    }
  };
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }


  return (
    <div className="font-sans bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-1 h-full">
        <div className="max-w-lg ">
          <img
            src="https://www.csdtitsolution.com/HospitalManagementSoftware/h2.png"
            className="ml-16 lg:max-w-full w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <form onSubmit={handleRegister} className="max-w-lg w-full mx-auto">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-yellow-400">
                Create an account
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-white font-bold text-xs block mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-1 outline-none"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="text-white font-bold text-xs block mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-1 outline-none"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-white font-bold text-xs block mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-1 outline-none"
                placeholder="Enter email"
              />
            </div>

            <div className="mt-5">
              <label className="text-white font-bold text-xs block mb-1">
                Phone
              </label>
              <input
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-1 outline-none"
                placeholder="Enter phone number"
              />
            </div>

            <div className="mt-5">
              <label className="text-white font-bold text-xs block mb-1">
                NIC
              </label>
              <input
                name="nic"
                type="text"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-1 outline-none"
                placeholder="Enter NIC"
              />
            </div>

            <div className="mt-5">
              <label className="text-white font-bold text-xs block mb-1">
                Date of Birth
              </label>
              <input
                name="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 outline-none"
              />
            </div>

            <div className="mt-4">
              <label className="text-white font-bold text-xs block mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-1 outline-none">
                <option value="" disabled defaultValue>
                  Select gender
                </option>
                <option value="Male" className="bg-gray-700 text-white">
                  Male
                </option>
                <option value="Female" className="bg-gray-700 text-white">
                  Female
                </option>
                <option value="Other" className="bg-gray-700 text-white">
                  Other
                </option>
              </select>
            </div>

            <div className="mt-4">
              <label className="text-white font-bold text-xs block mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white text-sm text-blue-900 font-semibold border-b border-gray-200 focus:border-yellow-900 px-2 py-1 outline-none"
                placeholder="Enter password"
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-transparent bg-yellow-400 hover:bg-yellow-500 focus:outline-none">
                Register
              </button>
              <p className="text-sm text-white mt-4">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-yellow-400 font-semibold hover:underline ml-1">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
