import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrPersonalComputer } from "react-icons/gr";
import { FaTruck } from "react-icons/fa";
import { CSVLink } from "react-csv";

const Delivery = () => {
  const token = localStorage.getItem("token");
  // const username = localStorage.getItem("username");

  const [features, setFeature] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [delivery, setDelivery] = useState(0);
  const [po, setPo] = useState(0);

  useEffect(() => {
    const fetchPo = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_565a99c4292149b0ae6b6bd5d9aaebd3/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=%5B%0D%0A+%7B%0D%0A+++%22statisticType%22%3A+%22sum%22%2C%0D%0A++++%22onStatisticField%22%3A+%22Total_number_of_computers%22%2C%0D%0A++++%22outStatisticFieldName%22%3A+%22Total%22%0D%0A+%7D%0D%0A%5D&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=${token}`
        )
        .then((res) => {
          setPo(res.data.features[0].attributes.Total);
          console.log("++++++++++++", res.data.features[0].attributes.Total);
        });
    };

    const fetchDelivery = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_00db1728f1d640ee97e11ad55e1c94ed/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=%5B%0D%0A+%7B%0D%0A+++%22statisticType%22%3A+%22sum%22%2C%0D%0A++++%22onStatisticField%22%3A+%22Total_number_of_computers%22%2C%0D%0A++++%22outStatisticFieldName%22%3A+%22Total%22%0D%0A+%7D%0D%0A%5D&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=${token}`
        )
        .then((res) => {
          setDelivery(res.data.features[0].attributes.Total);
        });
    };
    const fetchRequest = () => {
      axios
        .get(
          `https://services2.arcgis.com/y20RuA5nmE8htWdM/ArcGIS/rest/services/service_00db1728f1d640ee97e11ad55e1c94ed/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=${token}`
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
    fetchRequest();
    fetchDelivery();
    fetchPo();
  }, []);

  return (
    <div style={{ height: "auto" }} className="w-full">
      <div className="flex mb-4 ">
        <div className="w-full bg-gray-200 ">
          <div className="grid w-full grid-cols-2 gap-2 px-2 text-black">
            <div className="flex flex-col items-center w-full  py-3 text-gray-700 bg-white border">
              <p className="text-base">PO/Request</p>
              <div className="flex gap-4 text-5xl font-semibold">
                <GrPersonalComputer />
                {po}
              </div>
            </div>
            <div className="flex flex-col items-center w-full py-3 text-gray-700 bg-white border">
              <p className="text-base">Delivered/Student</p>
              <div className="flex gap-4 text-5xl font-semibold">
                <FaTruck />
                {delivery}
              </div>
            </div>
          </div>
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
                src="https://survey123.arcgis.com/share/ce829ad008ce475b9a9210e1e7f95e61?portalUrl=https://esri-rw.maps.arcgis.com"
              ></iframe>
            </div>

            <div className="col-span-2">
              <div className="flex items-center justify-end  gap-3 pr-10 pb-5 pt-5">
                <input
                  type="text"
                  id="table-search"
                  value={searchText}
                  onChange={(e) => setsearchText(e.target.value)}
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search School"
                />

                <CSVLink
                  filename={`Delivery_list-${new Date().toISOString()}.csv`}
                  className="cursor-pointer"
                  data={features
                    .filter((feature) =>
                      (feature.attributes.school + "").startsWith(searchText)
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
                        Total i5
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Total i7 (8GB)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total i7 (16GB)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features ? (
                      features
                        .filter((feature) =>
                          (feature.attributes.school + "").startsWith(
                            searchText
                          )
                        )
                        .map((feature, index) => (
                          <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <td className="px-6 py-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {feature?.attributes.school}
                            </td>

                            <td className="px-6 py-4 ">
                              {feature?.attributes.total_number_of_computers}
                            </td>
                            <td className="px-6 py-4">
                              {feature?.attributes.specification}
                            </td>
                            <td className="px-6 py-4">
                              {feature?.attributes.specification_i3}
                            </td>
                            <td className="px-6 py-4">
                              {feature?.attributes.specification_i5}
                            </td>
                            <td className="px-6 py-4">
                              {feature?.attributes.specification_i7_8gb}
                            </td>
                            <td className="px-6 py-4">
                              {feature?.attributes.specification_i7_16gb}
                            </td>
                            <td className="px-6 py-4">
                              {feature?.attributes.date}
                            </td>
                          </tr>
                        ))
                    ) : (
                      <button
                        disabled
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          role="status"
                          class="inline w-4 h-4 mr-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                        Loading...
                      </button>
                    )}
                  </tbody>
                </table>
                {/* <DataTable columns={columns} rows={colins} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
