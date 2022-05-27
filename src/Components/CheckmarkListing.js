import React from "react";
import { IconContext } from "react-icons";
import { HiOutlineCheck } from "react-icons/hi";

function CheckmarkListing(props) {
  return (
    <li className="flex flex-row">
      <IconContext.Provider value={{ color: "#64DDAC", size: 24, className: "global-class-name" }}>
        <div>
          <HiOutlineCheck />
        </div>
      </IconContext.Provider>
      <label className="pl-2 text-gray-custom text-md">{props.text}</label>
    </li>
  );
}

export default CheckmarkListing;
