import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/LandingPage/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;