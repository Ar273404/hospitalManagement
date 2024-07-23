import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi"; // Import icons from react-icons

const hours = [
  {
    id: 1,
    day: "Monday",
    time: "9:00 AM - 11:00 PM",
  },
  {
    id: 2,
    day: "Tuesday",
    time: "12:00 PM - 12:00 AM",
  },
  {
    id: 3,
    day: "Wednesday",
    time: "10:00 AM - 10:00 PM",
  },
  {
    id: 4,
    day: "Thursday",
    time: "9:00 AM - 9:00 PM",
  },
  {
    id: 5,
    day: "Monday",
    time: "3:00 PM - 9:00 PM",
  },
  {
    id: 6,
    day: "Saturday",
    time: "9:00 AM - 3:00 PM",
  },
];


const Footer = () => {
  return (
    <div>
      <footer className="font-sans tracking-wide bg-slate-900 px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          <div>
            <a href="/">
              <img
                src="https://st.depositphotos.com/1546680/2138/i/450/depositphotos_21389115-stock-photo-3d-hospital.jpg"
                alt="Hospital Logo"
                className="w-44"
              />
            </a>
          </div>

          <div>
            <h4 className="text-yellow-500 hover:text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Open Time
            </h4>

            <ul className="mt-6 space-y-5">
              {hours.map((element) => (
                <li
                  key={element.id}
                  className="text-white hover:text-yellow-500 text-sm">
                  <span className="text-sm ">{element.day} : </span>
                  <span className="text-sm">{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-500 hover:text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Services
            </h4>
            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-yellow-500 text-sm">
                  Medical Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white hover:text-yellow-500 text-sm">
                  Emergency Care
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white hover:text-yellow-500 text-sm">
                  Telemedicine
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white hover:text-yellow-500 text-sm">
                  Patient Support
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white hover:text-yellow-500 text-sm">
                  Health Checkups
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-500 hover:text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Quick Link
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="/"
                  className="hover:text-yellow-400  text-white text-sm">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-yellow-400  text-white text-sm">
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-yellow-400  text-white text-sm">
                  Send message
                </a>
              </li>
              <li>
                <a
                  href="/appointment"
                  className="hover:text-yellow-400  text-white text-sm">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-500 hover:text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Contact
            </h4>

            <ul className="mt-6 space-y-5">
              <li className="flex items-center">
                <FiPhone size={20} className="text-yellow-500 mr-2" />
                <span className="text-white hover:text-yellow-500 text-sm">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center">
                <FiMapPin size={20} className="text-yellow-500 mr-2" />
                <span className="text-white hover:text-yellow-500 text-sm">
                  Gorakhpur,India ,U.P (273010)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-500 hover:text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Follow👉
            </h4>
            <ul className="mt-10 flex space-x-5">
              <li>
                <a href="/">
                  <FiFacebook
                    size={28}
                    className="text-yellow-500 hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiTwitter
                    size={28}
                    className="text-yellow-500 hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiInstagram
                    size={28}
                    className="text-yellow-500 hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiLinkedin
                    size={28}
                    className="text-yellow-500 hover:text-white"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiMail
                    size={28}
                    className="text-yellow-500 hover:text-white"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white" />

        <div className="flex flex-wrap max-md:flex-col gap-4">
          <p className="text-white text-sm md:ml-auto">
            Copyright © 2024
            <a href="/" className="text-yellow-500 hover:underline mx-1">
              Arun Yadav
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaLocationArrow, FaPhone } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";

// const Footer = () => {
//   const hours = [
//     {
//       id: 1,
//       day: "Monday",
//       time: "9:00 AM - 11:00 PM",
//     },
//     {
//       id: 2,
//       day: "Tuesday",
//       time: "12:00 PM - 12:00 AM",
//     },
//     {
//       id: 3,
//       day: "Wednesday",
//       time: "10:00 AM - 10:00 PM",
//     },
//     {
//       id: 4,
//       day: "Thursday",
//       time: "9:00 AM - 9:00 PM",
//     },
//     {
//       id: 5,
//       day: "Monday",
//       time: "3:00 PM - 9:00 PM",
//     },
//     {
//       id: 6,
//       day: "Saturday",
//       time: "9:00 AM - 3:00 PM",
//     },
//   ];

//   return (
//     <>
//       <footer className={"container"}>
//         <hr />
//         <div className="content">
//           <div>
//             <img src="/logo.png" alt="logo" className="logo-img" />
//           </div>
//           <div>
//             <h4>Quick Links</h4>
//             <ul>
//               <Link to={"/"}>Home</Link>
//               <Link to={"/appointment"}>Appointment</Link>
//               <Link to={"/about"}>About</Link>
//             </ul>
//           </div>
//           <div>
//             <h4>Hours</h4>
//             <ul>
//               {hours.map((element) => (
//                 <li key={element.id}>
//                   <span>{element.day}</span>
//                   <span>{element.time}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4>Contact</h4>
//             <div>
//               <FaPhone />
//               <span>8306708169</span>
//             </div>
//             <div>
//               <MdEmail />
//               <span>arun@gmail.com</span>
//             </div>
//             <div>
//               <FaLocationArrow />
//               <span>Gorakhpur, India</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;