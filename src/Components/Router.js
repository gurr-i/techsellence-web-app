import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GetUserDetails from "./pages/getUserDetails";
import App1 from "../App";

function Routr() {
  return (
    <>
      <Router>
        <Routes>
          {/* Mapping multiple path for one component */}

          {/* Home */}
          {["/"].map((path) => (
            <Route path={path} element={<GetUserDetails />} />
          ))}
          {/* Home */}
          {["/home"].map((path) => (
            <Route path={path} element={<App1 />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default Routr;
