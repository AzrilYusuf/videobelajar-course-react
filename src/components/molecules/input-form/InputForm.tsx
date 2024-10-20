import React from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import Image from "../../atoms/Image";
import { FormTypes } from "../../../interfaces/interfaces";
import ToggleHide from "../../../assets/svg/toggle-hide.svg";

const InputForm: React.FC<FormTypes> = ({
  htmlFor,
  labelValue,
  id,
  inputType,
  inputName,
  isSelect,
  toggleHide,
  handleChange,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label htmlFor={htmlFor} value={labelValue} />
      <div style={{display: "flex", alignItems: "center"}}>
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
            style={{ width: "100%" }}
            handleChange={handleChange}
          />
        </div>
      ) : (
        <Input
          id={id}
          type={inputType}
          name={inputName}
          style={{ flex: "1" }}
          handleChange={handleChange}
        />
      )}
      {toggleHide === true && (
        <button type="button" id="togglePassword" style={{ marginLeft: "8px" }}>
          <Image src={ToggleHide} alt="Toggle-hide-password" />
        </button>
      )}
      </div>
    </div>
  );
};

export default InputForm;