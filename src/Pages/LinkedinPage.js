import React from "react";
import CustomCard from "../Components/CustomCard";

function LinkedinPage(props) {
  return (
    <div className="w-full my-8">
      <div className="rounded-md bg-white drop-shadow-md flex flex-col items-center justify-center p-4">
        <label className="text-4xl py-12 font-Poppins-SemiBold">Do you know:</label>
        <div className="relative w-[90%] lg:w-[80%] mb-12">
          <div className="border border-gray-400 h-0.5 w-full"> </div>
          <div className="absolute h-10 rotate-45 w-10  border border-gray-400 -top-5 left-[45%] ;g:left-[47%] border-t-0 border-l-0 bg-white"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between my-10">
          <CustomCard text="122 million persons have received an Interview through LinkedIn" number={1} />
          <CustomCard text="35.3 million have been hired by a person they connected on LinkedIn" number={2} />
          <CustomCard
            text="Most Marine companies are now on LinkedIn and actively scout talent for shore jobs on LinkedIn"
            number={3}
          />
        </div>
        <div className="w-full rounded-md bg-green-custom p-2 font-ita lg:p-6 text-white text-xl text-center relative my-4">
          Excerpts from the Survey done by Sea and Beyond on the usage of LinkedIn by mariners (1000 mariners surveyed)
          <div className="absolute h-12 rotate-45 w-12  border  top-20 left-[47%] border-t-0 border-l-0 bg-green-custom"></div>
        </div>
      </div>
    </div>
  );
}

export default LinkedinPage;
