import React from "react";
import MoreJobsComponent from "./MoreJobsComponent";

function Ad5(props) {
  return (
    <>
      <div className="p-4 bg-white rounded-lg rounded-b-none flex flex-col items-start justify-center pb-3 drop-shadow-lg">
        <label className="font-Poppins-Medium text-xl">More Jobs</label>
        {[1, 2, 3].map((x,key) => (
          <div className="w-full py-3" key={key}>
            <MoreJobsComponent />
          </div>
        ))}
      </div>
      <button className="w-full bg-blue-custom p-3 rounded-md rounded-t-none text-white hover:opacity-90">
        See All
      </button>
    </>
  );
}

export default Ad5;
