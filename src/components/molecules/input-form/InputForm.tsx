import React, { useState } from "react";
import { FormTypes } from "../../../interfaces/component.interface";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import Image from "../../atoms/Image";
import ToggleShow from "../../../assets/svg/toggle-show.svg";
import ToggleHide from "../../../assets/svg/toggle-hide.svg";

const InputForm: React.FC<FormTypes> = ({
  htmlFor,
  labelChildren,
  id,
  inputType,
  inputName,
  inputMode,
  isSelect,
  toggleHide,
  placeholder,
  value,
  handleChange,
  checked,
  isRequired,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label
        htmlFor={htmlFor}
        children={labelChildren}
        isRequired={isRequired}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        {isSelect === true ? (
          <div className="pnumber-select" style={{ width: "100%" }}>
            <select id={id} name="phone-number">
              <option value="1">+62</option>
              <option value="2">+63</option>
              <option value="3">+64</option>
              <option value="4">+65</option>
            </select>
            <Input
              id={id}
              type={inputType}
              name={inputName}
              inputMode={inputMode}
              style={{ width: "100%" }}
              placeholder={placeholder}
              value={value}
              handleChange={handleChange}
              isRequired={isRequired}
              />
          </div>
        ) : (
          <Input
            id={id}
            type={
              isPasswordVisible && inputType === "password" ? "text" : inputType
            }
            name={inputName}
            style={{ flex: "1" }}
            placeholder={placeholder}
            value={value}
            handleChange={handleChange}
            checked={checked}
            isRequired={isRequired}
          />
        )}
        {toggleHide === true && (
          <button
            type="button"
            id="togglePassword"
            style={{ marginLeft: "8px" }}
            onClick={handleTogglePassword}
          >
            <Image
              src={isPasswordVisible ? ToggleHide : ToggleShow}
              alt={isPasswordVisible ? "Hide password" : "Show password"}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputForm;
