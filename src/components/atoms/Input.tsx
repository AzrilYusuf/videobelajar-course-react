import React from "react";
import { InputProps } from "../../interfaces/interfaces";

const Input: React.FC<InputProps> = ({ id, type, name, style, handleChange }) => {
  return (
    <input id={id} type={type} name={name} style={style} onChange={handleChange} required />
  );
};

export default Input;
