import { Typography } from "@mui/material";
import React from "react";

import data from "../config";

const CustomSelect = (props) => {
  return (
    <div className="p-2 bg-blue-custom max-w-[300px]">
      <div className="max-w-xs bg-white rounded-lg p-2 pb-2 ">
        <Typography noWrap>
          <select className="max-w-[250px] p-0 md:p-2 bg-transparent font-Poppins-Medium text-xs break-all outline-none">
            <option className="font-Poppins-Medium text-xs break-all">
              <Typography noWrap>HMR Institute of Technology & Management (HMRITM)1</Typography>
            </option>
            <option className="font-Poppins-Medium text-xs break-all">
              HMR Institute of Technology & Management (HMRITM)2
            </option>
            <option className="font-Poppins-Medium text-xs break-all">
              HMR Institute of Technology & Management (HMRITM)3
            </option>
            <option className="font-Poppins-Medium text-xs break-all">Find University?</option>
          </select>
        </Typography>
      </div>
      <button className="text-green-custom text-lg"> clear</button>
    </div>
  );
};

function ComparisionTable(props) {
  const tableList = data.tableList;
  return (
    <div className="w-full md:w-full  lg:w-full overflow-x-scroll lg:overflow-x-hidden font-Poppins-Regular font-[500] drop-shadow-md">
      <table className="table-fixed w-full">

        <thead className="min-w-[500px] ">
          <tr className="w-full  p-4  overflow-scroll">
            <th className="w-[300px]   text-sm text-white border border-white  rounded-tl-xl overflow-hidden bg-blue-custom ">
              University
            </th>
            <th className="w-[300px] ">
              <CustomSelect />
            </th>
            <th className="w-[300px] ">
              <CustomSelect />
            </th>
            <th className="w-[300px] ">
              <CustomSelect checked={true} />
            </th>
          </tr>
        </thead>
        <tbody className="min-w-[500px] overflow-scroll">
          <tr className="w-full bg-white text-sm min-w-[500px] overflow-scroll">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white text-sm font-[500] ">Location</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white  text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white text-sm font-[500]">Type of Courses</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white  text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white text-sm font-[500]">No. of Courses</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white  text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white text-sm font-[500]">Courses Fees</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white  text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white text-sm font-[500]">Duration</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>

          <tr className="w-full bg-white  text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white text-sm font-[500]">Made of Study</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white  text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white text-sm font-[500]">Placement</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white  text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white text-sm font-[500]">Work Visa</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisionTable;
