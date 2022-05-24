import React from "react";
import Ad1 from "../Components/Ad1";
import Ad2 from "../Components/Ad2";
import Ad3 from "../Components/Ad3";
import Ad4 from "../Components/Ad4";
import Ad5 from "../Components/Ad5";
import Ad6 from "../Components/Ad6";
import Ad7 from "../Components/Ad7";
import FaqSection from "../Components/FaqSection";
import HelpSection from "../Components/HelpSection";
import MainTable from "../Components/MainTable";
import Testimonials from "../Components/Testimonials";
import data from "../config";

function MainPage(props) {
  return (
    <div>
      {/* Hero section start */}
      <div className="w-full bg-edu-heading h-[320px] bg-cover bg-no-repeat bg-center px-4 md:px-24 pb-4 md:pb-4 lg:pb-12 flex items-end justify-center">
        <div className="w-full grid grid-cols-2  lg:grid-cols-5 gap-8 bg-white bg-opacity-50 py-6 px-2 rounded-md">
          <div className="relative w-full ml-2 bg-white rounded-lg flex justify-end">
            <img src="/assets/Group 21.png" alt="" className="absolute left-5 top-5  w-[8%]" />
            <input type="text" className="p-5 outline-none  w-[88%] mr-1 text-md" placeholder="Location" />
          </div>

          <div className="relative w-full bg-white rounded-lg flex justify-end">
            <img src="/assets/Rectangle 85.png" alt="" className="absolute left-6 top-5  w-[8%]" />
            <input type="text" className="p-5 outline-none  w-[88%] mr-1 " placeholder="University" />
          </div>

          <div className="relative w-full bg-white rounded-lg flex justify-end">
            <img src="/assets/Rectangle 92.png" alt="" className="absolute left-6 top-5  w-[8%]" />
            <input type="text" className="p-5 outline-none  w-[88%] mr-1 " placeholder="Courses" />
          </div>

          <div className="relative w-full bg-white rounded-lg flex justify-end">
            <img src="/assets/book.png" alt="" className="absolute left-6 top-5  w-[8%]" />
            <input type="text" className="p-5 outline-none  w-[88%] mr-1 " placeholder="Mode Of Study" />
          </div>

          <button className="p-4 col-span-2 lg:col-auto w-full rounded-lg bg-green-custom text-lg font-Poppins-Medium text-white mr-2">
            Search
          </button>
        </div>
      </div>
      {/* Hero section end */}
      {/* description start */}
      <div className=" flex items-center justify-center ">
        <div className="w-2/3 flex items-center justify-center flex-col my-12">
          <label className="mb-6 text-4xl font-Poppins-SemiBold">Propel Your Career to the next level</label>
          <label className="text-center mb-6 text-gray-500 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices dolor non erat sollicitudin, in
            pretium ante varius. Cras lorem diam, sollicitudin eget tortor vitae, sodales faucibus massa. Nullam iaculis
            luctus metus, non interdum nulla commodo ac.
          </label>
          <a href="/" className="flex flex-row items-center text-blue-custom font-Poppins-Bold text-lg ">
            <div>View more </div>
            <img src="/assets/arrow-right.png" className="pl-3 h-4 w-auto" alt="view more" />
          </a>
        </div>
      </div>
      {/* description ends */}
      {/* table starts */}
      <div className="bg-light-gray-custom flex flex-row items-start justify-center w-full px-4 md:px-24">
        <div className="  flex flex-col items-start justify-center w-7/12">
          <MainTable data={data} />
          <HelpSection questionList={data.helpQuestionList} />
          <FaqSection />
          <Testimonials />
          <div className="flex flex-col items-start justify-start mt-8">
            <label className="text-red-600 text-lg font-Poppins-Medium ">Disclaimer</label>
            <label className="text-sm font-Poppins-Regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices dolor non erat sollicitudin, in
              pretium ante varius. Cras lorem diam, sollicitudin eget tortor vitae, sodales faucibus massa.Nullam
              iaculis luctus metus, non interdum nulla commodo ac.
            </label>
          </div>
        </div>
        {/* right container */}
        <div className="mt-28 font-Poppins-Medium ml-4  justify-center flex w-2/12 flex-col">
          {/* 1st ad */}
          <Ad1 />
          {/* 2nd ad */}
          <Ad2 />
          {/* 3rd ad */}
          <Ad3 />
          {/* 4th ad */}
          <Ad4 />
          {/* 5th page */}
          <Ad5 />
          {/* 6th ad  */}
          <Ad6 />
          {/* 7th ad   */}
          <Ad7 />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
