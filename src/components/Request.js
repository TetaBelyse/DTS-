import React, { useState, useEffect } from "react";
import axios from "axios";

// import { CSVLink } from "react-csv";

const Request = () => {
  const token = localStorage.getItem("token");
  // const username = localStorage.getItem("username");

  const [features, setFeature] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    const fetchRequest = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_565a99c4292149b0ae6b6bd5d9aaebd3/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=${token}`
        )
        .then((response) => {
          setFeature(response.data.features);
          console.log(response.data.features);
          console.log("___________________________");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchRequest();
  }, [token]);

  return (
    <div style={{ height: "auto" }} className="w-full">
      <div className="flex mb-4 ">
        <div className="w-full bg-gray-200 ">
          <div
            className="grid grid-cols-3 gap-2 m-1"
            style={{ height: "80vh" }}
          >
            <div className="col-span-1 overflow-scroll">
              <iframe
                title="Dashboard"
                width="100%"
                height="100%"
                allowFullScreen
                src={`https://survey123.arcgis.com/share/bc45dd156a764d88bab7fd77d32dda9d?portalUrl=https://esri-rw.maps.arcgis.com`}
              ></iframe>
            </div>

            <div className="col-span-2 overflow-scroll">
              <div className="flex items-center justify-end  gap-3 pr-10 pb-5 pt-5">
                <input
                  type="text"
                  id="table-search"
                  value={searchText}
                  onChange={(e) => setsearchText(e.target.value)}
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search School"
                />

                {/* <CSVLink filename={`school-${new Date().toISOString()}.csv`} className="cursor-pointer" data={
                    features
                      .filter((feature) =>
                        (feature.attributes.school + "").startsWith(
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
                  </CSVLink> */}
              </div>

              <table
                id="myTable"
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-bold">
                      School Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold">
                      Total Computer
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold">
                      Computer Specification
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold">
                      Total i3
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold">
                      Total i7 (8GB)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total i7 (16GB)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total i7 (16GB)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features ? (
                    features.map((feature, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4">
                          {feature?.attributes.School}
                        </td>
                        <td className="px-6 py-4">
                          {feature?.attributes.Total_number_of_computers}
                        </td>
                        <td className="px-6 py-4 ">
                          {feature?.attributes.Specification}
                        </td>
                        <td className="px-6 py-4">
                          {feature?.attributes.specifation_i3}
                        </td>
                        <td className="px-6 py-4">
                          {feature?.attributes.specifation_i5}
                        </td>
                        <td className="px-6 py-4">
                          {feature?.attributes.specifation_i7_8GB}
                        </td>
                        <td className="px-6 py-4">
                          {feature?.attributes.specifation_i7_16GB}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p>loading</p>
                  )}
                </tbody>
              </table>
              {/* <DataTable columns={columns} rows={colins} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
