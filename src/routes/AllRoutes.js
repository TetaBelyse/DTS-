import React, { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Request from "../pages/request";
import Delivery from "../pages/delivery";
import Distribution from "../pages/distribution";
import Claim from "../pages/claim";
import Dashboard from "../pages/dashboard";
import SignIn from "../Authentications/SignIn";

const AllRoutes = () => {
  const [lusername, setLusername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: "",
    error: {
      error: false,
      message: "",
    },
    token: "",
  });

  const handleCloseAlert = () => {
    setState({ ...state, error: { message: "", error: false } });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSignout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const { username, password } = state;
    const qs = require("qs");
    const info = qs.stringify({
      username: username,
      password: password,
      referer: "https://geodata.arpce.cg/portal",
      "expiration ": "36000",
      client: "https://geodata.arpce.cg/portal",
    });

    const method = "post";
    const url = "https://geodata.arpce.cg/portal/sharing/generateToken?f=json";
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const { data } = await axios({ method, headers, url, data: info });
    if (data.error) {
      setState({
        ...state,
        error: { message: data?.error?.details[0], error: true },
      });
      setIsLoading(false);
    } else {
      setLusername(username);
      localStorage.setItem("token", data?.token);
      localStorage.setItem("username", username);
      setState({ ...state, token: data?.token });
      setIsLoading(false);
      window.location.href = "/dashboard/colis";
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SignIn
            state={state}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCloseAlert={handleCloseAlert}
          />
        }
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            state={state}
            token={state.token}
            handleSignout={handleSignout}
          />
        }
      />
      <Route
        path="/request"
        element={<Request handleSignout={handleSignout} />}
      />
      <Route
        path="/delivery"
        element={<Delivery handleSignout={handleSignout} />}
      />
      <Route
        path="/distribution"
        element={<Distribution handleSignout={handleSignout} />}
      />
      <Route path="/claim" element={<Claim handleSignout={handleSignout} />} />
    </Routes>
  );
};

export default AllRoutes;
