import React from "react";
import ReactDOM from "react-dom";

import AppRoutes from './AppRoutes.js';
class Welcome extends React.Component {  render() {    return <h1>Hello World from React boilerplate</h1>;  }}
ReactDOM.render(<AppRoutes />, document.getElementById("app"));
