import React from "react";
import CustomButtons from "../utils/CustomButtons";
import data from "../config";
import { IconContext } from "react-icons";
import { MdArrowRightAlt, MdLocationOn } from "react-icons/md";
import { AiFillStar, AiOutlineMinus } from "react-icons/ai";
import { CircularProgress, Rating } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import TestimonialContainer from "../Components/TestimonialContainer";

function RatingPage(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#64DDAC",
      },
      secondary: {
        main: "#ff711c",
      },
    },
  });
  return (
    <div className="w-full mt-6 px-2">
      <div className="bg-white p-6 font-Poppins-Regular rounded-lg my-6">
        <div className="flex flex-col md:flex-row  items-start md:items-center justify-between">
          <label className="text-3xl text-blue-custom font-Poppins-SemiBold pb-4 md:pb-0">CMA CGM Group</label>
          <CustomButtons
            bgColor="bg-white border border-blue-custom"
            buttonText="Add Review"
            buttonTextColor="text-blue-custom font-Poppins-Regular text-lg"
            iconSrc="/assets/arrow-right-blue.png"
            padding=" p-3 px-6 "
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4  md:gap-x-8 gap-y-4 md:grid-cols-4 w-full mt-6 md:whitespace-nowrap">
          <label className="">Website:</label>
          <label className="text-gray-600 text-md lg:text-lg text-left ">www.cma-cgm.com</label>

          <label className="">Headquarters:</label>
          <label className="text-gray-600 text-md lg:text-lg">Marseille, France</label>

          <label>Size:</label>
          <label className="text-gray-600 text-md lg:text-lg">22,000</label>

          <label>Size:</label>
          <label className="text-gray-600 text-md lg:text-lg">1978</label>
        </div>
        <div className="border border-gray-200 w-full h-0.5 my-6"></div>
        <div className="text-gray-500 text-md md:text-lg mb-2 ">
          CMA CGM Group is the world’s third largest shipping company. They have a fleet of 471 vessels that call at 420
          ports in 160 countries. In total they have 765 offices around the globe.
        </div>
        <div className="text-gray-500 text-md md:text-lg">
          Their largest ship is the CMA CGM Georg Forster which can handle 18,000 twenty-foot containers. Their name is
          an French acronym which stands for “Maritime Freighting Company – General Maritime Company".
        </div>
      </div>
      <div className="bg-white p-6 font-Poppins-Regular rounded-lg my-8">
        <div className="my-4 md:my-4 text-3xl text-blue-custom font-Poppins-SemiBold">Company Achievements</div>
        <div className=" h-[350px] overflow-y-scroll">
          {data?.companyAchievements.map((details, key) => {
            return (
              <div className="py-4 " key={key}>
                <div className="flex flex-row items-center justify-start pb-1 -ml-1">
                  <IconContext.Provider value={{ color: "#2E5984", size: 32 }}>
                    <MdArrowRightAlt />
                  </IconContext.Provider>
                  <label className="text-lg md:text-xl text-blue-custom font-Poppins-SemiBold">{details.year}</label>
                </div>
                <div>
                  {details?.achievements.map((achievement, key) => {
                    return (
                      <div key={key} className="flex flex-row items-center justify-start text-lg font-Poppins-Regular">
                        <div className="pr-2">
                          <IconContext.Provider value={{ color: "black", size: 20 }}>
                            <AiOutlineMinus />
                          </IconContext.Provider>
                        </div>
                        <div className=" break-words text-sm md:text-lg font-Poppins-Regular self-start">
                          {achievement}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white p-6 font-Poppins-Regular rounded-lg my-8">
        {/* name */}
        <div className="text-blue-custom text-3xl font-Poppins-SemiBold">{data?.companyDetails?.name}</div>
        {/* details */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start my-5">
          <div className="relative flex items-center justify-start mr-10">
            <div className="absolute left-[22%] text-4xl">{data?.companyDetails.rating + "%"}</div>
            <ThemeProvider theme={theme}>
              <CircularProgress variant="determinate" value={data?.companyDetails.rating} size="7rem" />
            </ThemeProvider>
          </div>
          <label className="mr-10 font-Poppins-SemiBold text-xl my-2">Recommend to a friend</label>
          <div className="flex flex-row items-center justify-start" key="a1">
            <label className="mr-2 font-Poppins-Regular">{data?.companyDetails?.starRating + ".0"}</label>
            <ThemeProvider theme={theme}>
              <Rating
                name="read-only"
                value={data?.companyDetails?.starRating}
                readOnly
                sx={{ color: "secondary.main" }}
                emptyIcon={<AiFillStar color="#6a6a6a" />}
                icon={<AiFillStar color="#ff711c" />}
              />
            </ThemeProvider>
          </div>
        </div>
        {/* reviews */}
        <div className="" key="new">
          {data?.companyDetails?.reviews?.map((detail, key) => {
            return (
              <div key={key} className="">
                <div className="border border-gray-300 w-full my-4"></div>
                <div className="text-xl font-Poppins-SemiBold pb-3">"{detail.title}"</div>
                <div className="flex flex-row items-center justify-start pb-3" key="a2">
                  <label className="mr-2 font-Poppins-Regular">{detail.ratingGiven + ".0"}</label>
                  <ThemeProvider theme={theme}>
                    <Rating
                      name="read-only"
                      value={detail.ratingGiven}
                      readOnly
                      sx={{ color: "secondary.main" }}
                      emptyIcon={<AiFillStar color="#6a6a6a" />}
                      icon={<AiFillStar color="#ff711c" />}
                    />
                  </ThemeProvider>
                </div>
                <div className="text-md pb-2 text-gray-600">{detail?.desc}</div>
                <div className="text-md pb-2 text-gray-600">{detail?.desc2}</div>
                <div className="text-lg font-Poppins-SemiBold text-gray-600">
                  Pros-<label className="pl-1 text-md pb-2 text-gray-600 font-Poppins-Regular">{detail.pros}</label>
                </div>
                <div className="text-lg font-Poppins-SemiBold text-gray-600">
                  Cons-<label className="pl-1 text-md pb-2 text-gray-600 font-Poppins-Regular">{detail.cons}</label>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="border border-gray-300 w-full my-4"></div>
          <label className="font-Poppins-SemiBold text-xl"> Connect with us</label>
          <div className="flex flex-row items-center justify-start pt-4 pb-2">
            <img src="/assets/RatingPage/skype.png" alt="" className="pr-4 w-16 h-auto" />
            <img src="/assets/RatingPage/twitter.png" alt="" className="pr-4 w-16 h-auto" />
            <img src="/assets/RatingPage/fb.png" alt="" className="pr-4 w-16 h-auto" />
            <img src="/assets/RatingPage/insta.png" alt="" className="pr-4 w-16 h-auto" />
            <img src="/assets/RatingPage/linkdn.png" alt="" className="pr-4 w-16 h-auto" />
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center my-6">
        <div className="flex items-center justify-between text-green-custom font-Poppins-Regular text-lg ">
          <label className="w-full p-2 px-3  rounded-md hover:bg-green-custom hover:text-white">Previous</label>
          <button className="w-full p-2 px-3 rounded-md hover:bg-green-custom hover:text-white">1</button>
          <button className="w-full p-2 px-3 rounded-md hover:bg-green-custom hover:text-white">2</button>
          <button className="w-full p-2 px-3 rounded-md hover:bg-green-custom hover:text-white">3</button>
          <button className="w-full p-2 px-3 rounded-md hover:bg-green-custom hover:text-white">4</button>
          <button className="w-full p-2 px-3 rounded-md hover:bg-green-custom hover:text-white">5</button>
          <label className="w-full p-2 px-3 rounded-md hover:bg-green-custom hover:text-white">Next</label>
        </div>
      </div>

      <div className="p-2 bg-white rounded-lg z-50">
        <TestimonialContainer
          autoScroll={true}
          key="testimonial"
          heading={true}
          newHeading="Similar Jobs"
          id="similarJobs"
          headingStyle="text-blue-custom text-xl md:text-xl lg:text-2xl"
        >
          {data.testimonials.map((testimonial, key) => {
            return (
              <div key={key} className="mx-4 min-w-[300px] lg:w-[600px]  flex items-center justify-center">
                <div className=" flex flex-col text-gray-500 bg-gray-100 rounded-lg w-full ">
                  <label className=" p-4 rounded-t-lg text-center text-black ">Ship Management</label>
                  <hr className="border-gray-400 " />
                  <div className="flex flex-row items-center justify-start p-2">
                    <IconContext.Provider value={{ size: 24, color: "#A6A6A6" }}>
                      <MdLocationOn />
                    </IconContext.Provider>
                    <label>Mumbai, India</label>
                  </div>
                  <label className="font-Poppins-Medium text-md pl-4 text-blue-custom pb-4">Technical Supt'd...</label>
                  <div className="flex flex-row items-center justify-center p-4 rounded-b-lg bg-green-custom text-white">
                    <label className="pr-4">View More</label>{" "}
                    <img src="/assets/arrowRightSignIn.png" alt="" className="h-4 w-auto" />
                  </div>
                </div>
              </div>
            );
          })}
        </TestimonialContainer>
      </div>
    </div>
  );
}

export default RatingPage;
