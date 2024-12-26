import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";
import { ToastContainer } from "react-toastify";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
