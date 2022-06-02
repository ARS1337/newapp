import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuListCustom from "./MenuListCustom";
import CustomSelect from "../utils/CustomSelect";
import { Link } from "react-router-dom";

function SimpleDrawer(props) {
  const { open, setopen } = props;
  return (
    // <div className="bg-dark-blue-custom ">
      <Drawer anchor={"left"} open={open} sx={{ color: "#0E76A8" }} hideBackdrop={true}>
        <div className="w-[300px]  bg-dark-blue-custom text-white h-full">
          <div
            className="flex flex-row w-full items-center justify-between bg-[#1f4972] p-4"
            onClick={() => {
              setopen(!open);
            }}
          >
            <h1 className="text-xl font-Poppins-SemiBold">Sae & Beyond</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#FFFFFF"
              class="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </div>
          <div className="p-3">
            <CustomSelect menuName="About Us" />
            <hr className="border-gray-400 " />
            <CustomSelect menuName="Jobs" menuList={["Menu 1", "Menu 2 "]} />
            <hr className="border-gray-400 " />
            <CustomSelect menuName="Expert" />
            <hr className="border-gray-400 " />
            <CustomSelect menuName="Blog" />
            <hr className="border-gray-400 " />
            <CustomSelect menuName="Education" menuList={["Menu 1", "Menu 2 "]} />
            <hr className="border-gray-400 " />
            <CustomSelect menuName="Sea-commerce" menuList={["Menu 1", "Menu 2 "]} />
            <hr className="border-gray-400 " />
            <CustomSelect menuName="Events" menuList={["Menu 1", "Menu 2 "]} />
            <hr className="border-gray-400 " />
            <CustomSelect menuName="Tecnologic service " menuList={["Menu 1", "Menu 2 "]} />
            <hr className="border-gray-400 " />
            <CustomSelect menuName="Testimonials " />
          </div>
        </div>
      </Drawer>
    // </div>
  );
}

export default SimpleDrawer;
