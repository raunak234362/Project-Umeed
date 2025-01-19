import App from "../App";
import { Login, Layout } from "../pages";
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
    path: "/admin",
    element: <Layout />,
    children: [
      
    ],
  },
  {
    path: "Login",
    element: <Login />,
  },
];
export default routes;
