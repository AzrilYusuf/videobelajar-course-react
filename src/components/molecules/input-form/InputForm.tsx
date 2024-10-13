import React from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import { FormTypes } from "../../../interfaces/interfaces";

const InputForm: React.FC<FormTypes> = ({
  htmlFor,
  labelValue,
  id,
  inputType,
  inputName,
  isSelect,
  handleChange,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label htmlFor={htmlFor} value={labelValue} />
      {isSelect === true ? (
        <div className="pnumber-select">
          <select id="phoneNumber" name="phone-number">
            <option value="1">+62</option>
            <option value="2">+63</option>
            <option value="3">+64</option>
            <option value="4">+65</option>
          </select>
          {/* <input
            style={{ width: "100%" }}
            type={inputType}
            name={inputName}
            handleChange={handleChange}
            required
          /> */}
          <Input
            id={id}
            type={inputType}
            name={inputName}
            handleChange={handleChange}
          />
        </div>
      ) : (
        <Input
          id={id}
          type={inputType}
          name={inputName}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default InputForm;
