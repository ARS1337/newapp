import React from "react";

const JobsCustomButton = (props) => {
  return (
    <>
      <div className={" relative h-10 rounded-md flex items-center justify-between z-50 flex-row p-6 " + props.bgColor}>
        <button className={" font-Poppins-Medium p-1.5 " + props.buttonTextColor}>{props.buttonText}</button>
        <img className=" h-5 w-auto px-2 pr-2  text-lg " src={props.iconSrc} alt={props.buttonText} />
      </div>
    </>
  );
};

function JobsTable(props) {
  return (
    <div className="drop-shadow-lg bg-white p-4 lg:p-7 text-gray-600 font-Poppins-Regular overflow-hidden rounded-xl">
      <div className="bg-green-custom text-white absolute -right-16 top-8 p-2 px-20 rotate-45">{props.type}</div>
      <div className="font-Poppins-SemiBold text-lg lg:text-xl my-2 text-black">{props.name}</div>
      <div className="flex flex-row items-center justify-start py-2 text-md lg:text-lg">
        <img src="/assets/Group 129.png" alt="location" className="pr-1" />
        <div>{props.location}</div>
      </div>
      <div className="text-md lg:text-lg">Position:{props.position}</div>
      <div className="text-md lg:text-lg">Experience:{props.experience}</div>
      <div className="py-1 text-md lg:text-lg">{props.desc}</div>
      <div className="flex flex-row items-center justify-start mt-3  ">
        <div className="mr-8"> 
          <JobsCustomButton
            bgColor="bg-green-custom"
            buttonTextColor="text-white text-md md:text-lg whitespace-nowrap" 
            buttonText="View More"
            iconSrc="/assets/ThirdPage/iconfinder_outlined_log_in_4280467 copy 6.png"
            className=" mr-4 "
          />
        </div>

        <JobsCustomButton
          bgColor="bg-blue-custom"
          buttonTextColor="text-white text-md md:text-lg whitespace-nowrap"
          buttonText="Apply"
          iconSrc="/assets/ThirdPage/iconfinder_outlined_log_in_4280467 copy 6.png"
        />
      </div>
    </div>
  );
}

export default JobsTable;
