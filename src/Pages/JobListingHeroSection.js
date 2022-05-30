import React from "react";

function JobListingHeroSection(props) {
  return (
    <div className="w-full bg-eduhero h-[320px] bg-cover bg-no-repeat bg-center px-4 md:px-24 pb-4 md:pb-4 lg:pb-12 flex items-end justify-center">
      <div className="w-full grid grid-cols-2  lg:grid-cols-4 gap-8 bg-white bg-opacity-50 py-4 px-3 md:py-6 md:px-2 rounded-md">
        <div className="relative w-full ml-2 bg-white rounded-lg flex justify-end">
          <img src="/assets/Group 21.png" alt="" className="absolute left-5 top-5 h-5 w-5" />
          <input type="text" className="p-5 outline-none  w-[85%] mr-1 text-md" placeholder="Job title" />
        </div>

        <div className="relative w-full bg-white rounded-lg flex justify-end">
          <img src="/assets/Rectangle 85.png" alt="" className="absolute left-6 top-5 h-5 w-5" />
          <input type="text" className="p-5 outline-none  w-[85%] mr-1 " placeholder="Jobs by category" />
        </div>

        <div className="relative w-full bg-white rounded-lg flex justify-end">
          <img src="/assets/Rectangle 92.png" alt="" className="absolute left-6 top-5 h-5 w-5" />
          <input type="text" className="p-5 outline-none  w-[85%] mr-1 " placeholder="Location" />
        </div>

        <button className="p-4 col-span-2 lg:col-auto w-full rounded-lg bg-green-custom text-lg font-Poppins-Medium text-white mr-2">
          Search
        </button>
      </div>
    </div>
  );
}

export default JobListingHeroSection;
