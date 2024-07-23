import React from 'react'
import { Context } from '../index';
import { useContext } from 'react';
import moment from "moment";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaIdCard,
  FaBirthdayCake,
  FaUserTie,
} from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

  
const Profile = () => {

  const NavigateTo = useNavigate();

    const {isAuthenticated,user } = useContext(Context);

    if(!isAuthenticated)
    {
       NavigateTo("/");
    }
  return (
    <div class="p-6 mt-12">
      <div class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
        <div class="min-h-[256px]">
          <img src="https://readymadeui.com/Imagination.webp" class="w-full" alt='' />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-5 text-center">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-gray-700 text-base mb-3 flex items-center">
            <FaEnvelope className="mr-2 text-blue-500 text-xl" />
            <strong >Emaill:</strong> {user.email}
          </p>
          <p className="text-gray-700 text-base mb-3 flex items-center">
            <FaPhoneAlt className="mr-2 text-blue-500 text-xl" />
            <strong className="mr-2">Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-700 text-base mb-3 flex items-center">
            <FaBirthdayCake className="mr-2 text-blue-500 text-xl" />
            <strong className="mr-2">DOB:</strong>{" "}
            {moment(user.dob).format("DD/MM/YYYY")}
          </p>
          <p className="text-gray-700 text-base mb-3 flex items-center">
            <FaIdCard className="mr-2 text-blue-500 text-xl" />
            <strong className="mr-2">NIC:</strong> {user.nic}
          </p>
          <p className="text-gray-700 text-base mb-3 flex items-center">
            <BiMaleFemale className="mr-2 text-blue-500 text-xl" />
            <strong className="mr-2">Gender:</strong> {user.gender}
          </p>
          <p className="text-gray-700 text-base mb-2 flex items-center">
            <FaUserTie className="mr-2 text-blue-500 text-xl" />
            <strong className="mr-2">Role:</strong> {user.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile