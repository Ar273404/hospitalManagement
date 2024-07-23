import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../Api";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("ENT");
  const [doctorFirstName, setDoctorFirstName] = useState("arun");
  const [doctorLastName, setDoctorLastName] = useState("yadav");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          `${url}/user/doctors`,
          {
            withCredentials: true,
          }
        );
        setDoctors(data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        toast.error("Error fetching doctors. Please try again later.");
      }
    };

    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        `${url}/appointment/post`,
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment(""); 
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };


  return (
    <div className="font-sans">
      <div className="mt-20 text-center bg-gradient-to-r from-gray-600 to-gray-800 min-h-[160px] sm:p-6 p-4">
        <h4 className="sm:text-3xl text-2xl font-bold text-white mt-1">
          Book An Appointment
        </h4>
      </div>

      <div className="mx-4 mb-4 -mt-20">
        <form
          onSubmit={handleAppointment}
          className="max-w-4xl mx-auto bg-white shadow-md sm:p-8 p-4 rounded-md">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="text-gray-900 font-semibold mb-2 block">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="text-gray-900 font-semibold mb-2 block">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-gray-900 font-semibold mb-2 block">
                Email Id
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-gray-900 font-semibold mb-2 block">
                Mobile No.
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
                placeholder="Enter mobile number"
              />
            </div>
            <div>
              <label
                htmlFor="dob"
                className="text-gray-900 font-semibold mb-2 block">
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="appointmentDate"
                className="text-gray-900 font-semibold mb-2 block">
                Appointment Date
              </label>
              <input
                id="appointmentDate"
                name="appointmentDate"
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="nic"
                className="text-gray-900 font-semibold mb-2 block">
                NIC No.
              </label>
              <input
                id="nic"
                name="nic"
                type="text"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
                placeholder="Enter 13 digit NIC"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="text-gray-900 font-semibold mb-2 block">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="department"
                className="text-gray-900 font-semibold mb-2 block">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDoctorFirstName("");
                  setDoctorLastName("");
                }}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all">
                {departmentsArray.map((depart, index) => (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="doctor"
                className="text-gray-900 font-semibold mb-2 block">
                Doctor
              </label>
              <select
                id="doctor"
                name="doctor"
                value={`${doctorFirstName} ${doctorLastName}`}
                onChange={(e) => {
                  const [selectedFirstName, selectedLastName] =
                    e.target.value.split(" ");
                  setDoctorFirstName(selectedFirstName);
                  setDoctorLastName(selectedLastName);
                }}
                disabled={!department}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all">
                <option value="">Select Doctor</option>
                {doctors
                  .filter((doctor) => doctor.doctorDepartment === department)
                  .map((doctor, index) => (
                    <option
                      value={`${doctor.firstName} ${doctor.lastName}`}
                      key={index}>
                      {doctor.firstName} {doctor.lastName}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="address"
                className="text-gray-900 font-semibold mb-2 block">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-gray-100 font-semibold w-full text-sm text-gray-900 px-4 py-3 rounded-md outline-none transition-all"
                placeholder="Enter your address"
              />
            </div>
            <div className="col-span-2 flex items-center justify-end mt-4">
              <label
                htmlFor="hasVisited"
                className="text-gray-900 font-semibold mb-0">
                Have you visited before?
              </label>
              <input
                id="hasVisited"
                name="hasVisited"
                type="checkbox"
                checked={hasVisited}
                onChange={(e) => setHasVisited(e.target.checked)}
                className="ml-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
              />
            </div>
            <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                Book Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
