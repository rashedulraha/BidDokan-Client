import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import Container from "../Container";
import "../../index.css";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  // const displayName = user.displayName || `Guest`;
  const photoURL =
    user?.photoURL ||
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s`;

  const MenuLink = (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8 font-medium text-gray-700 text-base md:text-sm lg:text-base">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/all-products"}>AllProducts</NavLink>
        <NavLink to={"/my-bids"}>My Bids</NavLink>

        {user && (
          <>
            <NavLink to={"/create-products"}>Crate product</NavLink>
            <NavLink to={"/my-products"}>My Products</NavLink>
          </>
        )}
      </div>
    </>
  );

  const UserAction = user ? (
    <>
      <Link
        to="/profile-page"
        className="rounded-full border hover:bg-primary hover:text-white transition-all">
        <img
          src={photoURL}
          alt="Profile"
          className="w-12 h-12 rounded-full border-4 border-white"
        />
      </Link>
    </>
  ) : (
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

          <div className="navbar-end gap-2 ">{UserAction}</div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
