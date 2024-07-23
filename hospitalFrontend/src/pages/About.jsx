import React from "react";
import Biography from "../components/Biography";

const About = () => {
  return (
    <div className="mt-20">
      
      <div className="font-[sans-serif] text-gray-800 bg-gray-100 px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold mb-6">
              Welcome to Our Website
            </h2>
            <p className="mb-4 text-sm">
              Welcome to Arun Medical Institute, where we are dedicated to
              providing exceptional healthcare solutions. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Proin aliquam, ipsum vel
              iaculis bibendum, justo turpis ullamcorper mauris, non aliquam
              nisi purus vel nisl. Integer efficitur turpis in bibendum
              tincidunt.
            </p>
            <p className="mb-4 text-sm">
              Our mission is to innovate healthcare delivery, focusing on
              patient-centric care and advancing medical technology. Nulla
              facilisi. Vestibulum fringilla leo et purus consectetur, vel
              tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce
              vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.
            </p>
            <p className="text-sm">
              At Arun Medical Institute, we strive for excellence in healthcare
              management, ensuring quality, safety, and compassionate service.
              Duis accumsan, nunc et tempus blandit, metus mi consectetur felis
              turpis vitae ligula. Nunc et tempus blandit, metus mi consectetur
              felis turpis vitae ligula.
            </p>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24">
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">Customization</h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24">
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">Security</h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24">
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">Support</h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24">
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">Performance</h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24">
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">Global Reach</h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24">
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">Communication</h6>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://readymadeui.com/management-img.webp"
              alt=""
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <Biography image={"/whoweare.png"} />
    </div>
  );
};

export default About;
