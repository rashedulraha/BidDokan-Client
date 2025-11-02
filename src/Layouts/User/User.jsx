import React from "react";
import { Outlet } from "react-router";
import Container from "../../Components/Container";

const User = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default User;
