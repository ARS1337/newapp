import React, { useState } from "react";

function CustomInput(props) {
  const [value, setValue] = useState("");
  return (
    <div className=" w-full">
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        required
        className="bg-gray-custom p-4 rounded-md "
      />
    </div>
  );
}

export default CustomInput;


