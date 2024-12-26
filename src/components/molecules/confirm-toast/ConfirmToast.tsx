import React from "react";
import { toast } from "react-toastify";
import Button from "../../atoms/Button";
import { ConfirmToastProps } from "../../../interfaces/component.interface";
import "./ConfirmToast.css";

const ConfirmToast: React.FC<ConfirmToastProps> = ({
  questionText,
  handleConfirm,
}) => {
  return (
    <div className="confirm-toast-container">
      <p className="confirm-toast-message">{questionText}</p>
      <div className="confirm-button-wrapper">
        <Button handleClick={handleConfirm} className="confirm-toast-button">
          Yes
        </Button>
        <Button
          handleClick={() => toast.dismiss()}
          className="confirm-toast-cancel-button"
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default ConfirmToast;
