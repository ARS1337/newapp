import React from "react";

function GradientButton(props) {
  return (
    <button onClick={props.onClick} className="bg-gradient-to-r from-blue-custom to-green-custom p-2 px-6 text-lg text-white rounded-t-xl w-full mr-4">
      {props.text.toUpperCase()}
    </button>
  );
}

export default GradientButton;
