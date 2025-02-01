import { createBrowserRouter } from "react-router-dom";
import CoffeeCards from "../components/CoffeeCards";
import MainLayout from "../layouts/MainLayout";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCards />,
          },
          {
            path: "/category/:category",
            element: <CoffeeCards />,
          },
        ],
      },
      { path: "/coffees", element: <Coffees /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

export default routes;
