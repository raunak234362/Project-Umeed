import App from "../App";
import Layout from "../pages/dashboard/layout/Layout";
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
      {
        path: "dashboard",
        element: <Layout />,
      },
    ],
  },
];
export default routes;
