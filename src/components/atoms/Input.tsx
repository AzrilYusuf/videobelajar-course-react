import React from "react";
import { InputProps } from "../../interfaces/interfaces";

const Input: React.FC<InputProps> = ({ id, type, name, style, placeholder, handleChange }) => {
  return (
    <input id={id} type={type} name={name} style={style} placeholder={placeholder} onChange={handleChange} required />
  );
};

export default Input;
