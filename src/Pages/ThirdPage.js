import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CompareContainer from "../Components/CompareContainer";
import ComparisionTable from "../Components/ComparisionTable";
import TestimonialContainer from "../Components/TestimonialContainer";
import Testimonials from "../Components/Testimonials";
import data from "../config";

const CustomButtonRadio = (props) => {
  return (
    <button
      className={"h-full w-1/2 p-1 md:p-5 text-sm whitespace-nowrap md:text-xl font-Poppins-Regular  " + props.bgColor}
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

function ThirdPage(props) {
  const [button, setbutton] = useState(1);

  return (
    <div className="w-full mt-8 ">
      <div className="flex items-center justify-center flex-col">
        <div className="w-full md:w-[80%] rounded-lg overflow-hidden  mt-6 drop-shadow-lg">
          <CustomButtonRadio
            onClick={() => {
              setbutton(1);
            }}
            bgColor={button === 1 ? " bg-green-custom text-white" : "bg-gray-200"}
            text="Compare University"
          />
          <CustomButtonRadio
            onClick={() => {
              setbutton(2);
            }}
            bgColor={button === 2 ? " bg-green-custom text-white" : "bg-gray-200"}
            text="Compare Courses"
          />
        </div>
        <div className="bg-slate-300 w-full my-8 rounded-lg">
          <ComparisionTable />
        </div>
        <div className="px-2 w-full">
          <div className=" flex flex-row items-center justify-around w-full bg-green-custom rounded-lg drop-shadow-lg p-2 my-3">
            <div className="flex flex-row justify-start items-center p-4">
              <img src="/assets/ThirdPage/confusion.png" alt="confusion " className="pr-2 md:pr-4" />
              <label className="text-white text-lg md:text-2xl">Still Confused ?</label>
            </div>
            <button className="flex flex-row bg-white p-1 items-center px-2 md:p-3 md:px-5 rounded-lg">
              <label className="text-green-custom font-Poppins-SemiBold pr-1 md:pr-4">Contact us</label>
              <img src="/assets/ThirdPage/arrow-right.png" alt="contact us button" />
            </button>
          </div>
        </div>

        <div className="w-full">
          <TestimonialContainer autoScroll={false} key="comparison" id="comparison" heading={false}>
            {data.testimonials.map((testimonial, key) => {
              return (
                <div key={"comparison" + key} className=" w-[300px] lg:w-[600px]  flex items-center justify-center">
                  <CompareContainer title={testimonial.title} heading={testimonial.heading} body={testimonial.body} />
                </div>
              );
            })}
          </TestimonialContainer>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
