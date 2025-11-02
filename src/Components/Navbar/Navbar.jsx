import React from "react";
import { Link, NavLink } from "react-router";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import Container from "../Container";
import "../../index.css";

const Navbar = () => {
  const MenuLink = (
    <>
      <div className="flex flex-col gap-3 md:flex-row md:gap-6 lg:gap-8 font-medium text-base text-gray-600">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/all-products"}>AllProducts</NavLink>
        <NavLink to={"/my-products"}>My Products</NavLink>
        <NavLink to={"/my-bids"}>My Bids</NavLink>
        <NavLink to={"/create-products"}>Crate products</NavLink>
      </div>
    </>
  );

  const UserAction = (
    <>
      <Link
        to="/account/login"
        className="btn btn-outline btn-primary btn-sm md:btn-md rounded-full px-6 border-2 hover:bg-primary hover:text-white transition-all">
        Login
      </Link>
      <Link
        to="/account/register"
        className="btn btn-primary btn-sm md:btn-md rounded-full hidden md:flex ">
        Register
      </Link>
    </>
  );
  return (
    <div className="bg-base-100/95 backdrop-blur-sm sticky top-0 z-50 shadow-md border-b border-base-300">
      <Container>
        <div className="navbar  px-2">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <TbLayoutNavbarExpand size={24} className="text-primary" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-56 p-4 shadow-xl border border-base-300">
                {MenuLink}
              </ul>
            </div>

            <Link to="/" className="text-xl font-bold normal-case">
              <span className="text-primary">Bid</span>
              <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
                Dokan
              </span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium text-base">
              {MenuLink}
            </ul>
          </div>

          <div className="navbar-end gap-2 ">{UserAction}</div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
