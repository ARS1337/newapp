import React from "react";
import SimpleAccordion from "./SimpleAccordion";
import { Link } from "react-router-dom";
import CheckmarkListing from "./CheckmarkListing";

function SecondPageTable(props) {
  return (
    <div className="w-full p-6 drop-shadow-lg rounded-lg bg-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <label className="text-blue-custom text-lg lg:text-2xl font-Poppins-SemiBold">{props.name}</label>
        <Link
          to="/Third"
        >
          <button className="hidden md:block p-2 bg-blue-custom rounded-lg w-full md:w-min text-lg font-Poppins-Medium text-white mt-3 md:mt-0">
            Compare
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start mb-4 mt-1">
        <div className="flex flex-row items-center my-2 md:my-0">
          <img src="/assets/SecondPage/Group 30.png" alt="duration" className="h-5 w-5 mr-2" />
          <label className="text-green-custom text-md pl-1">{props.duration}</label>
        </div>
        <div className="flex flex-row items-center my-1 md:my-0 md:mx-3">
          <img src="/assets/SecondPage/Group 30.png" alt="duration" className="h-5 w-5 mr-2" />
          <label className="text-green-custom text-md pl-1">{props.mode}</label>
        </div>
        <div className="flex flex-row items-center my-1 md:my-0 md:mx-3">
          <img src="/assets/SecondPage/Path 38.png" alt="duration" className="h-5 w-5 mr-2" />
          <label className="text-green-custom text-md pl-1">{props.graduation}</label>
        </div>
        <div className="flex flex-row items-center my-1 md:my-0 md:mx-3">
          <img src="/assets/SecondPage/calendar-interface-symbol-tool.png" alt="duration" className="h-5 w-5 mr-2" />
          <label className="text-green-custom text-md pl-1">{props.date}</label>
        </div>
        <Link
          to="/Third"
        >
          <button className="block md:hidden p-2 bg-blue-custom rounded-lg w-full md:w-min text-lg font-Poppins-Medium text-white mt-3 md:mt-0">
            Compare
          </button>
        </Link>
      </div>
      <div>
        <label className="text-blue-custom text-lg lg:text-xl font-Poppins-Bold ">Fees:&nbsp;{props.fees}</label>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start w-full">
        <SimpleAccordion heading="">
          <ul>
            <CheckmarkListing text={"Eligibility:- " + props.eligibility} />
            <CheckmarkListing text={"Visa:- " + props.visa} />
            <CheckmarkListing text={"Scholorship:- " + props.scholarshipAvailable} />
          </ul>
        </SimpleAccordion>

        <div className="flex flex-row items-center justify-between w-full max-w-xs w-full pt-2 mb-4 md:mb-0">
          <img src="/assets/Group 1.png" alt="download" />
          <a href="/" className="text-gray-600 text-lg font-Poppins-Regular">
            Brochure
          </a>
          <img src="/assets/call-center.png" alt="call" />
          <img src="/assets/Union 2.png" alt="call" />
        </div>
      </div>
      <a
        href="/"
        className="text-blue-custom text-lg font-Poppins-SemiBold flex items-center justify-center md:justify-end"
      >
        View Infomation Session
      </a>
    </div>
  );
}

export default SecondPageTable;
