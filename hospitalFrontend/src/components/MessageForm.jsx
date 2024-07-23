import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import { url } from "../Api";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields before sending request
    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${url}/message/send`,
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("👍👍👍" + response.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error("🫢🫢🫢" + error.response.data.message);
      } else {
        // Network or other errors
        console.error("An error occurred:", error);
        toast.error("🫢🫢🫢An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="font-[sans-serif] mt-5">
      <div className="mt-20 text-center bg-gradient-to-r from-gray-600 to-gray-800 min-h-[160px] sm:p-6 p-4">
        <h4 className="sm:text-3xl text-2xl font-bold text-white mt-1">
          📚Send Message
        </h4>
      </div>
      <div className="-mt-20 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-200 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-200 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-200 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
              />
            </div>
            <div className="col-span-full">
              <textarea
                placeholder="Message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-200 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"></textarea>
              <button
                type="submit"
                className="text-white w-max bg-[#007bff] hover:bg-blue-600 rounded-lg text-sm px-6 py-3 mt-4 tracking-wide flex gap-3 align-middle ">
                <IoSend className="font-bold mt-0.5" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
