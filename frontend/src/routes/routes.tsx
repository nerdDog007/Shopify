import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/LandingPage/Home";
import SignUp from "../pages/LandingPage/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <SignUp />,
  },
]);

export default router;