import React from "react";
import {
  FaUserPlus,
  FaUserLock,
  FaEnvelope,
  FaStethoscope,
  FaCalendarAlt,
  FaSignInAlt,
  FaClipboardList,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";

const HowItWorks = () => {

 const cardData = [
   {
     title: "Patient Registration",
     description:
       "Register patients quickly and efficiently to streamline healthcare management.",
     icon: <FaUserPlus className="w-8 mb-6 inline-block" />,
   },
   {
     title: "Patient Login",
     description:
       "Allow registered patients to securely log in and access personalized healthcare services.",
     icon: <FaSignInAlt className="w-8 mb-6 inline-block" />,
   },
   {
     title: "Send Messages",
     description:
       "Patients can send queries and messages securely to communicate with healthcare providers.",
     icon: <FaEnvelope className="w-8 mb-6 inline-block" />,
   },
   {
     title: "Check Doctor's Department",
     description:
       "View the department and specialization of doctors to find the right healthcare professional",
     icon: <FaStethoscope className="w-8 mb-6 inline-block" />,
   },
   {
     title: "Book an Appointment",
     description:
       " Patients can schedule appointments with doctors for convenient healthcare access.",
     icon: <FaCalendarAlt className="w-8 mb-6 inline-block" />,
   },
   {
     title: "Admin Login",
     description:
       "Secure login for hospital administrators to manage hospital operations effectively.",
     icon: <FaUserLock className="w-8 mb-6 inline-block" />,
   },
   {
     title: "Dashboard Access",
     description:
       " Access a comprehensive dashboard displaying key metrics and hospital performance indicators.",
     icon: <FaClipboardList className="w-8 mb-6 inline-block" />,
   },
   {
     title: "Add Doctors",
     description:
       "Administrators can add new doctors to the system to expand healthcare services",
     icon: <FaUserMd className="w-8 mb-6 inline-block" />,
   },
   {
     title: "Manage Administrators",
     description:
       "Admins can manage other administrators to ensure smooth hospital administration.",
     icon: <FaUsers className="w-8 mb-6 inline-block" />,
   },
   {
     title: "Total Doctors Available",
     description:
       "Track and manage all available doctors within the hospital network for efficient patient care.",
     icon: <FaStethoscope className="w-8 mb-6 inline-block" />,
   },
 ];

  return (
    // <div className="container mx-auto px-4 py-8">
    //   <h1 className="text-3xl font-bold text-center mb-8">How It Works</h1>
    //   <div className="flex flex-wrap">
    //     {cardData.map((card, index) => (
    //       <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
    //         <div className="bg-white rounded-lg p-6 shadow-md">
    //           <div className="flex items-center justify-center mb-4">
    //             {card.icon}
    //           </div>
    //           <h2 className="text-xl font-bold mb-2 text-center">
    //             {card.title}
    //           </h2>
    //           <p className="text-gray-700 text-center">{card.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
      <div class="font-[sans-serif] bg-slate-600 py-12 px-4">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-white sm:text-4xl text-2xl font-bold text-center mb-16">
            How Our Website Work Steps👉👉
          </h2>
          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
            {
                cardData.map((item,index)=>{
                    return (
                      <div class=" key={index}  rounded-xl group p-8 text-center bg-white  text-purple-800 shadow-xl transition duration-300">
                        <span className="font-bold text-xl">{item.icon}</span>
                        <h3 class="text-xl font-semibold mb-3">{item.title}</h3>
                        <p class="text-green-600 group-hover:text-gray-500 text-sm font-bold">
                          {item.description}
                        </p>
                      </div>
                    );
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
