import Table from "../Components/Table";
import React, { useEffect } from "react";
import MainTable from "../Components/MainTable";
import data from "../config";

function MainPage(props) {
  useEffect(() => {
    props.setcurrPage("main");
  }, []);

  return (
    <div className="w-full">
      <MainTable data={data} />
    </div>
  );
}

export default MainPage;
