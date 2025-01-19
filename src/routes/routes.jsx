import App from "../App";
import { Login } from "../pages";
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
        path: "/admin",
        element: <Login />,
      },
    ],
  },
];
export default routes;
