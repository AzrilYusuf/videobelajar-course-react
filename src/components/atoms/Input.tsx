import React from "react";
import { InputProps } from "../../interfaces/interfaces";

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  className,
  style,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      className={className}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  );
};

export default Input;
