import React, { useEffect, useState } from "react";
import Testimonials from "./Testimonials";
import data from "../config";
import { IconContext } from "react-icons/lib";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

function TestimonialContainer(props) {
  const leftScroll = () => {
    let scrollContainer = document.getElementById(props?.id || "scrollContainer");
    scrollContainer.scrollBy({
      left: -330,
      behavior: "smooth",
    });
  };
  const rightScroll = () => {
    let scrollContainer = document.getElementById(props?.id || "scrollContainer");
    scrollContainer.scrollBy({
      left: 330,
      behavior: "smooth",
    });
  };

  const listener = () => {
    let rightCounter = 1;
    let leftCounter = 9;
    setInterval(() => {
      if (rightCounter <= 8 && rightCounter !== 0) {
        rightScroll();
        rightCounter++;
        if (rightCounter === 8) {
          leftCounter = 8;
          rightCounter = 0;
        }
      } else if (leftCounter >= 0 && leftCounter !== 9) {
        leftScroll();
        leftCounter--;
        if (leftCounter === 0) {
          leftCounter = 9;
          rightCounter = 1;
        }
      }
    }, 3500);
  };

  useEffect(() => {
    if (props?.autoScroll === true) {
      listener();
    }
  }, []);
  return (
    <div className="w-full drop-shadow-lg p-0 md:p-2 flex flex-col items-center   my-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4">
        <label className="text-sm md:text-xl font-Poppins-SemiBold  whitespace-nowrap">
          {props?.heading && "Testimonials from our customers..."}
        </label>
        {props?.heading && (
          <div>
            <a
              href="/"
              className=" pt-2 py-2 text-blue-custom font-Poppins-SemiBold flex flex-row items-center justify-between w-full"
            >
              <div className=" whitespace-nowrap text-lg pr-2 "> See all</div>
              <img src="/assets/firstPageTable/arrow-right.png" alt="" className="h-4 w-auto" />
            </a>
          </div>
        )}
      </div>
      <div
        className="flex flex-row items-center justify-between p-0  w-full overflow-x-hidden"
        id={props?.id || "scrollContainer"}
      >
        <div className="absolute h-[10%] w-full flex items-center justify-between ">
          <div
            id={props?.id + "leftButton"}
            className="rounded-full h-8 w-8 md:h-12 md:w-12 bg-white flex items-center justify-center font-Poppins-Bold text-2xl drop-shadow-lg"
            onClick={() => {
              let scrollContainer = document.getElementById(props?.id || "scrollContainer");
              props?.autoScroll &&
                scrollContainer.scrollBy({
                  left: -330,
                  behavior: "smooth",
                });
            }}
          >
            <IconContext.Provider value={{ color: "gray", size: 24, className: "global-class-name" }}>
              <div className="my-8">
                <HiOutlineArrowLeft />
              </div>
            </IconContext.Provider>
          </div>
          <div
            id={props?.id + "rightButton"}
            className="rounded-full  h-8 w-8 md:h-12 md:w-12 bg-white flex items-center justify-center font-Poppins-Bold text-2xl drop-shadow-lg"
            onClick={() => {
              let scrollContainer = document.getElementById(props?.id || "scrollContainer");
              props?.autoScroll &&
                scrollContainer.scrollBy({
                  left: 330,
                  behavior: "smooth",
                });
            }}
          >
            <IconContext.Provider value={{ color: "gray", size: 24, className: "global-class-name" }}>
              <div className="my-8">
                <HiOutlineArrowRight />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default TestimonialContainer;
