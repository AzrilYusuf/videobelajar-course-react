import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
