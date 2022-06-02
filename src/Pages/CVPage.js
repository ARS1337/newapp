import React from "react";
import Ad2 from "../Components/Ad2";
import CheckmarkListing from "../Components/CheckmarkListing";
import CustomButtons from "../utils/CustomButtons";

const CardComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:w-[80%] font-Poppins-Regular">
      <img src={props.src} alt="alt text" />
      <label className="text-md text-gray-600 p-2 pt-3 text-center">{props.text}</label>
    </div>
  );
};
const CardComponent1 = (props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4  md:w-[80%]">
      <img src={props.src} alt="alt text" />
      <label className="text-3xl p-2 pt-3 font-Poppins-SemiBold">{props.text1}</label>
      <label className="text-lg p-2 pt-3 font-Poppins-Regular text-black-custom">{props.text2}</label>
    </div>
  );
};
const CardComponent2 = (props) => {
  return (
    <div className="flex flex-col items-center justify-center  relative bg-white drop-shadow-xl mb-12 md:mb-3 lg:m-2 w-full rounded-2xl break-all ">
      <img src={props.src} alt="alt text" className="p-6" />
      <div className="h-0.5 w-[95%] md:w-[80%] border border-gray-300 my-5 "></div>
      <label className="py-2 text-xl text-blue-custom font-Poppins-Medium">{props.title}</label>
      <div className="px-2 md:px-6 break-normal">
        <CheckmarkListing text={props.text1} />
      </div>
      <div className="px-2 md:px-6 break-normal">
        <CheckmarkListing text={props.text2} />
      </div>
      <div className="px-2 md:px-6 break-normal">
        <CheckmarkListing text={props.text3} />
      </div>
      <div className="bg-green-custom flex items-center justify-center w-full p-4 px-4 flex-col text-white py-4 mt-4 h-28 rounded-b-2xl bg-gradient-to-r from-blue-custom to-green-custom">
        {props?.startsFrom ? <label className="text-md">STARTS FROM</label> : ""}
        <div className="flex flex-row items-center justify-center">
          <label className="pr-2">₹</label>
          <label className="text-xl">{props.price + "/-"}</label>
        </div>
      </div>
      <div className="absolute -bottom-7 bg-green-300 p-5 px-4 flex items-center justify-center rounded-full">
        <img src="/assets/CVPage/iconfinder_outlined_log_in_4280467 copy 7.png" alt="" />
      </div>
    </div>
  );
};

const AdComponent = (props) => {
  return (
    <>
      <div className="mt-4 mb-0 bg-dark-blue-custom rounded-lg p-4 py-6 flex flex-col md:flex-row items-center justify-between drop-shadow-lg px-2 md:px-12 lg:px-24">
        <div className="flex flex-row  items-center justify-start pb-2 md:pb-0">
          <img src="/assets/linkedin-logo.png" alt="" className="h-6 md:h-10 pr-1 md:pr-4 w-auto  " />
          <label className="pr-4 text-white font-Poppins-Medium  text-lg lg:text-2xl ">Still Confused</label>
        </div>
        <CustomButtons
          bgColor="bg-green-custom"
          buttonTextColor="text-white text-lg lg:text-xl"
          buttonText="Explore more"
          iconSrc="/assets/CVPage/iconfinder_outlined_log_in_4280467 copy 7.png"
        />
      </div>
    </>
  );
};

function CVPage(props) {
  return (
    <div className="w-full mt-12 mb-6 font-Poppins-Regular px-2 md:px-0">
      <div className="overflow-hidden rounded-2xl bg-white drop-shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <CardComponent
            src="/assets/CVPage/Layer 45 copy 3.png "
            text="Have you applied for numerous shore jobs but have not received an interview call"
          />
          <CardComponent src="/assets/CVPage/Layer 45 copy 2.png " text="Is your CV still a company form." />
          <CardComponent
            src="/assets/CVPage/Layer 45 copy.png "
            text="Is your CV in a good format with right content."
          />
        </div>
        <div className="flex items-center justify-center my-12">
          <label className="text-center w-[90%] md:w-[60%] text-lg text-gray-500 font-Poppins-Regular">
            If the answer to any of the above questions is NO, you need to make a relevant CV to make a mark on the
            recruiters.
          </label>
        </div>
        <div className=" bg-green-custom w-full  flex flex-col items-start mt-12  px-4 md:px-12 text-white">
          <label className="text-xl md:text-2xl py-4">Why is a good CV important</label>
          <div className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo
          </div>
          <div className="pb-4">
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum
          </div>
        </div>
      </div>
      <div className="text-gray-600 p-8 rounded-2xl bg-white px-8 text-center mt-6 border-2 border-green-custom font-Poppins-Regular ">
        We at Sea & Beyond (Team of Mariners/HR personnel and content writers) can help you to prepare a relevant resume
        for your experience which would help you in getting an interview
      </div>
      <div className="bg-blue-custom p-4 px-8 flex flex-col md:flex-row items-center justify-between text-white mt-6 rounded-2xl ">
        <CardComponent1
          src="/assets/CVPage/iconfinder_emoji_emoticon-23_3638439.png"
          text1="1000+"
          text2="HAPPY CUSTOMERS"
        />
        <label className="text-green-custom ">FROM</label>
        <CardComponent1 src="/assets/CVPage/business-and-trade.png" text1="80+" text2="COMPANIES" />
        <label className="text-green-custom">ACROSS</label>
        <CardComponent1 src="/assets/CVPage/world-map.png" text1="10" text2="COUNTRIES" />
      </div>
      <div className="my-6 ">
        <label className="pl-8 text-xl text-blue-custom font-Poppins-Medium"> Our Services</label>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-baseline justify-between my-6 mb-10">
          <CardComponent2
            src="/assets/CVPage/Layer 47.png"
            title="CV EVALUATION"
            text1="You feel that your CV is right but not 100% sure Want a review from "
            text2="Marine and HR experts You want to take"
            text3="2nd opinion on your current CV"
            price="999"
          />
          <CardComponent2
            src="/assets/CVPage/Layer 47.png"
            title="CV PREPARATION"
            text1="Entry Level (Less than 5 years) "
            text2="Mid Level (5 to 10 years)"
            text3="Senior Level (more than 10 years)"
            price="999"
            startsFrom={true}
          />
          <CardComponent2
            src="/assets/CVPage/Layer 47.png"
            title="VIDEO CV"
            text1="90 seconds video which we will guide you on how to shoot plus we help in Editing "
            text2="Post production sound Motion graphics"
            text3="Color correction and best quality format."
            price="5999"
          />
        </div>
      </div>
      <AdComponent />
    </div>
  );
}

export default CVPage;
