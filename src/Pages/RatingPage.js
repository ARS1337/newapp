import React from "react";
import CustomButtons from "../utils/CustomButtons";

function RatingPage(props) {
  return (
    <div className="w-full mt-6">
      <div className="bg-white p-6 font-Poppins-Regular rounded-lg">
        <div className="flex flex-col md:flex-row  items-start md:items-center justify-between">
          <label className="text-3xl text-blue-custom font-Poppins-SemiBold pb-4 md:pb-0">CMA CGM Group</label>
          <CustomButtons
            bgColor="bg-white border border-blue-custom"
            buttonText="Add Review"
            buttonTextColor="text-blue-custom font-Poppins-Regular text-lg"
            iconSrc="/assets/arrow-right-blue.png"
            padding=" p-3 px-6 "
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4  md:gap-x-8 gap-y-4 md:grid-cols-4 w-full mt-6 md:whitespace-nowrap">
          <label className="">Website:</label>
          <label className="text-gray-600 text-md lg:text-lg text-left ">www.cma-cgm.com</label>

          <label className="">Headquarters:</label>
          <label className="text-gray-600 text-md lg:text-lg">Marseille, France</label>

          <label>Size:</label>
          <label className="text-gray-600 text-md lg:text-lg">22,000</label>

          <label>Size:</label>
          <label className="text-gray-600 text-md lg:text-lg">1978</label>
        </div>
        <div className="border border-gray-200 w-full h-0.5 my-6"></div>
        <div className="text-gray-500 text-md md:text-lg mb-2 ">
          CMA CGM Group is the world’s third largest shipping company. They have a fleet of 471 vessels that call at 420
          ports in 160 countries. In total they have 765 offices around the globe.
        </div>
        <div className="text-gray-500 text-md md:text-lg">
          Their largest ship is the CMA CGM Georg Forster which can handle 18,000 twenty-foot containers. Their name is
          an French acronym which stands for “Maritime Freighting Company – General Maritime Company".
        </div>
      </div>
    </div>
  );
}

export default RatingPage;
