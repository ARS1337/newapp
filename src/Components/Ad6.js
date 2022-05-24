import React from "react";
import BlogComponent from "./BlogComponent";

function Ad6(props) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-center mt-4 bg-white rounded-lg drop-shadow-lg rounded-b-none">
        <label className="text-lg font-Poppins-Bold p-4">From The Blog</label>
        {[1, 2, 3].map((x, key) => {
          return (
            <div key={key}>
              {" "}
              <BlogComponent />
            </div>
          );
        })}
      </div>
      <button className="w-full bg-blue-custom p-3 rounded-lg rounded-t-none text-white hover:opacity-90">
        Browse All
      </button>
    </>
  );
}

export default Ad6;
