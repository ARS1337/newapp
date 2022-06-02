import React from "react";
import { Link } from "react-router-dom";

function AllPages(props) {
  return (
    <div className="w-full flex flex-col items-start justify-start text-lg text-blue-custom ">
      <Link to="/" target="_blank">main  page</Link>
      <Link to="/Second" target="_blank" >Second</Link>
      <Link to="/Third" target="_blank" >Third</Link>
      <Link to="/CVPage" target="_blank" >CVPage</Link>
      <Link to="/EventsPage" target="_blank" >EventsPage</Link>
      <Link to="/JobsPage" target="_blank" >JobsPage</Link>
      <Link to="/LinkedinPage" target="_blank" >LinkedinPage</Link>
      <Link to="/RatingPage" target="_blank" >RatingPage</Link>
      <Link to="/AboutUs" target="_blank" >AboutUs</Link>
    </div>
  );
}

export default AllPages;
