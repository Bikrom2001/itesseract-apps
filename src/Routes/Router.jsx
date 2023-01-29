import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Common/ErrorPage/ErrorPage";
import AboutMain from "../components/Pages/About/AboutMain/AboutMain";
import ContactUS from "../components/Pages/ContactUS/ContactUS/ContactUS";
import Home from "../components/Pages/Home/Home/Home";
import ProductMain from "../components/Pages/Product/ProductMain/ProductMain";
import Team from "../components/Pages/Team/Team/Team";
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
      {
        path: "/about",
        element: <AboutMain></AboutMain>
      },
      {
        path: "/team",
        element: <Team></Team>
      },
      {
        path: '/contact',
        element: <ContactUS></ContactUS>
      },
      {
        path: "/product",
        element: <ProductMain></ProductMain>
      }
    ],
  },
]);

export default router;
