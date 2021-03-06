import React, { useEffect, useState } from "react";
import Testimonials from "./Testimonials";
import data from "../config";
import { IconContext } from "react-icons/lib";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

function TestimonialContainer(props) {
  const leftScroll = () => {
    let scrollContainer = document.getElementById(props?.id || "scrollContainer");
    scrollContainer.scrollBy({
      left: -props?.scrollBy || -330,
      behavior: "smooth",
    });
  };
  const rightScroll = () => {
    let scrollContainer = document.getElementById(props?.id || "scrollContainer");
    scrollContainer.scrollBy({
      left: props?.scrollBy || 330,
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
    <div className={"w-full drop-shadow-lg p-0 md:p-2 flex flex-col items-center my-4" + " " + props?.bodyStyle}>
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 px-2">
        <label className={"text-md md:text-xl font-Poppins-SemiBold  whitespace-nowrap" + " " + props?.headingStyle}>
          {props?.heading && !props?.newHeading ? "Testimonials from our customers..." : props.newHeading}
        </label>
        {props?.heading && (
          <div>
            <a
              href="/"
              className=" pt-2 py-2 text-blue-custom font-Poppins-SemiBold flex flex-row items-center justify-between w-full"
            >
              <div className={" whitespace-nowrap text-lg pr-2 " + " " + props?.headingStyle}> See all</div>
              <IconContext.Provider value={{ color: props?.arrowColor , size: 24, className: "global-class-name" }}>
                  <HiOutlineArrowRight />
              </IconContext.Provider>
            </a>
          </div>
        )}
      </div>
      <div
        className="flex flex-row items-center justify-between p-0  w-full overflow-x-hidden"
        id={props?.id || "scrollContainer"}
      >
        <div className="absolute h-[10%] w-full ml-0 md:w-[103%] md:-ml-[3%] flex items-center justify-between ">
          <div
            id={props?.id + "leftButton"}
            className="rounded-full h-8 w-8 md:h-12 md:w-12 bg-white flex items-center justify-center font-Poppins-Bold text-2xl drop-shadow-lg"
            onClick={() => {
              let scrollContainer = document.getElementById(props?.id || "scrollContainer");
              props?.autoScroll &&
                scrollContainer.scrollBy({
                  left: -props?.scrollBy || -330,
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
                  left: props?.scrollBy || 330,
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
