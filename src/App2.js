import "./App.css";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/pages/Signup";
import Login from "./Components/pages/Login";

function App2() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* Mapping multiple path for one component */}

          {/* Home */}
          {["/", "/login"].map((path) => (
            <Route path={path} element={<Login />} />
          ))}

          {/* Signup */}
          {["/sign-up"].map((path) => (
            <Route path={path} element={<Signup />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App2;
