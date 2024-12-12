import React from "react";
import { LabelProps } from "../../interfaces/component.interface";

const Label: React.FC<LabelProps> = ({
  htmlFor,
  className,
  children,
  isRequired,
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}{" "}
      {isRequired == true && <span className="red-color">&lowast;</span>}
    </label>
  );
};

export default Label;
