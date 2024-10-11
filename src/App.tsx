import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import RegisterPage from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
