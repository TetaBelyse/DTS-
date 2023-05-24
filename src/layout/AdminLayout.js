import React from "react";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="w-screen flex flex-col items-center space-y-2">
      <Navbar />
      <Tabs />
      <div className="w-screen pl-12 pr-12">{children}</div>
    </div>
  );
};

export default AdminLayout;
