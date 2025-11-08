import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/MainLayout/Layouts";
import AllProducts from "../Pages/AllProducts/AllProducts";
import MyProduct from "../Pages/MyProducts/MyProduct";
import CreateProducts from "../Pages/CreateProducts/CreateProducts";
import Home from "../Pages/Home/Home";

import Account from "../Layouts/Account/Account";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ForgotPassword from "../Pages/Forgot/ForgotPassword";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ProductsDetails from "../Pages/ProductDetails/ProductsDetails";
import UpdateProducts from "../Pages/UpdateProducts/UpdateProducts";
import ErrorPage from "../Pages/Err/ErrorPage";
import Settings from "../Pages/Settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", Component: Home },
      {
        path: "/all-products",
        element: (
          <PrivetRoute>
            <AllProducts />
          </PrivetRoute>
        ),
      },

      {
        path: "create-products",
        element: (
          <PrivetRoute>
            <CreateProducts />
          </PrivetRoute>
        ),
      },
      {
        path: "update-products/:_id",
        element: (
          <PrivetRoute>
            <UpdateProducts />
          </PrivetRoute>
        ),
      },
      {
        path: "/profile-page",
        element: (
          <PrivetRoute>
            <ProfilePage />
          </PrivetRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivetRoute>
            <Settings />
          </PrivetRoute>
        ),
      },
      {
        path: "/profile-page",
        element: (
          <PrivetRoute>
            <ProfilePage />
          </PrivetRoute>
        ),
      },
      { path: "my-products", Component: MyProduct },
      { path: "product-details/:id", Component: ProductsDetails },
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
