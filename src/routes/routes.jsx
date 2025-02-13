import Layout from "../pages/landing/layout";
import ErrorHandling from "../components/ErrorHandling";

import {
  Login,
  Portfolio,
  Profile,
  Blog,
  DashboardMission,
  Gallery,
} from "../pages";
import Home from "../pages/landing/Home";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
  {
    path: "/admin", //for admin dashboard
    element: <Layout />,
    children: [
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "mission",
        element: <DashboardMission />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ], //for admin dashboard children
  },
  {
    path: "Login", //for login page
    element: <Login />,
  },
  { path: "*", element: <ErrorHandling /> },
];
export default routes;
