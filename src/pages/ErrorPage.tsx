import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../components/atoms/Button";

const ErrorPage = ({
  titleMessage = "Sorry, an unexpected error has occurred.",
  message,
}: {
  titleMessage: string;
  message: string;
}) => {
  const navigate = useNavigate();
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>{titleMessage}</p>
      <p>
        <i>{error?.statusText || error?.message || message}</i>
      </p>
      <Button
        handleClick={() => {
          navigate("/");
        }}
      >
        back
      </Button>
    </div>
  );
};

export default ErrorPage;
