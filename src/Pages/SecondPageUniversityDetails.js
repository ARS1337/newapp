import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainTable from "../Components/MainTable";
import SecondPageTableContainer from "../Components/SecondPageTableContainer";
import data from "../config";

const CustomButtonRadio = (props) => {
  return (
    <button
      className={"h-full w-1/3 p-1 md:p-5 text-sm whitespace-nowrap md:text-xl font-Poppins-Regular  " + props.bgColor}
      onClick={() => {
        props.onClick();
      }}
    >
      <Typography noWrap>
        <label className="text-sm whitespace-nowrap md:text-xl font-Poppins-Regular">{props.text}</label>
      </Typography>
    </button>
  );
};

function SecondPageUniversityDetails(props) {
  const [button, setbutton] = useState(2);
  useEffect(() => {
    props.setcurrPage("second");
  }, []);
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row bg-white drop-shadow-lg p-4 md:p-6 mt-12 rounded-lg">
        <img
          src="/assets/SecondPage/Rectangle 95.png"
          alt="university placeholder"
          className="h-28 w-36 md:h-32 md:w-auto border-2 p-3 rounded-lg border-green-custom"
        />
        <div className="flex flex-col px-2 md:px-6 pt-2 md:pt-0">
          <label className="text-xl lg:text-2xl font-Poppins-SemiBold">
            Indian Institue of Technology of Delhi, Delhi Overview
          </label>
          <div className="flex flex-row items-center justify-start pt-0.5">
            <img src="/assets/SecondPage/pin.png" alt="location" className="h-4 w-4" />
            <label className="text-green-custom text-lg font-Poppins-Regular pl-0 md:pl-2">
              New Delhi, Delhi Ncr ( India )
            </label>
          </div>
        </div>
      </div>
      <div className="w-full  mt-6 ">
        <CustomButtonRadio
          onClick={() => {
            setbutton(1);
          }}
          bgColor={button === 1 ? " bg-green-custom " : "bg-gray-200"}
          text="Overview"
        />
        <CustomButtonRadio
          onClick={() => {
            setbutton(2);
          }}
          bgColor={button === 2 ? " bg-green-custom " : "bg-gray-200"}
          text="Course & Fees"
        />
        <CustomButtonRadio
          onClick={() => {
            setbutton(3);
          }}
          bgColor={button === 3 ? " bg-green-custom " : "bg-gray-200"}
          text="Application Process"
        />
      </div>
      <SecondPageTableContainer data={data} />
    </div>
  );
}

export default SecondPageUniversityDetails;
