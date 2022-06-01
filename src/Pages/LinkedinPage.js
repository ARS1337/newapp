import React from "react";
import CheckmarkListing from "../Components/CheckmarkListing";
import CustomCard from "../Components/CustomCard";
import data from "../config";
import CustomButtons from "../utils/CustomButtons";

const CustomLinkedinCard = (props) => {
  return (
    <div className=" bg-white rounded-lg font-Poppins-Regular relative">
      <img src={props.src} alt="s" className="p-4" />
      <div className="border border-gray-300 w-full my-0"></div>
      <div className="p-4">
        <div className="p-2 text-blue-custom text-2xl font-Poppins-SemiBold ">{props.heading}</div>
        {props.entries?.map((entry, key) => {
          return (
            <div key={key} className="text-lg py-1">
              <CheckmarkListing text={entry} />
            </div>
          );
        })}
      </div>
      <div className="bg-green-custom flex items-center justify-center w-full p-6 px-4 flex-col text-white py-4 mt-4 h-28 rounded-b-2xl bg-gradient-to-r from-blue-custom to-green-custom">
        {<label className="text-md">Starts from</label>}
        <div className="flex flex-row items-center justify-center">
          {/* <label className="pr-2">₹</label> */}
          <label className="text-2xl pb-2">{props.price + "/-"}</label>
        </div>
      </div>
      <div className="absolute -bottom-7  left-[45%] bg-green-custom p-5 px-4 flex items-center justify-center rounded-full">
        <img src="/assets/CVPage/iconfinder_outlined_log_in_4280467 copy 7.png" alt="" />
      </div>
    </div>
  );
};

function LinkedinPage(props) {
  return (
    <div className="w-full my-8 px-2">
      <div className="rounded-lg bg-white drop-shadow-md flex flex-col items-center justify-center p-6">
        <label className="text-xl md:text-2xl lg:text-4xl py-6 md:py-12 font-Poppins-SemiBold">Do you know:</label>
        <div className="relative w-[90%] lg:w-[80%] mb-12">
          <div className="border border-gray-200 h-0.5 w-full"> </div>
          <div className="absolute h-10 rotate-45 w-10  border border-gray-300 -top-5 left-[45%] lg:left-[47%] border-t-0 border-l-0 bg-white"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between my-5 lg:my-10  ">
          <CustomCard text="122 million persons have received an Interview through LinkedIn" number={1} />
          <CustomCard text="35.3 million have been hired by a person they connected on LinkedIn" number={2} />
          <CustomCard
            text="Most Marine companies are now on LinkedIn and actively scout talent for shore jobs on LinkedIn"
            number={3}
          />
        </div>
        <div className="w-full rounded-lg bg-green-custom font-ita p-6 text-white text-md lg:text-lg text-center relative my-4 ">
          <label className="z-50 italic">
            {" "}
            Excerpts from the Survey done by Sea and Beyond on the usage of LinkedIn by mariners (1000 mariners
            surveyed)
          </label>
          <div className="absolute h-12 w-12 rotate-45   border z-10 top-22 lg:top-20 left-[42%] sm:left-[44%] md:left-[49%] border-t-0 border-l-0 bg-green-custom"></div>
        </div>
        <div className="flex flex-col items-center justify-end w-full font-Poppins-Regular my-6 text-black">
          {data.marinerInfo1.map((text) => {
            return (
              <div className=" text-left text-md lg:text-lg w-full py-1">
                <CheckmarkListing text={text} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-row items-center justify-center my-8 w-full">
          <img src="/assets/LinkedinPage/macbook.png" alt="macbook" className="w-[55%] h-auto md:w-[40%] md:h-auto" />
          <div className="flex flex-col items-center justify-center pb-4 mt-4 md:mt-0 h-full">
            <label className="text-green-custom font-Poppins-Bold text-2xl sm:text-2xl md:text-4xl lg:text-4xl  pb-0.5 md:pb-2">
              YOU
            </label>
            <label className="text-blue-custom font-Poppins-Bold text-2xl sm:text-2xl md:text-4xl lg:text-4xl  text-center pb-0.5  md:pb-2 whitespace-nowrap">
              SEA & BEYOND
            </label>
            <img
              src="/assets/LinkedinPage/Linkedin-Logo.png"
              alt=""
              className="w-[60%] h-auto md:w-[50%] lg:w-[60%] md:h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-end w-full font-Poppins-Regular mt-6 text-black">
          {data.marinerInfo2.map((text) => {
            return (
              <div className=" text-left text-md lg:text-lg w-full py-1">
                <CheckmarkListing text={text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-2xl lg:text-3xl text-blue-custom font-Poppins-SemiBold mt-8  mb-4 px-2">
        Sea & Beyond Offerings
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-2 md:p-0">
        <div className="w-full mr-0 md:mr-4 mb-10 md:mb-0">
          <CustomLinkedinCard
            src="/assets/LinkedinPage/Layer 56 copy.png"
            entries={data?.entry1}
            heading="CV Evaluation"
            price="999"
          />
        </div>
        <div className="w-full">
          <CustomLinkedinCard
            src="/assets/LinkedinPage/laptop.png"
            entries={data?.entry2}
            heading="CV Preparation"
            price="999"
          />
        </div>
      </div>
      <div className="px-4 md:px-12 lg:px-32 flex flex-col md:flex-row items-center justify-between p-7 bg-green-custom my-12 rounded-lg">
        <div className="flex flex-row items-center justify-center pb-2 md:pb-0">
          <img src="/assets/LinkedinPage/543772-200 copy 2.png" alt="" className="pr-4 h-auto w-[20%] md:w-[30%]" />
          <div className="text-white text-xl font-Poppins-SemiBold whitespace-nowrap">CV Prep/Evaluation</div>
        </div>
        <CustomButtons
          bgColor="bg-white"
          buttonText="Explore More"
          buttonTextColor="text-black"
          iconSrc="/assets/arrow-right.png"
          padding="p-3"
        />
      </div>
      <div className="p-4 mt-6 border-2 border-green-custom rounded-lg bg-white">
        <div className="text-2xl text-blue-custom font-Poppins-SemiBold py-4 px-4">Why Sea and Beyond</div>
          {data?.whyReasons.map((reason,key)=>{
            return <div key={key} className="font-Poppins-Regular text-md lg:text-lg pb-2">
              <CheckmarkListing text={reason}/>
            </div>
          })}
      </div>
    </div>
  );
}

export default LinkedinPage;
