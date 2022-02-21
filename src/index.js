import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App2 from "./App2";
import reportWebVitals from "./reportWebVitals";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
// import { StrictMode } from "react";
// import GetUserDetails from "./Components/pages/getUserDetails";
import Routr from "./Components/Router";

Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <App2 />
    {/* <GetUserDetails /> */}
    {/* <Routr /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
