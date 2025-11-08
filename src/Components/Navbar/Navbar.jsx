import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import {
  FaHome,
  FaBoxOpen,
  FaGavel,
  FaPlusCircle,
  FaBoxes,
  FaCog,
  FaUser,
} from "react-icons/fa";

import Container from "../Container";
import "../../index.css";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { BarLoader } from "react-spinners";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);

  // const displayName = user.displayName || `Guest`;
  const photoURL =
    user?.photoURL ||
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s`;

  const MenuLink = (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8 font-medium text-gray-700 text-base md:text-sm lg:text-base">
        <NavLink
          to={"/"}
          className="flex items-center gap-2 hover:text-primary transition-all">
          <FaHome className="text-primary" />
          Home
        </NavLink>
        <NavLink
          to={"/all-products"}
          className="flex items-center gap-2 hover:text-primary transition-all">
          <FaBoxOpen className="text-primary" />
          All Products
        </NavLink>

        {user && (
          <>
            <NavLink
              to={"/create-products"}
              className="flex items-center gap-2 hover:text-primary transition-all">
              <FaPlusCircle className="text-primary" />
              Create Product
            </NavLink>
          </>
        )}
      </div>
    </>
  );

  const UserAction = (
    <>
      <div className="flex flex-col  items-center  gap-4 font-medium text-gray-700 text-base">
        <NavLink
          to="/my-products"
          className="flex items-center gap-2 hover:text-primary transition-all">
          <FaBoxes className="text-primary" />
          My Products
        </NavLink>
        <NavLink
          to="/profile-page"
          className="flex items-start gap-2 hover:text-primary transition-all">
          <FaUser className="text-primary" />
          My Profile
        </NavLink>
        <NavLink
          to="/settings"
          className="flex items-start gap-2 hover:text-primary transition-all">
          <FaCog className="text-primary" />
          Settings
        </NavLink>
      </div>
    </>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center  h-screen z-50 absolute top-0 inset-0 bg-white">
        <BarLoader color="#422ad5" />
      </div>
    );
  }

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

            <a href="/" className="text-xl font-bold normal-case">
              <span className="text-primary">Bid</span>
              <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
                Dokan
              </span>
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium text-base">
              {MenuLink}
            </ul>
          </div>

          <div className="navbar-end gap-2 ">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                {user ? (
                  <img
                    className="rounded-full border hover:bg-primary hover:text-white transition-all w-12 h-12 cursor-pointer"
                    src={photoURL}
                    alt="user Image"
                  />
                ) : (
                  <Link
                    to="/account/login"
                    className="btn btn-outline btn-primary btn-sm md:btn-md rounded-full px-6 border-2 hover:bg-primary hover:text-white transition-all">
                    Login
                  </Link>
                )}
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-56 p-4 shadow-xl border border-base-300">
                {UserAction}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
