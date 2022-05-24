import React from 'react';

function Ad7(props) {
    return (
        <div className="w-full my-4 flex items-center justify-center flex-col shadow-lg rounded-lg">
        <img src="/assets/sea-commerce.png" alt="" />
        <h1 className="my-2 font-Poppins-SemiBold text-xl">Sea-commerce</h1>
        <label className="text-lg text-center my-3 font-Poppins-Regular text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </label>
        <div className="flex flex-row items-center justify-center p-3 rounded-lg bg-dark-blue-custom text-white mb-6">
          <label className="pr-4">Explore More</label>{" "}
          <img src="/assets/arrowRightSignIn.png" alt="" className="h-4 w-auto" />
        </div>
      </div>
    );
}

export default Ad7;