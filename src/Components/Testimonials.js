import React from "react";

function Testimonials(props) {
  return (
    <div className=" border border-gray-500 rounded-lg p-4 w-[600px] md:w-[300px] flex flex-col text-gray-500">
      <label className="text-md font-Poppins-Medium">{props.heading}</label>
      <label className="font-Poppins-SemiBold text-lg text-blue-custom">{props.title}</label>
      <label>{props.body}</label>
      <div className="flex items-center justify-end pt-2 py-2 text-blue-custom font-Poppins-SemiBold">
        <a href="/">
          Read More {">"}
          {">"}
        </a>
      </div>
    </div>
  );
}

export default Testimonials;
