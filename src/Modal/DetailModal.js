// import axios from "axios";
import React, { useState } from "react";

export default function ModalComponent({ showModal, setShowModal, objid }) {
  const [selectDate, setSelectDate] = useState("");
  const [selectTraitemnet, setSelectTraitemnet] = useState("");

  const handSubmit = () => {
    var myHeaders = new Headers();
    // myHeaders.append("Cookie", "AGS_ROLES=vOFRhNO3JttnRuR1Vry9Ypwkvh4y89MAVVXvJBryltkUhymsjywuPXrE0ytBkIiFQl2CjngesmgbWDRt49pB8BsvNWXqu+hJ7OWyiP4wK3wX7B2SM0iTFBk5P4eWzXBu");

    // var myDate: any = new Date();
    // var myEpoch: any = myDate.getTime() / 1000.0;
    // setSelectDate(myEpoch)
    // console.log(objid, selectTraitemnet, selectTraitemnet2, selectDate)
    /////////////////////////////////////////////////////////

    var formdata = new FormData();
    formdata.append(
      "updates",
      `[{\"attributes\":{\"OBJECTID\":${objid},\"traitement_reclamation\":\"${selectTraitemnet}\",\"traitement_date\":${selectDate}}}]`
    );
    formdata.append("f", "pjson");
    formdata.append("", "");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://geodata.arpce.cg/server/rest/services/livraison_colis/FeatureServer/2/applyEdits?token=i_K6hE6LH6WkSwss3aKp_SATeyzMUm-WV3Kp6XnMPrbdrK5FZeqef7j0NlJ2NfkGGUkdAYkfvjAwyebO4z_bNNqwY9Bj457h9zdl6zOCc5AUNCBiIlp-wjo4ca2epyxmUJRUXKVA0AIbUg4UigIb_zaHyfhsvUxSlsEihjtlWPXaY8ux2k5oxkc4WlFKHMbOZe6o786g3Aut-c6aFrZ6Vw..",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* {/content/} */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* {/header/} */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-gray-600 font-semibold">
                    Modify the status
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-red-500 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-500 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* {/body/} */}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-gray-600 font-semibold text-lg leading-relaxed">
                    Etat de traitement de réclamation
                  </p>

                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="1"
                      type="radio"
                      value="dedommage"
                      name="radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={(e) => {
                        e.target.value === ""
                          ? setSelectTraitemnet("")
                          : setSelectTraitemnet(e.target.value);
                        // console.log("____________", selectTraitemnet);
                        // console.log("the id---------------------", objid)
                      }}
                    />
                    <label
                      htmlFor="dedommage"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Pending
                    </label>
                  </div>
                  <div className="flex items-center pl-4 my-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="2"
                      type="radio"
                      value="indemnise"
                      name="radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={(e) => {
                        e.target.value === ""
                          ? setSelectTraitemnet("")
                          : setSelectTraitemnet(e.target.value);
                        // console.log("____________", selectTraitemnet);
                      }}
                    />
                    <label
                      htmlFor="indemnise"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Fixed
                    </label>
                  </div>
                  <div className="relative p-4 flex-auto ml-1">
                    <p className="my-4 text-slate-500 text-gray-600 font-semibold text-lg leading-relaxed">
                      Change the date
                    </p>
                    <div className="relative max-w-sm">
                      <div className=" w-full">
                        <div className="">
                          <input
                            type="date"
                            className="form-control w-full px-3 py-2 text-base font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Select a date"
                            // value={filterByDate}
                            onChange={(e) => {
                              // var myDate: any = new Date();
                              // var myEpoch: any = myDate.getTime() / 1000.0;
                              // setSelectDate(myEpoch);
                              e.target.value === ""
                                ? setSelectDate("")
                                : setSelectDate(e.target.value);
                              console.log("__________________", selectDate);
                            }}
                          />

                          <button
                            className="datepicker-toggle-button"
                            data-mdb-toggle="datepicker"
                          >
                            <i className="fas fa-calendar datepicker-toggle-icon"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {/footer/} */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      console.log(
                        "______________________",
                        selectTraitemnet,
                        selectDate
                      );
                      handSubmit();
                      setShowModal();
                    }}
                  >
                    Comfirm
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
}
