import React from "react";
import { Link } from "react-router-dom";

function AllPages(props) {
  return (
    <div className="w-full flex flex-col items-start justify-start text-lg text-blue-custom ">
      <Link to="/">main page</Link>
      <Link to="/Second">Second</Link>
      <Link to="/Third">Third</Link>
      <Link to="/CVPage">CVPage</Link>
      <Link to="/EventsPage">EventsPage</Link>
      <Link to="/JobsPage">JobsPage</Link>
    </div>
  );
}

export default AllPages;
