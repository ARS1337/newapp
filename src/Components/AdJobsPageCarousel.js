import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function AdJobsPageCarousel(props) {
  const [currAd, setcurrAd] = useState(1);

  const leftScroll = () => {
    let scrollContainer = document.getElementById("jobsscrollcontainer");
    scrollContainer.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
  const rightScroll = () => {
    let scrollContainer = document.getElementById("jobsscrollcontainer");
    scrollContainer.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  const handleClick = (currAd, prevAd) => {
    console.log("currAd, prevAd ", currAd, prevAd);
    if (prevAd === currAd) {
      //no change
      console.log("nochange");
    } else if (prevAd > currAd) {
      console.log("left");
      leftScroll();
    } else {
      rightScroll();
      console.log("right");
    }
  };
  useEffect(() => {
    let rightCounter = 1;
    let leftCounter = 3;
    setInterval(() => {
      if (rightCounter <= 3 && rightCounter !== 0) {
        rightScroll();
        setcurrAd(rightCounter+1);
        rightCounter++;
        if (rightCounter === 3) {
          leftCounter = 2;
          rightCounter = 0;
        }
      } else if (leftCounter >= 0 && leftCounter !== 3) {
        leftScroll();
        setcurrAd(leftCounter);
        leftCounter--;
        if (leftCounter === 0) {
          leftCounter = 3;
          rightCounter = 1;
        }
      }
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col drop-shadow-lg bg-white rounded-lg w-full">
      <div
        className="   flex flex-row items-center justify-between  overflow-x-hidden w-full "
        id="jobsscrollcontainer"
      >
        {[1, 2, 3].map((x) => {
          return (
            <div
              key={"jobs" + x}
              className="flex flex-col  items-center justify-center max-w-1/3  min-w-[300px] p-2 text-gray-500"
            >
              <IconContext.Provider value={{ color: "#64DDAC", size: 48, className: "global-class-name" }}>
                <div className="my-8">
                  <FaQuoteLeft />
                </div>
              </IconContext.Provider>
              <div className="text-center text-lg px-2">
                {x +
                  " An unemployed and introverted Steven is passionate about practising ventriloquy. When his best friend Fangora."}
              </div>
              <div className="h-[0.100rem] border border-gray-400 w-[200%] my-5"></div>
              <div className="text-xl text-gray-700 my-1 text-center">Saurabh Rathore</div>
              <div className="text-center px-1">Director/ Head of Operations Braemar ACM Shipbroking India</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-center my-4 px-4">
        <div
          className={
            currAd === 1
              ? "border-2 border-green-custom rounded-xl p-0.5 px-2 hover:cursor-pointer bg-green-custom  mx-2"
              : "border-2 border-green-custom rounded-xl p-0.5 px-2  hover:cursor-pointer bg-white  mx-2"
          }
          onClick={() => {
            setcurrAd((prevAd) => {
              console.log("prevAd ", prevAd);
              handleClick(1, prevAd);
              return 1;
            });
          }}
        ></div>
        <div
          className={
            currAd === 2
              ? "border-2 border-green-custom rounded-xl p-0.5 px-2 hover:cursor-pointer  bg-green-custom mx-2"
              : "border-2 border-green-custom rounded-xl p-0.5 px-2 hover:cursor-pointer bg-white mx-2"
          }
          onClick={() => {
            setcurrAd((prevAd) => {
              console.log("prevAd ", prevAd);
              handleClick(2, prevAd);
              return 2;
            });
          }}
        ></div>
        <div
          className={
            currAd === 3
              ? "border-2 border-green-custom rounded-xl p-0.5 px-2 hover:cursor-pointer bg-green-custom  mx-2"
              : "border-2 border-green-custom rounded-xl p-0.5 px-2 hover:cursor-pointer bg-white mx-2 "
          }
          onClick={() => {
            setcurrAd((prevAd) => {
              console.log("prevAd ", prevAd);
              handleClick(3, prevAd);
              return 3;
            });
          }}
        ></div>
      </div>
    </div>
  );
}

export default AdJobsPageCarousel;
