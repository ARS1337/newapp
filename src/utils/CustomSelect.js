import React from "react";

function CustomSelect(props) {
  return (
    <div className="bg-transparent text-white  relative  z-50 font-Poppins-Light md:mr-1 lg:mr-2 h-12 flex items-center">
      <div className="flex flex-row peer p-3.5 md:p-3 items-baseline ">
        <div className=" pr-3 md:text-sm md:pr-1 lg:text-lg whitespace-nowrap">{props.menuName}</div>
        {props.menuList?.length > 0 ? <img src="/assets/Subtraction 2.png" alt="" className="h-2" /> : ""}
      </div>
      <div className="absolute -bottom-[99px] bg-white text-black hidden peer-hover:block hover:block rounded-lg rounded-t-none ">
        {props.menuList?.map((menu, key) => {
          return (
            <div className="flex flex-col p-3 pl-4 pr-10 text-left w-max font-Poppins-Medium text-md" key={key}>
              {menu}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomSelect;
