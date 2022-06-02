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
import AdEducation from "./Components/AdEducation";
import { Route, Routes } from "react-router";
import SecondPageUniversityDetails from "./Pages/SecondPageUniversityDetails";
import ThirdPage from "./Pages/ThirdPage";
import HeroSection from "./Components/HeroSection";
import Testimonials from "./Components/Testimonials";
import CVPage from "./Pages/CVPage";
import MainPageDescription from "./Components/MainPageDescription";
import CVPageHeroSection from "./Components/CVPageHeroSection";
import EventsPage from "./Pages/EventsPage";
import AllPages from "./Pages/AllPages";
import JobsListing from "./Pages/JobsListing";
import JobListingHeroSection from "./Pages/JobListingHeroSection";
import AdJobsPageCarousel from "./Components/AdJobsPageCarousel";
import LinkedinPage from "./Pages/LinkedinPage";
import LinkedinPageHeroSection from "./Components/LinkedinPageHeroSection";
import MenuListCustom from "./Components/MenuListCustom";
import { useEffect, useState } from "react";

import SignUpForm from "./Components/SignUpForm";
import RatingPage from "./Pages/RatingPage";
import RatingsPageHeroSection from "./Components/RatingsPageHeroSection";
import RatingsDescription from "./Components/RatingsDescription";
import AdRatingPageCarousel1 from "./Components/AdRatingPageCarousel1";
import AdRatingPage2 from "./Components/AdRatingPage2";
import AboutUs from "./Pages/AboutUs";

function App() {
  const poleDate = data.poleDate;
  const [showTopArrow, setshowTopArrow] = useState(false);
  const [showModal, setshowModal] = useState("");
  const location = window.location.href.split("/")[3];

  useEffect(() => {
    let showed = sessionStorage.getItem("showedPopUp");
    if (location == "") {
      setshowModal(true);
      sessionStorage.setItem("showedPopUp", true);
    }
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPos = (element) => {
    var rect = element.getBoundingClientRect();
    return rect.top;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let menuList = document.getElementById("menuList");
      if (menuList) {
        if (getPos(menuList) == 0) {
          setshowTopArrow(true);
        } else {
          setshowTopArrow(false);
        }
      }
    });
  }, []);

  if (location === "AllPages") {
    return <AllPages />;
  } else {
    return (
      <div
        className={
          showModal
            ? "w-full max-h-screen overflow-y-hidden main font-Poppins-Regular"
            : "w-full main font-Poppins-Regular "
        }
      >
        {showModal && <SignUpForm setshowModal={setshowModal} />}
        <div className="flex items-center justify-center ">
          <Header poleDate={poleDate} />
        </div>
        <div className="sticky top-0 w-full z-40" id="menuList">
          <MenuListCustom direction="flex-row" />
        </div>
        {showTopArrow && (
          <div
            className="z-50 fixed bottom-8 drop-shadow-lg right-8 bg-blue-custom p-2.5 lg:p-1.5 text-white hover:cursor-pointer text-3xl rounded-xl"
            onClick={handleClick}
          >
            ^
          </div>
        )}
        <div className="w-full">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <MainPageDescription />
                </>
              }
            />
            <Route
              path="CVPage"
              element={
                <>
                  <CVPageHeroSection />
                </>
              }
            />
            <Route
              path="JobsPage"
              element={
                <>
                  <JobListingHeroSection />
                </>
              }
            />
            <Route
              path="LinkedinPage"
              element={
                <>
                  <LinkedinPageHeroSection />
                </>
              }
            />
            <Route
              path="RatingPage"
              element={
                <>
                  <RatingsPageHeroSection />
                  <RatingsDescription />
                </>
              }
            />
          </Routes>

          {/* table starts */}
          <div className="bg-light-gray-custom flex flex-col max-w-full lg:flex-row items-start justify-center w-full  lg:px-6 overflow-clip">
            {/* left container */}
            <div className="  flex flex-col items-start justify-center w-full md:w-full  lg:w-[70%]  max-w-full lg:max-w-[900px] overflow-clip">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="Second" element={<SecondPageUniversityDetails />} />
                <Route path="Third" element={<ThirdPage />} />
                <Route path="CVPage" element={<CVPage />} />
                <Route path="EventsPage" element={<EventsPage />} />
                <Route path="JobsPage" element={<JobsListing />} />
                <Route path="LinkedinPage" element={<LinkedinPage />} />
                <Route path="RatingPage" element={<RatingPage />} />
                <Route path="AboutUs" element={<AboutUs />} />
              </Routes>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HelpSection questionList={data.helpQuestionList} />
                      <FaqSection />
                      <TestimonialContainer autoScroll={true} key="testimonial" heading={true} id="">
                        {data.testimonials.map((testimonial, key) => {
                          return (
                            <div key={key} className="mx-4 w-[300px] lg:w-[600px]  flex items-center justify-center">
                              <Testimonials
                                title={testimonial.title}
                                heading={testimonial.heading}
                                body={testimonial.body}
                              />
                            </div>
                          );
                        })}
                      </TestimonialContainer>
                      <DisclaimerComponent />
                    </>
                  }
                />
                <Route
                  path="Second"
                  element={
                    <>
                     <HelpSection questionList={data.helpQuestionList} />
                      <FaqSection />
                      <TestimonialContainer autoScroll={true} key="testimonial" heading={true} id="">
                        {data.testimonials.map((testimonial, key) => {
                          return (
                            <div key={key} className="mx-4 w-[300px] lg:w-[600px]  flex items-center justify-center">
                              <Testimonials
                                title={testimonial.title}
                                heading={testimonial.heading}
                                body={testimonial.body}
                              />
                            </div>
                          );
                        })}
                      </TestimonialContainer>
                      <DisclaimerComponent />
                    </>
                  }
                />
                <Route
                  path="Third"
                  element={
                    <>
                      <div className="px-2 w-full"><HelpSection questionList={data.helpQuestionList} /></div>
                      <FaqSection />
                      <TestimonialContainer autoScroll={true} key="testimonial" heading={true} id="">
                        {data.testimonials.map((testimonial, key) => {
                          return (
                            <div key={key} className="mx-4 w-[300px] lg:w-[600px]  flex items-center justify-center">
                              <Testimonials
                                title={testimonial.title}
                                heading={testimonial.heading}
                                body={testimonial.body}
                              />
                            </div>
                          );
                        })}
                      </TestimonialContainer>
                      <DisclaimerComponent />
                    </>
                  }
                />
                <Route
                  path="LinkedinPage"
                  element={
                    <>
                      <TestimonialContainer autoScroll={true} key="testimonial" heading={true} id="">
                        {data.testimonials.map((testimonial, key) => {
                          return (
                            <div key={key} className="mx-4 w-[300px] lg:w-[600px]  flex items-center justify-center">
                              <Testimonials
                                title={testimonial.title}
                                heading={testimonial.heading}
                                body={testimonial.body}
                              />
                            </div>
                          );
                        })}
                      </TestimonialContainer>
                    </>
                  }
                />
                <Route
                  path="EventsPage"
                  element={
                      <div className="bg-blue-custom w-full rounded-lg drop-shadow-md mt-12 p-4  mr-6">
                      <TestimonialContainer autoScroll={true} key="testimonial" heading={true} id="" headingStyle="text-white">
                        {data.testimonials.map((testimonial, key) => {
                          return (
                            <div key={key} className="mx-4 w-[300px] lg:w-[600px]  flex items-center justify-center">
                              <Testimonials
                                title={testimonial.title}
                                heading={testimonial.heading}
                                body={testimonial.body}
                              />
                            </div>
                          );
                        })}
                      </TestimonialContainer>
                    </div>
                  }
                />
                 <Route
                  path="CVPage"
                  element={
                    <>
                      <TestimonialContainer autoScroll={true} key="testimonial" heading={true} id="">
                        {data.testimonials.map((testimonial, key) => {
                          return (
                            <div key={key} className="mx-4 w-[300px] lg:w-[600px]  flex items-center justify-center">
                              <Testimonials
                                title={testimonial.title}
                                heading={testimonial.heading}
                                body={testimonial.body}
                              />
                            </div>
                          );
                        })}
                      </TestimonialContainer>
                    </>
                  }
                />
              </Routes>
            </div>
            {/* right container */}
            <div className="mt-12 font-Poppins-Medium px-2 md:px-0  lg:ml-8   justify-center flex w-full md:w-full  lg:w-[20%]   max-w-full lg:max-w-[300px] min-w-[260px] flex-col">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Ad1 />
                      <Ad2 />
                      <Ad3 />
                      <Ad4 />
                      <Ad5 />
                      <Ad6 />
                      <Ad7 />
                    </>
                  }
                ></Route>
                <Route
                  path="Second"
                  element={
                    <>
                      <Ad1 />
                      <Ad2 />
                      <Ad3 />
                      <Ad4 />
                      <Ad5 />
                      <Ad6 />
                      <Ad7 />
                    </>
                  }
                ></Route>
                <Route
                  path="Third"
                  element={
                    <>
                      <Ad1 />
                      <Ad2 />
                      <Ad3 />
                      <Ad4 />
                      <Ad5 />
                      <Ad6 />
                      <Ad7 />
                    </>
                  }
                ></Route>
                <Route
                  path="RatingPage"
                  element={
                    <>
                      <AdRatingPageCarousel1 />
                      <AdRatingPage2 />
                      <Ad2 />
                      <Ad3 />
                      <Ad4 />
                      <Ad7 />
                      <AdJobsPageCarousel />
                    </>
                  }
                ></Route>
                <Route
                  path="LinkedinPage"
                  element={
                    <div className="-mt-4">
                      <Ad3 />
                      <div className="mb-6">
                        <Ad5 />
                      </div>
                      <Ad4 />
                      <Ad6 />
                      <Ad7 />
                    </div>
                  }
                ></Route>
                <Route
                  path="JobsPage"
                  element={
                    <>
                      <Ad1 />
                      <Ad2 />
                      <Ad3 />
                      <Ad4 />
                      <Ad7 />
                      <AdJobsPageCarousel />
                    </>
                  }
                ></Route>
                <Route
                  path="EventsPage"
                  element={
                    <>
                      <Ad3 />
                      <div className="mb-6">
                        <Ad5 />
                      </div>
                      <Ad4 />
                      <Ad6 />
                      <Ad7 />
                    </>
                  }
                ></Route>
                <Route
                  path="CVPage"
                  element={
                    <>
                      <Ad3 />
                      <div className="mb-6">
                        <Ad5 />
                      </div>
                      <Ad4 />
                      <Ad6 />
                      <Ad7 />
                    </>
                  }
                ></Route>
              </Routes>

              {/* 1st ad */}
              {/* <Routes>
                <Route exact path="JobsPage" element={<Ad1 />} />
                <Route path="RatingPage" element={<AdRatingPageCarousel1 />} />
                <Route path="/" element={<Ad1 />} />
                <Route path="Second" element={<Ad1 />} />
                <Route path="Third" element={<Ad1 />} />
              </Routes> */}
              {/* 2nd ad */}
              {/* <Routes>
                <Route exact path="JobsPage" element={<Ad2 />} />
                <Route exact path="RatingPage" element={<AdRatingPage2 />} />
                <Route path="/" element={<Ad2 />} />
                <Route path="Second" element={<Ad2 />} />
                <Route path="Third" element={<Ad2 />} />
              </Routes> */}
              {/* 3rd ad */}
              {/* <Routes>
                <Route exact path="JobsPage" element={<AdEducation />} />
                <Route exact path="RatingPage" element={<Ad2 />} />
                <Route path="/" element={<Ad3 />} />
                <Route path="Second" element={<Ad3 />} />
                <Route path="Third" element={<Ad3 />} />
              </Routes> */}
              {/* 4th ad */}
              {/* <Ad4 /> */}
              {/* 5th page */}
              {/* <Routes>
                <Route exact path="JobsPage" element={<Ad7 />} />
                <Route path="/" element={<Ad5 />} />
                <Route path="Second" element={<Ad5 />} />
                <Route path="Third" element={<Ad5 />} />
                <Route path="LinkedinPage" element={<Ad5 />} />
              </Routes> */}
              {/* 6th ad  */}
              {/* <Routes>
                <Route exact path="JobsPage" element={<AdJobsPageCarousel />} />
                <Route path="/" element={<Ad6 />} />
                <Route path="Second" element={<Ad6 />} />
                <Route path="Third" element={<Ad6 />} />
                <Route path="LinkedinPage" element={<Ad6 />} />
              </Routes> */}
              {/* 7th ad   */}
              {/* <Routes>
                <Route exact path="JobsPage" element={<></>} />
                <Route path="/" element={<Ad7 />} />
                <Route path="Second" element={<Ad7 />} />
                <Route path="Third" element={<Ad7 />} />
                <Route path="LinkedinPage" element={<Ad7 />} />
              </Routes> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
