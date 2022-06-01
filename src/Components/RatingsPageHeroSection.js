import React from "react";
import { IconContext } from "react-icons";
import { IoSearchSharp } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const CustomInputRatings = (props) => {
  return (
    <div className="relative w-full  bg-white rounded-lg flex justify-end ml-0 md:ml-2">
      <IconContext.Provider value={{ color: "rgb(75 85 99)", size: 24, className: "global-class-name" }}>
        <div className="my-5 pl-2">{props?.icon}</div>
      </IconContext.Provider>
      <input
        type="text"
        className="p-5 pl-1 outline-none  w-[90%] md:w-[90%] lg:w-[85%] mr-1 text-sm md:text-md placeholder-gray-600"
        placeholder={props.placeholder}
      />
    </div>
  );
};

function RatingsPageHeroSection(props) {
  return (
    <div className="w-full  bg-Ratinghero h-[380px] bg-cover bg-no-repeat bg-center px-4 md:px-24 pb-8 md:pb-4 lg:pb-12 flex flex-col items-center justify-end relative">
      <div className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-Poppins-SemiBold z-10 pb-4 text-center">Search Company Reviews and Ratings</div>
      <div className="w-full ratingHero lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-[80%] lg:min-w-[1000px] grid grid-cols-2   gap-2 md:gap-4 lg:gap-6 bg-white bg-opacity-50 py-4 px-3 md:py-6 md:px-2 rounded-md">
        <CustomInputRatings placeholder="Job Title" icon={<IoSearchSharp />} />
        <CustomInputRatings placeholder="Jobs By Category" icon={<BsStack />} />
        <CustomInputRatings placeholder="Location" icon={<MdLocationOn />} />
        <button className="p-4 z-50 lg:max-w-min col-span-2 lg:col-auto w-full rounded-lg bg-green-custom  text-md md:text-lg font-Poppins-Medium text-white mr-2">
          Search
        </button>
      </div>
    </div>
  );
}

export default RatingsPageHeroSection;
