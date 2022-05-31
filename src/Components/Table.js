import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Table(props) {
  const [showPopup, setshowPopup] = useState(false);
  const handleClick = (e) => {
    setshowPopup(!showPopup);
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md flex flex-col md:flex-row gap-8 p-4 md:p-4 text-gray-500">
      <img src="/assets/Rectangle 182.png" alt="img" className="h-28 w-32 md:h-32 md:w-32 " />
      <div className=" h-full w-[100%]">
        <Link
          to="Second"
          onClick={() => {
            props.setcurrPage("second");
          }}
        >
          <label className="text-lg text-blue-custom font-Poppins-SemiBold">{props.title}</label>
        </Link>
        <div className="flex flex-col md:flex-row items-start md:items-center md:mt-2">
          <div className="flex flex-row items-center">
            <img src="/assets/Group 129.png" alt="locaiton" />
            <label className=" text-md text-green-custom font-Poppins-Medium pl-2">{props.location}</label> &nbsp;
            &nbsp;<div className="hidden md:block">|</div>
            &nbsp;
          </div>

          <div className="mt-2 md:mt-0">
            <label className="text-black text-md font-Poppins-SemiBold">Fees:</label>
            {props.fees}
          </div>
        </div>
        <div className="md:flex flex-row items-center justify-start grid grid-cols-2 gap-0 whitespace-nowrap my-4 font-Poppins-Regular  ">
          <div className="flex flex-col md:pr-3 lg:border border-gray-400 lg:border-b-0 lg:border-l-0 lg:border-t-0 pb-3 md:pb-0">
            <label className="text-xs lg:text-xs">Type of course</label>
            <label className="text-md md:text-lg lg:text-xl">{props.type}</label>
          </div>
          <div className="flex flex-col md:px-3 lg:border border-gray-400 lg:border-b-0 lg:border-l-0 lg:border-t-0">
            <label className="text-sm md:text-xs">No. of courses</label>
            <label className="text-md lg:text-xl">{props.no}</label>
          </div>
          <div className="flex flex-col md:px-3  lg:border border-gray-400 lg:border-b-0 lg:border-l-0 lg:border-t-0 pb-3 md:pb-0">
            <label className="text-sm md:text-xs">Duration</label>
            <label className="text-md lg:text-xl">{props.duration}</label>
          </div>
          <div className="flex flex-col md:pl-3">
            <label className="text-sm md:text-xs">Mode of Study</label>
            <label className="text-md lg:text-xl">{props.mode}</label>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <Link to="Third">
            <button className="p-2 px-5 text-white bg-blue-custom rounded-md text-sm lg:text-lg font-Poppins-Medium mr-4">
              Compare
            </button>
          </Link>
          <div className="flex flex-row items-center justify-between md:max-w-[250px] w-full min-w-[150px] max-w-[160px] md:min-w-[230px]">
            <a href="/" className="text-md md:text-lg lg:text-xl text-gray-400 font-Poppins-Regular flex flex-row items-center ">
              <img src="/assets/Group 1.png" alt="download" className=" mr-2 h-4 w-4 lg:h-6 lg:w-6" />
              Brochure
            </a>
            <img src="/assets/call-center.png" alt="call" className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
            <div className="relative " onClick={handleClick}>
              <img src="/assets/Union 2.png" alt="call" className="mr-2 h-4 w-4 lg:h-6 lg:w-6 " />
              <div className=" h-full w-[20px] absolute -top-44 right-3">
                <div
                  className={
                    showPopup
                      ? "flex flex-col items-center justify-center bg-green-custom w-10 p-2 pb-0 rounded-lg relative "
                      : "  hidden"
                  }
                >
                  <img src="/assets/firstPageTable/logo.png" alt="" className=" m-2" />
                  <img src="/assets/firstPageTable/instagram.png" alt="" className=" m-2" />
                  <img src="/assets/firstPageTable/Path 65.png" alt="" className=" m-2" />
                  <img src="/assets/firstPageTable/facebook.png" alt="" className=" m-2" />
                  <div
                    className={showPopup ? " h-4 w-4 bg-green-custom rotate-45 -bottom-1 absolute block" : " hidden"}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
