import Table from "../Components/Table";
import React, { useEffect } from "react";
import MainTable from "../Components/MainTable";
import data from "../config";

function MainPage(props) {

  return (
    <div className="w-full">
      <MainTable data={data} />
    </div>
  );
}

export default MainPage;
