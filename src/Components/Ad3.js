import React from 'react';

function Ad3(props) {
    return (
        <div className="bg-ad3 bgimgcard bg-opacity-70 w-full bg-cover bg-no-repeat bg-center p-3 flex items-center justify-center flex-col text-white rounded-xl mb-6 drop-shadow-lg">
        <label className="pb-6 text-xl">Jobs</label>
        <label className="text-center pb-6 text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </label>
        <div className="flex flex-row items-center justify-center p-3 rounded-lg bg-green-custom text-white mb-6">
          <label className="pr-4">Know More</label>{" "}
          <img src="/assets/arrowRightSignIn.png" alt="" className="h-4 w-auto" />
        </div>
      </div>
    );
}

export default Ad3;