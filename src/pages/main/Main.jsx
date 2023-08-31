import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/home/Home.jsx";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
