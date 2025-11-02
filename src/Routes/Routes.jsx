import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/MainLayout/Layouts";
import AllProducts from "../Pages/AllProducts/AllProducts";
import MyProduct from "../Pages/MyProducts/MyProduct";
import MyBids from "../Pages/MyBids/MyBids";
import CreateProducts from "../Pages/CreateProducts/CreateProducts";
import Home from "../Pages/Home/Home";

import Account from "../Layouts/Account/Account";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ForgotPassword from "../Pages/Forgot/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/all-products",
        Component: AllProducts,
      },
      {
        path: "my-products",
        Component: MyProduct,
      },
      {
        path: "my-bids",
        Component: MyBids,
      },
      {
        path: "create-products",
        Component: CreateProducts,
      },
    ],
  },
  {
    path: "/account",
    Component: Account,
    children: [
      {
        path: "/account/login",
        Component: Login,
      },
      {
        path: "/account/register",
        Component: Register,
      },
      {
        path: "/account/forgot-password",
        Component: ForgotPassword,
      },
    ],
  },
]);

export default router;
