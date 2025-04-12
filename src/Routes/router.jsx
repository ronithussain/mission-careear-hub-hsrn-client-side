import {
    createBrowserRouter,
  } from "react-router-dom";
  
import MailLayout from "../Layout/MailLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Service from "../Pages/Service/Service";
import Worker from "../Pages/Worker/Worker";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MailLayout/>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/aboutUs',
            element: <PrivateRoute><AboutUs/></PrivateRoute>
        },
        {
            path: '/service',
            element: <Service/>
        },
        {
            path: '/worker',
            element: <Worker/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/signUp',
            element: <Register/>
        },
      ]
    },
  ]);