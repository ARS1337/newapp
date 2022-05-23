import React from "react";

function CustomSelect(props) {
  return (
    <div className="bg-transparent text-white  relative px-0 md:px-0 lg:px-0">
      <div className="flex flex-row peer p-3.5 items-baseline">
        <label className=" pr-3 text-md whitespace-nowrap">{props.menuName}</label>
        {props.menuList?.length > 0 ? <img src="/assets/Subtraction 2.png" alt="" className="h-2" /> : ""}
      </div>
      <div className="absolute bg-white text-black hidden peer-hover:block rounded-lg rounded-t-none ">
        {props.menuList?.map((menu,key) => {
          return <div className="flex flex-col p-3 px-5 text-left w-max" key={key}>{menu}</div>;
        })}
      </div>
    </div>
  );
}

export default CustomSelect;
