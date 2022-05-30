import React from "react";
import JobsTable from "../Components/JobsTable";
import data from "../config";

function JobsListing(props) {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full my-8 text-gray-500">
        <label className="font-Poppins-Medium text-md">1-5 of 50</label>
        <div className="flex flex-row items-center">
          <img src="Group 5.png" alt="" />
          <label className="font-Poppins-Medium text-md">Sort by :</label>
          <select className="px-4 p-2 bg-transparent font-Poppins-Medium text-md">
            <option className="font-Poppins-Medium text-md ">Example</option>
            <option className="font-Poppins-Medium text-md ">Location</option>
            <option className="font-Poppins-Medium text-md ">Recommended</option>
          </select>
        </div>
      </div>
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
      <div className=" w-full flex justify-center mt-4 mb-8">
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
