import App from "../App";

import { Login, Layout, Portfolio, Skills, Profile, Blog } from "../pages";
import Home from "../pages/landing/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
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
        path: "skills",
        element: <Skills />,
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
];
export default routes;
