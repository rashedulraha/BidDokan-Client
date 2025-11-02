import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }

  return <Navigate to={"/account/login"} />;
};

export default PrivetRoute;
