import React from "react";
import { InputProps } from "../../interfaces/component.interface";

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  inputMode,
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
      inputMode={inputMode}
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
