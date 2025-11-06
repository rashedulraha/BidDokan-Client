import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate } from "react-router";
import { BarLoader } from "react-spinners";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center  h-screen z-50 absolute top-0 inset-0 bg-white">
        <BarLoader color="#422ad5" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/account/login"} />;
};

export default PrivetRoute;
