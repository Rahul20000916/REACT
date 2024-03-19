//OLD METHOD
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <h1>what to show it and where to show it</h1>,
  document.getElementById("root")
);

var h1 = document.createElement("h1");
h1.innerHTML = " hello world";
document.getElementById("root").appendChild(h1);


//NEW METHOD

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <>
    <h1>heading</h1>
    <p>paragraph</p>
    </>,
    document.getElementById("root")
);