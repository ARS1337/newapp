import React from "react";

function CVPageHeroSection(props) {
  return (
    <div className="w-full flex items-center justify-evenly bg-custom-white">
      <div className="flex flex-col items-start justify-center text-dark-blue-custom text-md md:text-4xl ml-2 md:ml-0">
        <label> BETTER RESUME. </label>
        <label> SATISFYING CAREER. </label>
        <label> HAPPIER YOU. </label>
      </div>
      <img src='/assets/CVPage/Capture.jpg' alt="better resume" className="h-36 xs:h-32 md:h-44 lg:h-auto w-auto"/>
    </div>
  );
}

export default CVPageHeroSection;
