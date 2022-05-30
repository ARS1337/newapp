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

function App() {
  const poleDate = data.poleDate;
  return (
    <div className="w-full  overflow-hidden">
      <div className="flex items-center justify-center ">
        <Header poleDate={poleDate} />
      </div>
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
        </Routes>

        {/* table starts */}
        <div className="bg-light-gray-custom flex flex-col lg:flex-row items-start justify-center w-full px-4 md:px-4 lg:px-12">
          {/* left container */}
          <div className="  flex flex-col items-start justify-center w-full md:9/12  lg:w-[60%] xl:6/12 max-w-full lg:max-w-[900px]">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="Second" element={<SecondPageUniversityDetails />} />
              <Route path="Third" element={<ThirdPage />} />
              <Route path="CVPage" element={<CVPage />} />
              <Route path="EventsPage" element={<EventsPage />} />
              <Route path="JobsPage" element={<JobsListing />} />
              <Route path="LinkedinPage" element={<LinkedinPage />} />
              <Route path="AllPages" element={<AllPages />} />
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
            </Routes>
          </div>
          {/* right container */}
          <div className="mt-28 font-Poppins-Medium lg:ml-12  justify-center flex w-full md:4/12 lg:w-[20%] xl:2/12  max-w-full lg:max-w-[300px] min-w-[300px] flex-col">
            {/* 1st ad */}
            <Ad1 />
            {/* 2nd ad */}
            <Ad2 />
            {/* 3rd ad */}
            <Routes>
              <Route exact path="JobsPage" element={<AdEducation />} />
              <Route path="/" element={<Ad3 />} />
              <Route path="Second" element={<Ad3 />} />
              <Route path="Third" element={<Ad3 />} />
            </Routes>
            {/* 4th ad */}
            <Ad4 />
            {/* 5th page */}
            <Routes>
              <Route exact path="JobsPage" element={<Ad7 />} />
              <Route path="/" element={<Ad5 />} />
              <Route path="Second" element={<Ad5 />} />
              <Route path="Third" element={<Ad5 />} />
              <Route path="LinkedinPage" element={<Ad5 />} />
            </Routes>
            {/* 6th ad  */}
            <Routes>
              <Route exact path="JobsPage" element={<AdJobsPageCarousel />} />
              <Route path="/" element={<Ad6 />} />
              <Route path="Second" element={<Ad6 />} />
              <Route path="Third" element={<Ad6 />} />
              <Route path="LinkedinPage" element={<Ad6 />} />
            </Routes>
            {/* 7th ad   */}
            <Routes>
              <Route exact path="JobsPage" element={<></>} />
              <Route path="/" element={<Ad7 />} />
              <Route path="Second" element={<Ad7 />} />
              <Route path="Third" element={<Ad7 />} />
              <Route path="LinkedinPage" element={<Ad7 />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
