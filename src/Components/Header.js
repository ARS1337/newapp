import React from "react";
import CustomButtons from "../utils/CustomButtons";
import CustomSelect from "../utils/CustomSelect";
import RoundedLink from "../utils/RoundedLink";
import SearchBar from "../utils/SearchBar";

function Header(props) {
  return (
    <div className="flex flex-col w-full  ">
      <div className="bg-green-custom flex justify-center px-12">
        <div className="flex flex-col md:flex-row items-center justify-between  py-1">
          <div className="font-Poppins-Light  flex items-center justify-center text-md md:text-lg lg:text-lg p-2 mr-0 md:mr-16">
            Find Your Pole Star : {props.poleDate}
          </div>
          <CustomButtons
            bgColor="bg-white"
            buttonText="Register Now"
            iconSrc="/assets/arrow-right.png"
            buttonTextColor="text-black"
          />
        </div>
      </div>

      <div className="w-full bg-white py-2 px-4 md:lg-4 lg:px-12  flex flex-row items-center justify-center ">
        <div className="flex flex-row items-center justify-center w-full md:w-7/12 ">
          <img src="/assets/image001.png" alt="logo" className="w-auto  h-24 mr-12" />
          <div className="w-1/3 md:pr-16 sm:w-1/2  ">
            <SearchBar />
          </div>
        </div>

        <div className="hidden md:flex flex-row items-center justify-start w-4/12 lg:w-4/12 md:4/12">
          <div className="w-32 md:w-42 mr-8   ">
            <CustomButtons
              bgColor="bg-green-custom"
              buttonText="Sign In"
              iconSrc="/assets/arrowRightSignIn.png"
              buttonTextColor="text-white"
            />
          </div>
          <RoundedLink link="/assets/Path 50.png" />
          <RoundedLink link="/assets/facebook.png" />
          <RoundedLink link="/assets/instagram.png" />
          <RoundedLink link="/assets/linkedin.png" />
        </div>
      </div>

      <div className="w-full bg-blue-custom px-4 md:px-12 hidden md:flex flex-row items-center text-white justify-center  ">
        <CustomSelect menuName="About Us" />
        <CustomSelect menuName="Jobs" menuList={["Menu 1", "Menu 2 "]} />
        <CustomSelect menuName="Expert" />
        <CustomSelect menuName="Blog" />
        <CustomSelect menuName="Education" menuList={["Menu 1", "Menu 2 "]} />
        <CustomSelect menuName="Sea-commerce" menuList={["Menu 1", "Menu 2 "]} />
        <CustomSelect menuName="Events" menuList={["Menu 1", "Menu 2 "]} />
        <CustomSelect menuName="Tecnologic service " menuList={["Menu 1", "Menu 2 "]} />
        <CustomSelect menuName="Testimonials " />
      </div>
    </div>
  );
}

export default Header;
