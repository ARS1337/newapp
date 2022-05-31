import React from "react";
import CustomButtons from "../utils/CustomButtons";
import RoundedLink from "../utils/RoundedLink";
import SignUpForm from "./SignUpForm";

const CustomRoundedLink = (props) => {
  return (
    <div
      className="mr-4 border border-green-custom rounded-lg h-12 w-12 flex items-center justify-center hover:bg-green-custom hover:cursor-pointer"
      onClick={props.onClick}
    >
      <div href="/">
        <img src={props.link} alt="" className="w-auto h-4 md:h-6 lg:h-4" />
      </div>
    </div>
  );
};

function Footer(props) {
  return (
    <div className="bg-black-custom md:px-4 lg:px-24 py-12 flex flex-col whitespace-nowrap items-center ">
      <div className="flex flex-col md:flex-row justify-between w-[90%] md:w-[90%] lg:w-[80%]">
        <div className="text-white w-full   md:w-7/12 lg:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row md:flex-row mr-12  justify-around  border border-gray-500 border-t-0 border-l-0 border-r-0">
          <div className="flex flex-col text-white lg:mr-24">
            <label className="text-xl font-Poppins-Regular text-green-custom pb-8">Quick Links</label>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Sign In
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Courses
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Jobs Listing
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Register Now
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Success Now
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              CV Packages
            </a>
          </div>
          <div className="flex flex-col text-white lg:mr-24">
            <label className="text-lg font-Poppins-Regular text-green-custom pb-8">Company</label>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Home
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              About Us
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Education
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Mentoring
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Events/Webinar
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Career Community
            </a>
          </div>
          <div className="flex flex-col text-white lg:mr-24 pb-4 lg:pb-0">
            <label className="text-lg font-Poppins-Regular text-green-custom pb-8">Company</label>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Blogs
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Sing In
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Contact Us
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Testimonials
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Sea-commerce
            </a>
            <a href="/" className="text-md font-Poppins-Medium pb-1">
              Technology services
            </a>
          </div>
        </div>
        <div className="text-white w-full md:w-5/12 lg:w-4/12 mt-12 md:mt-0 min-w-[300px]">
          <form className="flex flex-col w-full  px-2 md:px-0 ">
            <label className="text-lg text-green-custom font-Poppins-Medium md:ml-8">Get In Touch With Us</label>
            <div className="flex flex-col items-center z md:flex-row md:justify-between mt-8  w-full">
              <div className="mr-0 md:mr-2 mb-2  w-full">
                <input type="text" placeholder="First Name*" className="outline-none focus:border focus:border-green-custom bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white" />
              </div>
              <div className="mr-0  mb-2  w-full">
                <input type="text" placeholder="Last Name*" className="outline-none focus:border focus:border-green-custom bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white" />
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between   w-full ">
              <div className="mr-0 md:mr-2 mb-2  w-full">
                <input type="number" placeholder="Phone*" className="outline-none focus:border focus:border-green-custom bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white" />
              </div>
              <div className="mr-0  mb-2  w-full">
                <input type="email" placeholder="Email*" className="outline-none focus:border focus:border-green-custom bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white" />
              </div>
            </div>
            <textarea className="outline-none focus:border focus:border-green-custom bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white" placeholder="Message*" />
            <div className="w-40 md:w-40 mt-2 font-Poppins-Regular text-lg">
              <CustomButtons
                bgColor="bg-green-custom"
                buttonText="Submit"
                buttonTextColor="text-white"
                iconSrc="/assets/ThirdPage/iconfinder_outlined_log_in_4280467 copy 6.png"
                padding="p-3"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="  mt-12 text-white lg:w-[80%] md:w-[90%] flex flex-col md:flex-row items-center justify-start  font-Poppins-Medium  ">
        <label className="text-green-custom">General Inquiries:</label>&nbsp;
        <label className="text-white"> hr@seaandbeyond.com</label>
      </div>
      <div className=" mt-16 flex flex-col md:flex-row md:w-[90%] lg:w-[80%] justify-between items-center border border-gray-500 pt-4 border-b-0 border-l-0 border-r-0 ">
        <div className="text-white flex items-center  md:w-8/12 text-md md:text-lg font-Poppins-Medium ">
          © 2020 Sea & Beyond. All Rights Reserved
        </div>
        <div className="text-white w-10/12 md:w-4/12 flex flex-row justify-center lg:justify-start mt-4 md:mt-0   max-w-[320px] ">
          <CustomRoundedLink link="/assets/Path 50.png" />
          <CustomRoundedLink link="/assets/facebook.png" />
          <CustomRoundedLink link="/assets/instagram.png" />
          <CustomRoundedLink link="/assets/linkedin.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
