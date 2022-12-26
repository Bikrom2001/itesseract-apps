import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Common/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
