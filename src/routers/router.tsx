import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/templates/AuthLayout";
import HomeLayout from "../components/templates/HomeLayout";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
