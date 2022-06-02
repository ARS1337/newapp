import React from "react";
import { IconContext } from "react-icons/lib";
import { MdLocationOn } from "react-icons/md";

function MoreJobsComponent(props) {
  return (
    <>
        <div className=" flex flex-col text-gray-500 bg-gray-100 rounded-lg w-full ">
          <label className=" p-4 rounded-t-lg text-left text-black ">Ship Management</label>
          <hr className="border-gray-400 " />
          <div className="flex flex-row items-center justify-start p-2">
            <IconContext.Provider value={{size:24,color:'gray'}}>
              <MdLocationOn/>
            </IconContext.Provider>
            <label>Mumbai, India</label>
          </div>
          <label className="font-Poppins-Medium text-md pl-4 text-blue-custom ">Technical Supt'd...</label>
          <div className="flex flex-row items-center justify-center p-4 rounded-b-lg bg-green-custom text-white">
            <label className="pr-4">View More</label>{" "}
            <img src="/assets/arrowRightSignIn.png" alt="" className="h-4 w-auto" />
          </div>
        </div>
    </>
  );
}

export default MoreJobsComponent;
