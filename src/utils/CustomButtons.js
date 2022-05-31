import React from "react";

function CustomButtons(props) {
  return (
    <div className={" relative rounded-md flex items-center justify-between z-40 flex-row " + props.bgColor}>
      <button className={" px-3 font-Poppins-Medium p-2 "+props.buttonTextColor+ " "+props?.padding}>{props.buttonText}</button>
      <img className=" h-5 w-auto px-2 pr-4  text-lg " src={props.iconSrc} alt={props.buttonText}/>
    </div>
  );
}

export default CustomButtons;
