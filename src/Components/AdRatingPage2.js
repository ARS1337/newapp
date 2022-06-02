import React from "react";

const JobComponent = (props) => {
  return (
    <div className="flex flex-row items-start border border-gray-300 border-t-0 border-l-0 border-r-0 py-4">
      <img src={props.src} alt="s" className="h-auto w-20  rounded-lg "/>
      <div className="flex flex-col items-start pl-3 justify-start">
        <label className="text-lg font-Poppins-SemiBold pb-2">{props.title}</label>
        <label className="text-md font-Poppins-Regular text-gray-500">{props.desc}</label>
      </div>
    </div>
  );
};

function AdRatingPage2(props) {
  return (
    <div className="w-full p-4 bg-white rounded-xl overflow-hidden">
      <div className="text-xl my-4 font-Poppins-SemiBold">Jobs</div>
      {
          [1,2,3].map(x=>{
              return <div key={x}>
                  <JobComponent src="/assets/RatingPage/minipost.jpg" title="Lorem ipsum" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
              </div>
          })
      }
    </div>
  );
}

export default AdRatingPage2;
