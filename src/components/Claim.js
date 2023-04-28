import React, { useState, useEffect } from "react";
// import { Pie } from "react-chartjs-2";
import axios from "axios";
import { CSVLink } from "react-csv";
// import { Pie } from "react-chartjs-2";
// import { Doughnut } from "react-chartjs-2";

// const myData = {
//   labels: ["Dedommage", "Indemnises"],
//   datasets: [
//     {
//       data: [2, 5],
//       backgroundColor: ["#270D08", "#5D1050"],
//     },
//   ],
// };

const Claim = () => {
  // const [selectDedommage, setSelectDedommage] = useState(0);
  // const [selectIndemnises, setSetectIndemnises] = useState(0);

  const [feature, setFeature] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    const fetchClaim = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_d11617ca0c574916a61ed0717ef43960/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json`
        )
        .then((response) => {
          setFeature(response.data.features);
          console.log("_________________________");
          console.log(response.data.features);
          console.log("___________________________");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchClaim();
  }, []);

  return (
    <>
      <div>
        <div className="bg-gray-100">
          <div className="m-4 flex-auto">
            <div className="flex items-center w-full gap-8 px-2 mx-2 mt-3 border border-gray-200">
              <div className="w-96">
                <p className="text-xl text-gray-600">Claim Table</p>
              </div>
              <div className="flex ml-14">
                <div className="flex items-center w-80 m-2">
                  <label htmlFor="floatingInput" className="text-gray-900 px-2">
                    Date
                  </label>
                  {/* <input
                  type="date"
                  className="form-control w-full px-3 py-2 text-base font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Select a date"
                  // value={filterByDate}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setStatusdateData1("");
                    } else {
                      setStatusdateData1(
                        `+and+created_date%3D%27${e.target.value}%27`
                      );
                    }
                  }}
                /> */}

                  {/* <button
                  className="datepicker-toggle-button"
                  data-mdb-toggle="datepicker"
                >
                  <i className="fas fa-calendar datepicker-toggle-icon"></i>
                </button> */}
                </div>

                {/* <div className="flex items-center w-80 m-2">
                <input
                  type="date"
                  className="form-control w-full px-3 py-2 text-base font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Select a date"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setStatusdateData1("");
                    } else {
                      setStatusdateData1(
                        `+and+created_date%3D%27${e.target.value}%27`
                      );
                    }
                  }}
                /> */}
                <label
                  htmlFor="floatingInput"
                  className="text-gray-700"
                ></label>
                <button
                  className="datepicker-toggle-button"
                  data-mdb-toggle="datepicker"
                ></button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-400 h-5 mt-4 mb-10">
          <div className="grid w-full grid-cols-3 gap-3 px-2 text-black">
            <div className="flex flex-col items-center w-full  py-3 text-gray-700 bg-white border">
              <p className="text-base font-semibold">Total Issues</p>
              {/* <div className="flex gap-4 text-5xl font-semibold">
                {selectRecu}
              </div> */}
            </div>
            <div className="flex flex-col items-center w-full py-3 text-gray-700 bg-white border">
              <p className="text-base font-semibold">Pending Issues</p>
              <div className="flex gap-4 text-5xl font-semibold">
                {/* {selectDedommage} */}
              </div>
            </div>
            <div className="flex flex-col items-center w-full py-3 text-gray-700 bg-white border">
              <p className="text-base font-semibold">Fixed Issues</p>
              <div className="flex gap-4 text-5xl font-semibold">
                {/* {selectIndemnises} */}
              </div>
            </div>
          </div>
        </div>
        <main className="flex flex-row mt-5">
          <div className="grid grid-cols-3 gap-3 mt-10 p-4 border border-gray-200">
            <div className="col-span-2 my-2 ">
              <div className="flex items-center justify-end  gap-3 pr-10 pb-5">
                <input
                  type="text"
                  id="table-search"
                  value={searchText}
                  onChange={(e) => setsearchText(e.target.value)}
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Reg Number"
                />

               <CSVLink filename={`List_of_Student_claim-${new Date().toISOString()}.csv`} className="cursor-pointer" data={
                    feature
                      .filter((feature) =>
                        (feature.attributes.reg_number + "").startsWith(
                          searchText
                        )
                      ).map(f => (
                        { ...f.attributes }
                      ))
                  }>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </CSVLink>
              </div>
              <div className="h-96 relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                <table
                  id="myTable"
                  className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Reg Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Serial Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        School
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Owner Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Problem
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Special Other
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Comments
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {feature.map((feature, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {feature?.attributes.reg_number}
                        </td>
                        <th scope="row" className="px-6 py-4 ">
                          {feature?.attributes.serial_number}
                        </th>
                        <td className="px-6 py-4">
                          {feature?.attributes.schools}
                        </td>
                        <td className="px-6 py-4">
                          {" "}
                          {feature?.attributes.name}
                        </td>
                        <td className="px-6 py-4">
                          {feature?.attributes.telephone}
                        </td>
                        <td className="px-6 py-4">
                          {feature?.attributes.email}
                        </td>
                        <td className="px-6 py-4">
                          {feature?.attributes.problems}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(
                            feature?.attributes.traitement_date
                          ).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          {feature?.attributes.commentaire}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-1 overflow-scroll mt-6">
              <div className="w-full h-full">
                <div className="flex gap-2">
                  <div className="w-full py-2 bg-white border">
                    {/* <Pie height="200" data={data2} className="h-full" /> */}
                    {/* <Pie className="h-full" data={myData} /> */}
                    {/* <Doughnut /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Claim;
