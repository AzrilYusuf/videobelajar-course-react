import React from "react";

interface Props {
  htmlFor: string;
  value: string;
}

const Label: React.FC<Props> = ({ htmlFor, value }) => {
  return (
    <label htmlFor={htmlFor}>
      {value} <span className="red-color">&lowast;</span>
    </label>
  );
};

export default Label;
