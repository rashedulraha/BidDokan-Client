import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/MainLayout/Layouts";
import AllProducts from "../Pages/AllProducts/AllProducts";
import MyProduct from "../Pages/MyProducts/MyProduct";
import MyBids from "../Pages/MyBids/MyBids";
import CreateProducts from "../Pages/CreateProducts/CreateProducts";
import User from "../Layouts/User/User";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";

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
    path: "/user",
    Component: User,
    children: [
      {
        path: "/user",
        Component: Login,
      },
      {
        path: "/user/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
