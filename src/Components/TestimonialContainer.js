import React, { useEffect, useState } from "react";
import Testimonials from "./Testimonials";
import data from "../config";

function TestimonialContainer(props) {
  const [isListenerSet, setisListenerSet] = useState(false);

  const listener = () => {
    let rightClicked = 0;
    let leftClicked = 0;
    let rightEndReached = false;
    let leftEndReached = true;

    let intervalRight = setInterval(() => {
      if (rightClicked <= 6 && leftEndReached === true) {
        let rightButton = document.getElementById("rightButton");
        rightButton && rightButton.click();
        rightClicked++;
      }
      if (rightClicked === 6) {
        rightEndReached = true;
        clearInterval(intervalRight);
      }
    }, 2000);

    // let intervalLeft = setInterval(() => {
    //   if (leftClicked <= 6 && rightEndReached === true) {
    //     let rightButton = document.getElementById("leftButton");
    //     rightButton && rightButton.click();
    //     rightClicked++;
    //   }
    //   if (leftClicked === 6) {
    //     leftEndReached = true;
    //     clearInterval(intervalLeft);
    //   }
    // }, 1000);
  };

  useEffect(() => {
    listener();
  }, []);
  return (
    <div className="w-full drop-shadow-lg p-0 md:p-2 flex flex-col items-center   my-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4">
        <label className="text-sm md:text-xl font-Poppins-SemiBold  whitespace-nowrap">Testimonials from our customers...</label>
        <div>
          <a
            href="/"
            className=" pt-2 py-2 text-blue-custom font-Poppins-SemiBold flex flex-row items-center justify-between w-full"
          >
            <div className="pr-1 whitespace-nowrap"> See all</div>
            <img src="/assets/arrow-right.png" alt="" className="h-3 w-auto" />
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between p-0  w-full overflow-x-hidden" id="scrollContainer">
        <div className="absolute h-[10%] w-full flex items-center justify-between ">
          <div
            id="leftButton"
            className="rounded-full h-8 w-8 md:h-12 md:w-12 bg-white flex items-center justify-center font-Poppins-Bold text-2xl drop-shadow-lg"
            onClick={() => {
              let scrollContainer = document.getElementById("scrollContainer");
              scrollContainer.scrollBy({
                left: -330,
                behavior: "smooth",
              });
            }}
          >
            {"<"}
          </div>
          <div
            id="rightButton"
            className="rounded-full  h-8 w-8 md:h-12 md:w-12 bg-white flex items-center justify-center font-Poppins-Bold text-2xl drop-shadow-lg"
            onClick={() => {
              let scrollContainer = document.getElementById("scrollContainer");
              scrollContainer.scrollBy({
                left: 330,
                behavior: "smooth",
              });
            }}
          >
            {">"}
          </div>
        </div>
        {data.testimonials.map((testimonial, key) => {
          return (
            <div key={key} className="mx-4 w-[300px] lg:w-[600px]  flex items-center justify-center">
              <Testimonials title={testimonial.title} heading={testimonial.heading} body={testimonial.body} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TestimonialContainer;
