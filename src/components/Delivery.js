import React from "react"

const Delivery= () => {
    return (
        <div style={{ height: "auto" }} className="w-full">
        <div className="flex mb-4 ">
          <div className="w-full bg-gray-200 ">
            <div className="grid w-full grid-cols-2 gap-2 px-2 text-black">
              <div className="flex flex-col items-center w-full  py-3 text-gray-700 bg-white border">
                <p className="text-base">PO</p>
                <div className="flex gap-4 text-7xl font-semibold">
                  {/* <GrDocumentText className="text-gray-700" />
                  {entransitStatus +
                    livreClientStatus +
                    livreStatus +
                    enregistreStatus} */}
                </div>
              </div>
              <div className="flex flex-col items-center w-full py-3 text-gray-700 bg-white border">
                <p className="text-base">Delivered</p>
                <div className="flex gap-4 text-7xl font-semibold">
                  {/* <RiStockFill className="text-gray-700" />
                  {enregistreStatus} */}
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
                  src="https://survey123.arcgis.com/share/5446d366f15e4ffcb16ce2b6e60982f4?portalUrl=https://esri-rw.maps.arcgis.com"
                ></iframe>
              </div>

              <div className="col-span-2 overflow-scroll">
                <div className="flex items-center justify-end  gap-3 pr-10 pb-5 pt-5">


                  <input
                    type="text"
                    id="table-search"
                    // value={searchText}
                    // onChange={(e) => setsearchText(e.target.value)}
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search School"
                  />


                  {/* <CSVLink filename={`traitement-${new Date().toISOString()}.csv`} className="cursor-pointer" data={
                    features
                      .filter((feature) =>
                        (feature.attributes.School + "").startsWith(
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
                    
                        <tr
                          // key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="px-6 py-4">
                            {/* {feature?.attributes.School} */}
                          </td>
  
                          <td className="px-6 py-4 ">
                            {/* {feature?.attributes.Total_number_of_computers} */}
                          </td>
                          <td className="px-6 py-4">
                            {/* {feature?.attributes.Specification} */}
                          </td>
                          <td className="px-6 py-4">
                            {/* {feature?.attributes.specifation_i3} */}
                          </td>
                          <td className="px-6 py-4">
                            {/* {feature?.attributes.specifation_i5} */}
                          </td>
                          <td className="px-6 py-4">
                            {/* {feature?.attributes.specifation_i7_8GB} */}
                          </td>
                          <td className="px-6 py-4">
                            {/* {feature?.attributes.specifation_i7_16GB} */}
                          </td>
                      <td className="px-6 py-4">
                            {/* {feature?.attributes.CreationDate} */}
                          </td>


                        </tr>
                      {/* ))} */}
                  </tbody>
                </table>
                {/* <DataTable columns={columns} rows={colins} /> */}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
}

export default Delivery