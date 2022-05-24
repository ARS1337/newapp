import React from "react";

function BlogComponent(props) {
  return (
    <>
      <div className="p-4 font-Poppins-Medium">
        <hr className="pb-2" />
        <h1 className="text-xl pb-3">Blog Heading</h1>
        <label className="py-4">consectetur adipiscing elit.Nunc interdum vel nibh ut vulputate.</label>
        <div className="flex items-center justify-end pt-2 py-2 text-blue-custom font-Poppins-SemiBold">
          <a href="/">
            Read More {">"}
            {">"}
          </a>
        </div>
      </div>
    </>
  );
}

export default BlogComponent;
