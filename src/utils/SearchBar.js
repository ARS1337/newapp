import React, { useState } from "react";

function SearchBar(props) {
  const [test, setText] = useState("");
  return (
    <div className="bg-white border border-black border-opacity-30 w-full flex flex-row  rounded-md">
      <img src='/assets/search.png' alt='search' className="w-auto h-10 lg:h-12 p-2"/>
      <input
        type="text"
        value={test}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder='Search here'
        className=" w-full p-2 focus:outline-none mr-0.5"
      />
    </div>
  );
}

export default SearchBar;
