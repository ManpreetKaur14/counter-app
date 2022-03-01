import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import React, { Component } from "react";

import App from "./App";
import Counter from "./components/counter";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<Counter />, document.getElementById("root"));
reportWebVitals();
