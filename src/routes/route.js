import React from "react";
import { Navigate } from "react-router-dom";

const Authmiddleware = (props) => {
  console.log("Checking authUser in localStorage:", localStorage.getItem("authUser"));
  if (!localStorage.getItem("authUser")) {
    console.log("Navigating to /Prosper");
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return (<React.Fragment>
    {props.children}
  </React.Fragment>);
};

export default Authmiddleware;
