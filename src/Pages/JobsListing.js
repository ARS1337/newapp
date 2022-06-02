import React from "react";
import { FaFilter } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import JobsTable from "../Components/JobsTable";
import data from "../config";

function JobsListing(props) {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full my-4 mt-5 text-gray-400 px-2">
        <label className="font-Poppins-Medium text-md lg:text-lg">1-5 of 50</label>
        <div className="flex flex-row items-center">
          <IconContext.Provider value={{ color: "rgb(156 163 175 )", size: 18, className: "global-class-name" }}>
            <div className="my-0 md:my-4 lg:my-8">
              <FaFilter />
            </div>
          </IconContext.Provider>
          <label className="font-Poppins-Medium text-md lg:text-lg pl-2 pr-2 lg:pl-4 whitespace-nowrap">Sort by </label>
          <select className="px-0 outline-none lg:px-4 p-2 bg-transparent font-Poppins-Medium text-md lg:text-lg">
            <option className="font-Poppins-Medium text-md ">Example</option>
            <option className="font-Poppins-Medium text-md ">Location</option>
            <option className="font-Poppins-Medium text-md ">Recommended</option>
          </select>
        </div>
      </div>
     <div className="w-full px-2 md:px-0">
     {data?.jobs?.map((jobsData, key) => {
        return (
          <div className="my-4 w-full" key={key}>
            <JobsTable
              name={jobsData.name}
              location={jobsData.location}
              type={jobsData.type}
              position={jobsData.position}
              experience={jobsData.experience}
              desc={jobsData.desc}
            />
          </div>
        );
      })}
     </div>
      <div className=" w-full flex justify-center mt-4 mb-0 md:mb-8">
        <div className="flex items-center justify-between text-green-custom font-Poppins-Medium text-lg ">
          <label className="w-full p-2 rounded-md hover:bg-green-custom hover:text-white">Previous</label>
          <button className="w-full p-2 rounded-md hover:bg-green-custom hover:text-white">1</button>
          <button className="w-full p-2 rounded-md hover:bg-green-custom hover:text-white">2</button>
          <button className="w-full p-2 rounded-md hover:bg-green-custom hover:text-white">3</button>
          <button className="w-full p-2 rounded-md hover:bg-green-custom hover:text-white">4</button>
          <button className="w-full p-2 rounded-md hover:bg-green-custom hover:text-white">5</button>
          <label className="w-full p-2 rounded-md hover:bg-green-custom hover:text-white">Next</label>
        </div>
      </div>
    </>
  );
}

export default JobsListing;
