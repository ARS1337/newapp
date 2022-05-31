import React from "react";
import { IconContext } from "react-icons/lib";
import { IoCloseCircleOutline } from "react-icons/io5";
import CustomButtons from "../utils/CustomButtons";

function SignUpForm(props) {
  console.log('SignUpForm(props) ',props)
  return (
    <div className="z-50 bg-[rgba(0,0,0,0.4)] absolute h-screen w-screen">
      <div className="fixed top-0 lg:top-10 left-0 lg:left-[35%] md:left-[20%] sm:left-2 md:top-10 z-50 h-screen md:h-full mt-2">
        <div className="text-white w-full bg-white p-4 rounded-xl border border-[rgba(0, 0, 0, 0.175)]">
          <form className="flex flex-col w-full justify-center items-center  px-2 md:px-0 ">
            <div className="absolute top-4 right-4">
              <IconContext.Provider value={{ color: "#64DDAC", size: 32, className: "global-class-name" }}>
                <div
                  onClick={() => {
                    props.setshowModal(false);
                    console.log('clicked')
                  }}
                  className="self-end"
                >
                  <IoCloseCircleOutline />
                </div>
              </IconContext.Provider>
            </div>

            <label className="text-xl lg:text-3xl text-center text-green-custom font-Poppins-Bold mb-1">Get In Touch With Us</label>

            <div className="flex flex-col items-center z md:flex-row md:justify-between mt-2 lg:mt-8  w-full">
              <div className="mr-0 md:mr-4 mb-3  w-full">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white"
                />
              </div>
              <div className="mr-0  mb-3  w-full">
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between   w-full ">
              <div className="mr-0 md:mr-4 mb-3  w-full">
                <input
                  type="number"
                  placeholder="Phone Number*"
                  className="bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white"
                />
              </div>
              <div className="mr-0  mb-3  w-full">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white"
                />
              </div>
            </div>
            <select
              className="bg-gray-custom w-full p-4 mb-4 rounded-md bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white"
              placeholder="Need Help With Education"
            >
              <option>Need Help With Education</option>
              <option>sd2</option>
              <option>sd3</option>
              <option>sd4</option>
            </select>
            <textarea
              className="bg-gray-custom p-5 rounded-md  w-full bg-gray-custom focus:bg-white p-2 lg:p-4 text-lg font-Poppins-SemiBold text-white focus:text-green-custom rounded-md  w-full placeholder:text-lg placeholder:text-white"
              placeholder="Message*"
            />
            <button className="p-1 px-5 lg:p-3 lg:px-5 bg-green-custom text-xl font-Poppins-SemiBold mt-3 rounded-xl max-w-min">
              <CustomButtons
                bgColor="bg-green-custom"
                buttonText="Submit"
                buttonTextColor="text-white"
                iconSrc="/assets/ThirdPage/iconfinder_outlined_log_in_4280467 copy 6.png"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
