import React from "react";

function HelpSection(props) {
  return (
    <div className="  w-full border overflow-hidden  border-blue-custom rounded-xl grid grid-cols-1 md:grid-cols-2 my-12 bg-white">
      {/* {props?.questionList?.map((question, key) => {
        return ( */}
          <div className="p-4 text-lg text-blue-custom border sm:border-r-0 md:border-r-[1px] border-l-0 border-t-0 border-blue-custom overflow-hidden hover:cursor-pointer">
            <div className="text-md font-Poppins-Regular flex flex-row items-center w-full justify-between hover:cursor-pointer">
              <label className="hover:cursor-pointer">{"Need help with Visa/Forex"}</label>
              <img src="/assets/arrow-right-blue.png" alt="" className="hover:cursor-pointer"/>
            </div>
          </div>
          <div className="p-4 text-lg text-blue-custom border border-l-0 border-t-0 border-r-0 border-blue-custom overflow-hidden hover:cursor-pointer">
            <div className="text-md font-Poppins-Regular flex flex-row items-center w-full justify-between hover:cursor-pointer">
              <label className="hover:cursor-pointer">{"Didn't find what you're looking for ?"}</label>
              <img src="/assets/arrow-right-blue.png" alt="" className="hover:cursor-pointer"/>
            </div>
          </div>
          <div className="p-4 text-lg text-blue-custom border border-t-0 border-l-0 md:border-b-0 md:border-r-[1px] sm:border-b-[1px] sm:border-r-0 border-blue-custom overflow-hidden hover:cursor-pointer">
            <div className="text-md font-Poppins-Regular flex flex-row items-center w-full justify-between hover:cursor-pointer">
              <label className="hover:cursor-pointer">{"Need help with Accommodation"}</label>
              <img src="/assets/arrow-right-blue.png" alt="" className="hover:cursor-pointer"/>
            </div>
          </div>
          <div className="p-4 text-lg text-blue-custom  border-blue-custom overflow-hidden hover:cursor-pointer">
            <div className="text-md font-Poppins-Regular flex flex-row items-center w-full justify-between hover:cursor-pointer">
              <label className="hover:cursor-pointer">{"Need help with Loan"}</label>
              <img src="/assets/arrow-right-blue.png" alt="" className="hover:cursor-pointer"/>
            </div>
          </div>
        {/* );
      })} */}
    </div>
  );
}

export default HelpSection;
