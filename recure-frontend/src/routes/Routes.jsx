import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Department from "../pages/Department/Department";
import Medicine from "../pages/Department/Medicine/Medicine";
import Orthopedics from "../pages/Department/Orthopedics/Orthopedics";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Gastroenterology from "../pages/Department/Gastroenterology/Gastroenterology";
import Cardiology from "../pages/Department/Cardiology/Cardiology";
import PhyMedicine from "../pages/Department/Physical Medicine/PhyMedicine";
import Neurology from "../pages/Department/Neurology/Neurology";
import Payment from "../pages/Payment/Payment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/appointment",
        element: <PrivateRoute><Appointment></Appointment></PrivateRoute> ,
      },
        // DEPARTMENT AND DOCTOR 
      {
        path: "/departments",
        element: <Department></Department>,
      },
      {
        path: "/medicine",
        element: <Medicine></Medicine>,
      },
      {
        path: "/orthopedics",
        element: <Orthopedics></Orthopedics>,
      },
      {
        path: "/cardiology",
        element: <Cardiology></Cardiology>,
      },
      {
        path: "/Neurology",
        element: <Neurology></Neurology>,
      },
      {
        path: "/Gastroenterology",
        element: <Gastroenterology></Gastroenterology>,
      },
      {
        path: "/physical Medicine",
        element: <PhyMedicine></PhyMedicine>,
      },
    ],
  },
]);

export default router;
