import React from "react";

function CVPageHeroSection(props) {
  return (
    <div className="w-full flex items-center justify-evenly bg-custom-white">
      <div className="flex flex-col items-start justify-center text-blue-custom font-Poppins-Medium text-md md:text-3xl ml-2 md:ml-0">
        <label className="leading-8 lg:leading-[3rem]"> BETTER <label className="font-Poppins-SemiBold">RESUME.</label> </label>
        <label className="leading-8 lg:leading-[3rem]"> SATISFYING <label className="font-Poppins-SemiBold">CAREER.</label> </label>
        <label className="leading-8 lg:leading-[3rem]"> HAPPIER <label className="font-Poppins-SemiBold">YOU.</label> </label>
      </div>
      <img src='/assets/CVPage/Capture.jpg' alt="better resume" className="w-44 xs:w-44 md:w-44  lg:w-[25rem] h-auto"/>
    </div>
  );
}

export default CVPageHeroSection;
