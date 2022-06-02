import React from "react";

const ComparisonComponent = (props) => {
  return (
    <div className="bg-white p-4 flex flex-col items-center justify-center rounded-lg my-1">
      <label className="text-center py-1 text-md md:text-md lg:text-lg text-blue-custom font-Poppins-SemiBold">HMR Institute of Technology & Management (HMRITM)</label>
      <div className="flex flex-row items-center">
        <img src="/assets/SecondPage/pin.png" alt="location" className="h-4 w-4" />
        <label className="text-xs">NEW DELHI, DELHI NCR ( India )</label>
      </div>
    </div>
  );
};

function CompareContainer(props) {
  return (
    <div className=" mx-4 bg-blue-custom rounded-lg p-4 w-[600px] md:w-[300px] flex flex-col text-gray-500">
      <ComparisonComponent />
      <div className="flex items-center justify-center">
        <label className="h-8 w-8 rounded-full flex items-center justify-center text-white bg-green-custom">VS</label>
      </div>
      <ComparisonComponent />

      <div className="flex items-center justify-center my-2">
        <button className="w-[80%] text-white bg-green-custom rounded-lg p-2 font-Poppins-SemiBold">Compare</button>
      </div>
    </div>
  );
}

export default CompareContainer;
