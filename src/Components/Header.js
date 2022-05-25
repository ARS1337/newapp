import React, { useState } from "react";
import CustomButtons from "../utils/CustomButtons";
import CustomSelect from "../utils/CustomSelect";
import RoundedLink from "../utils/RoundedLink";
import SearchBar from "../utils/SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import SimpleDrawer from "./SimpleDrawer";
import MenuList from "./MenuListCustom";
import MenuListCustom from "./MenuListCustom";

function Header(props) {
  const [open, setopen] = useState(false);
  return (
    <div className="flex flex-col w-full  ">
      <div className="bg-green-custom flex justify-center px-0 md:px-12">
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
          <img src="/assets/image001.png" alt="logo" className="w-auto h-12 mr-2  lg:h-24 lg:mr-12" />
          <div className="w-full mr-2  md:pr-16 sm:w-1/2  ">
            <SearchBar />
          </div>
        </div>

        <div className="w-20 whitespace-nowrap md:w-42 mr-1 md:mr-8   ">
          <div className=" relative h-10 rounded-md flex items-center justify-between z-50 flex-row bg-green-custom  ">
            <button className=" pl-2 font-Poppins-Medium p-1.5 text-white ">Sign In</button>
            <div className="hidden md:block">
              <img
                className=" h-5 w-auto  text-lg hidden md:block"
                src="/assets/arrowRightSignIn.png"
                alt={props.buttonText}
              />
            </div>
          </div>
        </div>
        <div className="flex md:hidden p-2 rounded-lg mx-2 bg-dark-blue-custom hover:cursor-pointer" onClick={() => setopen(!open)}>
          <GiHamburgerMenu size={24} color="white" />
          <SimpleDrawer open={open} setopen={setopen} />
        </div>
        <div className="hidden md:flex flex-row items-center justify-start w-4/12 lg:w-4/12 md:4/12">
          <RoundedLink link="/assets/Path 50.png" />
          <RoundedLink link="/assets/facebook.png" />
          <RoundedLink link="/assets/instagram.png" />
          <RoundedLink link="/assets/linkedin.png" />
        </div>
      </div>

      <MenuListCustom direction="flex-row"/>
    </div>
  );
}

export default Header;