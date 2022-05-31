import React from 'react';

function HeroSection(props) {
    return (
        <div className="w-full  bg-edu-heading h-[320px] bg-cover bg-no-repeat bg-center px-4 md:px-24 pb-8 md:pb-4 lg:pb-12 flex items-end justify-center">
        <div className="w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-[80%] lg:min-w-[1000px] grid grid-cols-2   gap-2 md:gap-4 lg:gap-6 bg-white bg-opacity-50 py-4 px-3 md:py-6 md:px-2 rounded-md">
          <div className="relative w-full  bg-white rounded-lg flex justify-end">
            <img src="/assets/Group 21.png" alt="" className="absolute left-5 top-6 h-5 w-5" />
            <input type="text" className="p-5 outline-none  w-[80%] md:w-[90%] lg:w-[85%] mr-1 text-md" placeholder="Location" />
          </div>

          <div className="relative w-full bg-white rounded-lg flex justify-end">
            <img src="/assets/Rectangle 85.png" alt="" className="absolute left-6 top-6 h-5 w-5 " />
            <input type="text" className="p-5 outline-none  w-[80%] md:w-[90%] lg:w-[85%] mr-1 text-md" placeholder="University" />
          </div>

          <div className="relative w-full bg-white rounded-lg flex justify-end">
            <img src="/assets/Rectangle 92.png" alt="" className="absolute left-6 top-5 h-5 w-5" />
            <input type="text" className="p-5 outline-none  w-[80%] md:w-[90%] lg:w-[85%] mr-1 text-md" placeholder="Courses" />
          </div>

          <div className="relative w-full bg-white rounded-lg flex justify-end">
            <img src="/assets/book.png" alt="" className="absolute left-6 top-5 h-5 w-5" />
            <input type="text" className="p-5 outline-none  w-[80%] md:w-[90%] lg:w-[85%] mr-1 text-sm " placeholder="Mode Of Study" />
          </div>

          <button className="p-4 w-full lg:max-w-min col-span-2 lg:col-auto w-full rounded-lg bg-green-custom text-lg font-Poppins-Medium text-white mr-2">
            Search
          </button>
        </div>
      </div>
    );
}

export default HeroSection;