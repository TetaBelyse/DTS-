import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import Detailss from "../Modal/DetailModal";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Claim = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  // const [selectDedommage, setSelectDedommage] = useState(0);
  // const [selectIndemnises, setSetectIndemnises] = useState(0);

  const [feature, setFeature] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [tempId, setTempId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [total, setTotal] = useState(0);
  const [fixed, setFixed] = useState(0);
  const [received, setReceived] = useState(0);
  const [pending, setPending] = useState(0);
  const [closed, setClosed] = useState(0);

  useEffect(() => {
    const fetchReceived = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_d11617ca0c574916a61ed0717ef43960/FeatureServer/0/query?where=Status%3D%27Received%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=true&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=${token}`
        )
        .then((res) => {
          setReceived(res.data.count);
          // console.log("+++++++", res.data.count);
        });
    };
    const fetchPending = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_d11617ca0c574916a61ed0717ef43960/FeatureServer/0/query?where=Status%3D%27Pending%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=true&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=${token}`
        )
        .then((res) => {
          setPending(res.data.count);
          // console.log("+++++++", res.data.count);
        });
    };
    const fetchfixed = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_d11617ca0c574916a61ed0717ef43960/FeatureServer/0/query?where=Status%3D%27Fixed%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=true&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=${token}`
        )
        .then((res) => {
          setFixed(res.data.count);
          // console.log("+++++++", res.data.count);
        });
    };
    const fetchClose = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_d11617ca0c574916a61ed0717ef43960/FeatureServer/0/query?where=Status%3D%27Close%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=true&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=${token}`
        )
        .then((res) => {
          setClosed(res.data.count);
          // console.log("+++++++", res.data.count);
        });
    };
    const fetchClaim = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_d11617ca0c574916a61ed0717ef43960/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=${token}`
        )
        .then((response) => {
          setFeature(response.data.features);
          console.log("_________");
          console.log(response.data.features);
          console.log("_________");

          if (response.data.features.length > 0) {
            setTotal(response.data.features.length);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchClaim();
    fetchReceived();
    fetchPending();
    fetchfixed();
    fetchClose();
  }, []);

  const data = {
    labels: ["Received", "Pending", "Fixed", "Closed"],
    datasets: [
      {
        data: [received, pending, fixed, closed],
        backgroundColor: ["#ff3300", "#ffff1a", "#0284c7", "#5BBE25"],
      },
    ],
  };

  return (
    <>
      <div>
        <div className="bg-gray-100">
          <div className="m-4 flex-auto"></div>
        </div>

        <div className="w-full bg-gray-400 h-5 mt-4 mb-10">
          <div className="grid w-full grid-cols-3 gap-3 px-2 text-black">
            <div className="flex flex-col items-center w-full  py-3 text-gray-700 bg-white border">
              <p className="text-base font-semibold">Total Issues</p>
              <div className="flex gap-4 text-5xl font-semibold">{total}</div>
            </div>
            <div className="flex flex-col items-center w-full py-3 text-gray-700 bg-white border">
              <p className="text-base font-semibold">Pending Issues</p>
              <div className="flex gap-4 text-5xl font-semibold">{pending}</div>
            </div>
            <div className="flex flex-col items-center w-full py-3 text-gray-700 bg-white border">
              <p className="text-base font-semibold">Fixed Issues</p>
              <div className="flex gap-4 text-5xl font-semibold">{fixed}</div>
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

                <CSVLink
                  filename={`List_of_Student_claim-${new Date().toISOString()}.csv`}
                  className="cursor-pointer"
                  data={feature
                    .filter((feature) =>
                      (feature.attributes.reg_number + "").startsWith(
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
              <div className="h-96 relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                <table
                  id="myTable"
                  className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
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
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Edit Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {feature ? (
                      feature
                        .filter((feature) =>
                          (feature.attributes.reg_number + "").startsWith(
                            searchText
                          )
                        )
                        .map((feature, index) => (
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
                              {feature?.attributes.Status}
                            </td>
                            <td className="px-6 py-4">
                              {new Date(
                                feature?.attributes.dates
                              ).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              {new Date(
                                feature?.attributes.EditDate
                              ).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <button
                                className="bg-red-800 text-white p-2 rounded"
                                onClick={() => {
                                  setShowModal(true);
                                  console.log(
                                    "_____",
                                    feature?.attributes.OBJECTID
                                  );
                                  setTempId(feature?.attributes.OBJECTID);
                                }}
                              >
                                modify
                              </button>
                              <Detailss
                                setShowModal={setShowModal}
                                showModal={showModal}
                                objid={tempId}
                              />
                            </td>
                          </tr>
                        ))
                    ) : (
                      <p>loading</p>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-1 overflow-scroll mt-6">
              <div className="w-full h-full">
                <div className="flex gap-2">
                  <div className="w-full py-2 bg-white border">
                    <Pie className="h-full" data={data} dataKey="value" label />
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
