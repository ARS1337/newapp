import React from "react";

import data from "../config";

const CustomSelect = (props) => {
  return (
    <div className="p-2 bg-blue-custom max-w-[300px]">
      <div className="max-w-xs bg-white rounded-lg p-2 pb-2 ">
        <select className="max-w-[250px] p-2 bg-transparent font-Poppins-Medium text-xs break-all outline-none">
          {
            data.tableList.map
          }
          <option className="font-Poppins-Medium text-xs break-all">
            HMR Institute of Technology & Management (HMRITM)1
          </option>
          <option className="font-Poppins-Medium text-xs break-all">
            HMR Institute of Technology & Management (HMRITM)2
          </option>
          <option className="font-Poppins-Medium text-xs break-all">
            HMR Institute of Technology & Management (HMRITM)3
          </option>
        </select>
      </div>
      <button className="text-green-custom text-lg"> clear</button>
    </div>
  );
};

function ComparisionTable(props) {
  const tableList = data.tableList;
  return (
    <div className="w-full md:w-full  lg:w-full">
      <table className="table-fixed w-full">
        <colgroup>
          <col span="2" />
          <col />
        </colgroup>
        <thead>
          <tr className="w-full  p-4  ">
            <th className="w-1/4 font-Poppins-Thin text-sm text-white border border-white rounded-tl-xl overflow-hidden bg-blue-custom ">
              University
            </th>
            <th className="max-w-1/4">
              <CustomSelect />
            </th>
            <th className="w-1/4">
              <CustomSelect />
            </th>
            <th className="w-1/4">
              <CustomSelect />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-full bg-white font-Poppins-Thin text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white">Location</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white font-Poppins-Thin text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white">Type of Courses</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white font-Poppins-Thin text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white">No. of Courses</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white font-Poppins-Thin text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white">Courses Fees</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white font-Poppins-Thin text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white">Duration</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>

          <tr className="w-full bg-white font-Poppins-Thin text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white">Made of Study</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white font-Poppins-Thin text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white">Placement</th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">
              New Delhi, Delhi Ncr ( India )
            </th>
            <th className="w-1/4 bg-white py-4 text-black border border-gray-400 border-t-0">Year</th>
          </tr>
          <tr className="w-full bg-white font-Poppins-Thin text-sm">
            <th className="w-1/4 bg-blue-custom py-5 text-white border border-white">Work Visa</th>
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
