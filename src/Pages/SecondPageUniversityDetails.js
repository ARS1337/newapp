import React from "react";
import MainTable from "../Components/MainTable";
import data from "../config";

function SecondPageUniversityDetails(props) {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row">
        <img src="/assets/SecondPage/Rectangle 95.png" alt="university placeholder" className="h-" />
      </div>
      <MainTable>{props.data.map()}</MainTable>
    </div>
  );
}

export default SecondPageUniversityDetails;
