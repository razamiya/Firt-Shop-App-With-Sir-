import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Layout from "../components/Layout/Layout";
import SingleProduct from "../pages/SingleProduct";
import Page404 from "../pages/Page404/Page404";

// Create Broser Router
const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
      {
        path: "/:slug",
        element: <SingleProduct />,
      },
    ],
  },
]);

// export
export default publicRoute;
