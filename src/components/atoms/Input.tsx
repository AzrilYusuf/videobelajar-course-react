import React from "react";

interface Props {
  id: string;
  type: string;
  name: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>; // Define the type for handleChange
}

const Input: React.FC<Props> = ({ id, type, name, handleChange }) => {
  return (
    <input id={id} type={type} name={name} onChange={handleChange} required />
  );
};

export default Input;
