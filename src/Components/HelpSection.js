import React from "react";

function HelpSection(props) {
  return (
    <div className=" drop-shadow-lg w-full border overflow-hidden border-blue-custom rounded-lg grid grid-cols-1 md:grid-cols-2 my-12">
      {props?.questionList?.map((question, key) => {
        return (
          <div key={key} className="p-2 text-lg text-blue-custom border border-blue-custom overflow-hidden hover:cursor-pointer">
            <div className="text-md font-Poppins-Regular flex flex-row items-center w-full justify-between hover:cursor-pointer">
              <label className="hover:cursor-pointer">{question}</label>
              <img src="/assets/arrow-right-blue.png" alt="" className="hover:cursor-pointer"/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HelpSection;
