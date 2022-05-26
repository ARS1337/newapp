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
import HeroSection from "./Components/HeroSection";
import { useState } from "react";
import Testimonials from "./Components/Testimonials";

function App() {
  const poleDate = data.poleDate;
  const [currPage, setcurrPage] = useState("main");

  return (
    <div className="w-full  overflow-hidden">
      <div className="flex items-center justify-center ">
        <Header poleDate={poleDate} setcurrPage={setcurrPage} />
      </div>
      <div className="w-full" >
        {/* Hero section start */}
        {currPage.includes('main') ? <HeroSection /> : ""}
        {/* Hero section end */}

        {/* table starts */}
        <div className="bg-light-gray-custom flex flex-col lg:flex-row items-start justify-center w-full px-4 md:px-4 lg:px-12">
          <div className="  flex flex-col items-start justify-center w-full md:9/12  lg:w-8/12 xl:6/12">
            <Routes>
              <Route path="/" element={<MainPage setcurrPage={setcurrPage}/>} />
              <Route path="Second" element={<SecondPageUniversityDetails  setcurrPage={setcurrPage}/>} />
              <Route path="Third" element={<ThirdPage setcurrPage={setcurrPage}/>} />
            </Routes>
            <HelpSection questionList={data.helpQuestionList} />
            <FaqSection />
            <TestimonialContainer autoScroll={true}  key="testimonial" heading={true} id="">
              {data.testimonials.map((testimonial, key) => {
                return (
                  <div key={key} className="mx-4 w-[300px] lg:w-[600px]  flex items-center justify-center">
                    <Testimonials title={testimonial.title} heading={testimonial.heading} body={testimonial.body} />
                  </div>
                );
              })}
            </TestimonialContainer>
            <DisclaimerComponent />
          </div>
          {/* right container */}
          <div className="mt-28 font-Poppins-Medium lg:ml-4  justify-center flex w-full md:3/12 lg:w-3/12 xl:2/12 flex-col">
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
