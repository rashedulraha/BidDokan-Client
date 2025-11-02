import React from "react";
import Container from "../Container";
import { Link, NavLink } from "react-router";
import "../../index.css";

const Navbar = () => {
  const MenuLink = (
    <>
      <div className="flex items-center space-x-5 font-medium text-base md:text-lg  ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/all-products"}>All Products</NavLink>
        <NavLink to={"/my-products"}>My Products</NavLink>
        <NavLink to={"/my-bids"}>My Bids</NavLink>
        <NavLink to={"/create-products"}>Create Products</NavLink>
      </div>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {MenuLink}
              </ul>
            </div>
            <a className="text-xl font-bold">
              Bid{" "}
              <span className=" bg-clip-text text-transparent bg-green-500">
                Dokan
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{MenuLink}</ul>
          </div>
          <div className="navbar-end space-x-4">
            <Link to={"/user"} className="btn">
              Login
            </Link>
            <Link to={"/user/register"} className="btn">
              Register
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
