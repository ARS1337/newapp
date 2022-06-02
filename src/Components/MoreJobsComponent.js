import React from "react";

function MoreJobsComponent(props) {
  return (
    <>
        <div className=" flex flex-col text-gray-500 bg-gray-300 rounded-lg w-full ">
          <label className=" p-4 rounded-t-lg text-center text-black ">Ship Management</label>
          <hr className="border-gray-400 " />
          <div className="flex flex-row items-center justify-start p-2">
            <img src="/assets/Group 21.png" alt="" />
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
