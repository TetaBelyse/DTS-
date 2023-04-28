import React, { useEffect, useState } from "react";
import axios from "axios";

export const ModalComponents = ({ showModal, setShowModal, objid, data }) => {
  //   const token = localStorage.getItem("token");
  //   const username = localStorage.getItem("username");

  const baseUrl = `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_8e9cae3f320843b3be1c4f254bca2f5b/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson`;

  const [selectData, setSelectData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  var tr = "";
  const fetchData = () => {
    axios(baseUrl).then((res) => {
      tr = res.data.features[0].attributes;
      setSelectData(res.data.features[0].attributes);
      console.log("+++++++++++++++++++", res.data.features[0].attributes);
        console.log("___________________", tr);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let handler = () => {
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center overflow-y-auto fixed inset-0 z-50 ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className=" border-0 rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white ">
                <div className="flex items-start justify-between p-2 pl-6 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-center text-3xl text-gray-600 font-semibold">
                    Student Invoice
                  </h3>
                </div>
                <button onClick={() => window.print()}>
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
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                    />
                  </svg>
                </button>

                <div className="flex p-2 pl-6 w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex  pt-3">
                      <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                        Names:{" "}
                      </dt>
                      <dd className="text-md text-gray-900 font-semibold">
                        {data?.student_name}
                      </dd>
                    </div>
                    <div className="flex  pt-3">
                      <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                        Registration Number:{" "}
                      </dt>
                      <dd className="text-md text-gray-900 font-semibold">
                        {data?.registration_number}
                      </dd>
                    </div>
                    <div className="flex md:flex-row pt-3">
                      <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                        School:{" "}
                      </dt>
                      <dd className="text-md text-gray-900 font-semibold">
                        {data?.school}
                      </dd>
                    </div>
                    <div className="flex  pt-3">
                      <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                        faculty:{" "}
                      </dt>
                      <dd className="text-md text-gray-900 font-semibold">
                        {data?.faculty}
                      </dd>
                    </div>
                    <div className="flex  pt-3">
                      <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                        Telephone:{" "}
                      </dt>
                      <dd className="text-md text-gray-900 font-semibold">
                        {data?.telphone}
                      </dd>
                    </div>
                    <div className="flex  pt-3">
                      <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                        Email:{" "}
                      </dt>
                      <dd className="text-md text-gray-900 font-semibold">
                        {data?.email}
                      </dd>
                    </div>
                    <div className="flex  pt-3">
                      <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                        Serial Number:{" "}
                      </dt>
                      <dd className="text-md text-gray-900 font-semibold">
                        {data?.bar_code}
                      </dd>
                    </div>

                    <div className="flex  pt-3">
                      <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                        Date:{" "}
                      </dt>
                      <dd className="text-md text-gray-900 font-semibold">
                        {new Date(data?.CreationDate).toLocaleDateString()}
                      </dd>
                    </div>
                    <div className="flex  pt-3">
                      <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                        Signature:{" "}
                      </dt>
                      <dd className="text-md text-gray-900 font-semibold"></dd>
                    </div>
                  </dl>
                </div>
                <div
                  className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <button
                    className="text-grey-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalComponents;
