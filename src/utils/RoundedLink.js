import React from "react";

function RoundedLink(props) {
  return (
    <div className="mr-4 border border-green-custom rounded-lg h-12 w-12 flex items-center justify-center hover:bg-green-custom hover:cursor-pointer" onClick={props.onClick}>
      <div href="/">
        <img src={props.link} alt="" className="w-auto h-4 md:h-6 lg:h-4" />
      </div>
    </div>
  );
}

export default RoundedLink;
