import React from "react";

function MainPageDescription(props) {
  return (
    <>
      {/* description start */}
      <div className=" flex items-center justify-center ">
        <div className="w-full text-center  flex items-center justify-center flex-col my-12">
          <label className="mb-6 text-4xl font-Poppins-SemiBold">Propel Your Career to the next level</label>
          <label className="text-center mb-6 text-gray-500 text-lg px-4 md:max-w-[80%] lg:max-w-[60%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices dolor non erat sollicitudin, in
            pretium ante varius. Cras lorem diam, sollicitudin eget tortor vitae, sodales faucibus massa. Nullam iaculis
            luctus metus, non interdum nulla commodo ac.
          </label>
          <a href="/" className="flex flex-row items-center text-blue-custom font-Poppins-Bold text-lg ">
            <div>View more </div>
            <img src="/assets/arrow-right.png" className="pl-3 h-4 w-auto" alt="view more" />
          </a>
        </div>
      </div>
      {/* description ends */}
    </>
  );
}

export default MainPageDescription;
