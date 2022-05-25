import React from "react";
import CustomButtons from "../utils/CustomButtons";
import RoundedLink from "../utils/RoundedLink";

function Footer(props) {
  return (
    <div className="bg-black-custom md:px-4 lg:px-24 py-12 flex flex-col whitespace-nowrap">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="text-white w-full md:w-6/12 lg:w-5/12 flex flex-col ml-4 md:ml-0 md:flex-row  justify-between mr-24 ">
          <div className="flex flex-col text-white ">
            <label className="text-lg font-Poppins-Bold text-green-custom pb-8">Quick Links</label>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Sign In
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Courses
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Jobs Listing
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Register Now
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Success Now
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              CV Packages
            </a>
          </div>
          <div className="flex flex-col text-white">
            <label className="text-lg font-Poppins-Bold text-green-custom pb-8">Company</label>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Home
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              About Us
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Education
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Mentoring
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Events/Webinar
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Career Community
            </a>
          </div>
          <div className="flex flex-col text-white">
            <label className="text-lg font-Poppins-Bold text-green-custom pb-8">Company</label>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Blogs
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Sing In
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Contact Us
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Testimonials
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Sea-commerce
            </a>
            <a href="/" className="text-md font-Poppins-Light pb-1">
              Technology services
            </a>
          </div>
        </div>
        <div className="text-white w-full md:w-6/12 lg:w-4/12 mt-12 md:mt-0">
          <form className="flex flex-col w-full  px-2 md:px-0 ">
            <label className="text-lg text-green-custom font-Poppins-Medium">Get In Touch With Us</label>
            <div className="flex flex-col items-center z md:flex-row md:justify-between mt-8  w-full">
              <div className="mr-0 md:mr-2 mb-2  w-full">
                <input type="text" placeholder="First Name" className="bg-gray-custom p-4 rounded-md  w-full" />
              </div>
              <div className="mr-0  mb-2  w-full">
                <input type="text" placeholder="Last Name" className="bg-gray-custom p-4 rounded-md w-full" />
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between   w-full ">
              <div className="mr-0 md:mr-2 mb-2  w-full">
                <input type="number" placeholder="Phone" className="bg-gray-custom p-4 rounded-md  w-full" />
              </div>
              <div className="mr-0  mb-2  w-full">
                <input type="email" placeholder="Email" className="bg-gray-custom p-4 rounded-md  w-full" />
              </div>
            </div>
            <textarea className="bg-gray-custom p-5 rounded-md  w-full" placeholder="Message" />
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center ml-4 md:ml-0   mt-12">
        <div className="text-white w-full md:w-8/12 flex flex-col md:flex-row items-center justify-start md:mr-24 font-Poppins-Medium ">
          <label className="text-green-custom">General Inquiries:</label>&nbsp;
          <label className="text-white"> hr@seaandbeyond.com</label>
        </div>
        <div className="text-white w-full flex items-center justify-center md:w-4/12 mt-4 md:mt-0 ">
          <div className="w-40 md:w-40">
            <CustomButtons
              bgColor="bg-green-custom"
              buttonText="view more"
              buttonTextColor="text-white"
              iconSrc="/assets/arrow-right.png"
            />
          </div>
        </div>
      </div>
      <div className=" mt-16 flex flex-col md:flex-row justify-between items-center ">
        <div className="text-white flex items-center justify-center mr-0 md:mr-24 w-full md:w-5/12">
          <label className=" text-md md:text-lg font-Poppins-Medium">
            © 2020 Sea & Beyond. All Rights Reserved
          </label>
        </div>
        <div className="text-white w-10/12 md:w-3/12 flex flex-row  justify-between mt-4 md:mt-0">
          <RoundedLink link="/assets/Path 50.png" />
          <RoundedLink link="/assets/facebook.png" />
          <RoundedLink link="/assets/instagram.png" />
          <RoundedLink link="/assets/linkedin.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
