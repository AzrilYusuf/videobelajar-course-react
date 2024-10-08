import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import RegisterPage from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
