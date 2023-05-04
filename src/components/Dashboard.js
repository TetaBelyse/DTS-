import React from "react";

const Dashboard = () => {
  return <div>
   <div
        style={{ height: "80vh" }}
        className='col-span-1 overflow-scroll h-full'>
        <iframe
          title="Dashboard"
          width="100%"
          height="100%"
          allowFullScreen
          src="https://esri-rw.maps.arcgis.com/apps/dashboards/index.html#/bc92f8d871564c74848de484f583befb"
          
        ></iframe>
      </div> 
  </div>;
};

export default Dashboard;
