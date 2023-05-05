import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";
import { CSVLink } from "react-csv";

const Distribution = () => {
  const [features, setFeature] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [tempId, setTempId] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPost = () => {
      const api = {
        method: "get",
        url: "https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_8e9cae3f320843b3be1c4f254bca2f5b/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson",
      };
      axios(api)
        .then((res) => {
          setFeature(res.data.features);
          console.log("__________", res.data.features, "++++++++++++++++++");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchPost();
  }, []);

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex mb-4 ">
      <div className="grid grid-cols-3 gap-2 m-2 " 
      style={{ height: "80vh" }}>
        <div className="col-span-1 overflow-scroll h-full">
          <iframe
            title="Dashboard"
            width="100%"
            height="100%"
            allowFullScreen
            src="https://survey123.arcgis.com/share/392f6f57676140459b57bf991f665dbc?portalUrl=https://esri-rw.maps.arcgis.com"
          ></iframe>
        </div>
        <div className="col-span-2 overflow-scroll ">
          <div className="flex items-center justify-end  gap-3 pr-10 pb-5">
            <input
              type="text"
              id="table-search"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Reg number"
            />

            <CSVLink
              filename={`List_of_Distribution_Student-${new Date().toISOString()}.csv`}
              className="cursor-pointer"
              data={features
                .filter((feature) =>
                  (feature.attributes.registration_number + "").startsWith(
                    searchText
                  )
                )
                .map((f) => ({ ...f.attributes }))}
            >
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
          <div className="overflow-scroll">
            <table
              id="myTable"
              className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    OBJECTID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Registration Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    School
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Major
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Telephone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Serial Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {features
                .filter((feature) =>
                (feature.attributes.registration_number + "").startsWith(
                  searchText
                )
              )
                .map((feature, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {feature?.attributes.objectid}
                    </td>

                    <th scope="row" className="px-6 py-4 ">
                      {feature?.attributes.registration_number}
                    </th>
                    <td className="px-6 py-4">
                      {feature?.attributes.student_name}
                    </td>
                    <td className="px-6 py-4">{feature?.attributes.school}</td>
                    <td className="px-6 py-4">{feature?.attributes.faculty}</td>
                    <td className="px-6 py-4">
                      {feature?.attributes.telphone}
                    </td>
                    <td className="px-6 py-4">{feature?.attributes.email}</td>
                    <td className="px-6 py-4">
                      {feature?.attributes.bar_code}
                    </td>
                    <td className="px-6 py-4">
                      {new Date(
                        feature?.attributes.CreationDate
                      ).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-red-800 text-white p-2 rounded"
                        onClick={() => {
                          setTempId(feature.attributes.objectid);
                          setData(feature.attributes);
                          setShowModal(true);
                          console.log(
                            "__________________________",
                            feature.attributes.objectid
                          );
                        }}
                      >
                        Detail
                      </button>
                      <Modal
                        setShowModal={setShowModal}
                        showModal={showModal}
                        objid={tempId}
                        data={data}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
