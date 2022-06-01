import React from "react";

function CustomCard(props) {
  return (
    <div className="w-full flex flex-col items-center justify-end lg:mx-4 mb-8 lg:mb-0 min-h-[120px]">
      <div className="relative w-[80%] mb-6 md:mb-12">
        <div className="border border-blue-custom h-0.5"> </div>
        <div className="absolute h-12 w-12  border rounded-full -top-6 left-[45%] md:left-[45%] lg:left-[40%] border-t-0 border-l-0 bg-blue-custom flex items-center justify-center text-2xl text-white font-Poppins-Regular">{props.number}</div>
      </div>
      <div className="text-center text-gray-600 text-md md:text-lg py-2  w-[80%] md:w-[90%]">
          {props.text}
      </div>
    </div>
  );
}

export default CustomCard;
