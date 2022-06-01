import React from "react";
import { IconContext } from "react-icons/lib";

const RatingsCol = (props) => {
  return (
    <div className="flex flex-col items-center justify-center px-1 sm:px-4 md:px-6 lg:px-8 ">
      <img src={props.src} alt="" className="h-auto w-6 sm:w-6 md:w-8 pb-1 sm:pb-3 lg:pb-4" />
      {props?.select ? (
        <select className=" text-sm md:text-lg lg:text-lg font-Poppins-Medium outline-none px-2 text-center bg-white rounded-md">
          <option disabled hidden selected className="text-sm md:text-lg lg:text-lg font-Poppins-Medium outline-none px-2 text-center bg-white">{props.text}</option>
          {props?.options.map((option, key) => {
            return <option key={key} className="px-6 ">{option}</option>;
          })}
        </select>
      ) : (
        <label className=" text-sm md:text-lg lg:text-lg font-Poppins-Medium text-center">{props.text}</label>
      )}
    </div>
  );
};

function RatingsDescription(props) {
  return (
    <div className=" bg-white flex flex-row items-center justify-center md:justify-start  px-1 md:ml-32 lg:ml-[12%] py-6 ">
      <div className="flex flex-row items-center justify-between ">
        <RatingsCol text="Overview" src="/assets/RatingPage/edit.png" />
        <RatingsCol
          text="Review (25k)"
          src="/assets/RatingPage/star.png"
          select={true}
          options={["4 ★ & above", "3 ★ & above", "2 ★ & above","1 ★ & above"]}
        />
        <RatingsCol text="Location (10)" src="/assets/RatingPage/location.png" />
        <RatingsCol text="Photos (10)" src="/assets/RatingPage/img.png" />
      </div>
    </div>
  );
}

export default RatingsDescription;
