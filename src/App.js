import "./App.css";
import Ad1 from "./Components/Ad1";
import DisclaimerComponent from "./Components/DisclaimerComponent";
import FaqSection from "./Components/FaqSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HelpSection from "./Components/HelpSection";
import TestimonialContainer from "./Components/TestimonialContainer";
import data from "./config";
import MainPage from "./Pages/MainPage";
import Ad2 from "./Components/Ad2";
import Ad3 from "./Components/Ad3";
import Ad4 from "./Components/Ad4";
import Ad5 from "./Components/Ad5";
import Ad6 from "./Components/Ad6";
import Ad7 from "./Components/Ad7";
import { Route, Routes } from "react-router";
import SecondPageUniversityDetails from "./Pages/SecondPageUniversityDetails";
import ThirdPage from "./Pages/ThirdPage";

function App() {
  const poleDate = data.poleDate;
  return (
    <div className="w-full  overflow-hidden">
      <div className="flex items-center justify-center ">
        <Header poleDate={poleDate} />
      </div>
      <div className="w-full">
        {/* Hero section start */}
        <div className="w-full bg-edu-heading h-[320px] bg-cover bg-no-repeat bg-center px-4 md:px-24 pb-4 md:pb-4 lg:pb-12 flex items-end justify-center">
          <div className="w-full grid grid-cols-2  lg:grid-cols-5 gap-8 bg-white bg-opacity-50 py-4 px-3 md:py-6 md:px-2 rounded-md">
            <div className="relative w-full ml-2 bg-white rounded-lg flex justify-end">
              <img src="/assets/Group 21.png" alt="" className="absolute left-5 top-5 h-5 w-5" />
              <input type="text" className="p-5 outline-none  w-[85%] mr-1 text-md" placeholder="Location" />
            </div>

            <div className="relative w-full bg-white rounded-lg flex justify-end">
              <img src="/assets/Rectangle 85.png" alt="" className="absolute left-6 top-5 h-5 w-5" />
              <input type="text" className="p-5 outline-none  w-[85%] mr-1 " placeholder="University" />
            </div>

            <div className="relative w-full bg-white rounded-lg flex justify-end">
              <img src="/assets/Rectangle 92.png" alt="" className="absolute left-6 top-5 h-5 w-5" />
              <input type="text" className="p-5 outline-none  w-[85%] mr-1 " placeholder="Courses" />
            </div>

            <div className="relative w-full bg-white rounded-lg flex justify-end">
              <img src="/assets/book.png" alt="" className="absolute left-6 top-5 h-5 w-5" />
              <input type="text" className="p-5 outline-none  w-[85%] mr-1 " placeholder="Mode Of Study" />
            </div>

            <button className="p-4 col-span-2 lg:col-auto w-full rounded-lg bg-green-custom text-lg font-Poppins-Medium text-white mr-2">
              Search
            </button>
          </div>
        </div>
        {/* Hero section end */}

        {/* table starts */}
        <div className="bg-light-gray-custom flex flex-col lg:flex-row items-start justify-center w-full px-4 md:px-4 lg:px-24">
          <div className="  flex flex-col items-start justify-center w-full md:9/12  lg:w-8/12">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="Second" element={<SecondPageUniversityDetails />} />
              <Route path="Third" element={<ThirdPage />} />
            </Routes>
            <HelpSection questionList={data.helpQuestionList} />
            <FaqSection />
            <TestimonialContainer />
            <DisclaimerComponent />
          </div>
          {/* right container */}
          <div className="mt-28 font-Poppins-Medium md:ml-4  justify-center flex w-full md:3/12 lg:w-3/12 flex-col">
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
      <Footer />
    </div>
  );
}

export default App;
