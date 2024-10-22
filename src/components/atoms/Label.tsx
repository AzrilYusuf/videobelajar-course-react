import React from "react";

interface Props {
  htmlFor: string;
  children: string;
}

const Label: React.FC<Props> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor}>
      {children} <span className="red-color">&lowast;</span>
    </label>
  );
};

export default Label;
