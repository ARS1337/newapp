import React from "react";

function Table(props) {
  return (
    <div className="w-full bg-white rounded-md shadow-md flex flex-col md:flex-row gap-8 p-8 text-gray-500">
      <img src="/assets/Rectangle 182.png" alt="img" className="h-20 w-36 md:h-40 md:w-auto " />
      <div className=" h-full w-[100%]">
        <label className="text-lg text-blue-custom font-Poppins-Medium">{props.title}</label>
        <div className="flex flex-row items-center mt-2">
          <img src="/assets/Group 129.png" alt="locaiton" />
          <label className="font-Poppins-Regular text-md text-green-custom">{props.location}</label> &nbsp; &nbsp;|
          &nbsp;
          <label>
            <label className="text-black text-md font-Poppins-SemiBold">Fees:</label>
            {props.fees}
          </label>
        </div>
        <div className="inline-grid gap-1 grid-cols-2 lg:grid-cols-4 my-3">
          <div className="flex flex-col">
            <label>Type of course</label>
            <label className="text-2xl">{props.type}</label>
          </div>
          <div className="flex flex-col">
            <label>No. of courses</label>
            <label className="text-2xl">{props.no}</label>
          </div>
          <div className="flex flex-col">
            <label>Duration</label>
            <label className="text-2xl">{props.duration}</label>
          </div>
          <div className="flex flex-col">
            <label>Mode of Study</label>
            <label className="text-2xl">{props.mode}</label>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <button className="p-2 px-3 text-white bg-blue-custom rounded-md text-lg font-Poppins-Regular">Compare</button>
          <div className="flex flex-row items-center justify-between w-1/3">
            <img src="/assets/Group 1.png" alt="download" />
            <a href="/" className="text-gray-600 text-lg font-Poppins-Regular">
              Brochure
            </a>
            <img src="/assets/call-center.png" alt="call" />
            <img src="/assets/Union 2.png" alt="call" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
