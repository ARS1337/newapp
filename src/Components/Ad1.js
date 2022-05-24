import React from "react";

function Ad1(props) {
  return (
    <div className=" flex flex-col text-gray-500 w-full drop-shadow-lg">
      <label className="bg-white p-4 rounded-t-lg text-center">
        Give your career a boost with sea&beyond professional services.
      </label>
      <div className="flex flex-row items-center justify-center p-4 rounded-b-lg bg-green-custom text-white">
        <label className="pr-4">CV Prep/Evaluation</label>{" "}
        <img src="/assets/arrowRightSignIn.png" alt="" className="h-4 w-auto" />
      </div>
    </div>
  );
}

export default Ad1;
