// used in atoms
export interface InputProps {
  id?: string;
  type: string;
  name: string;
  style?: React.CSSProperties;
  handleChange: React.ChangeEventHandler<HTMLInputElement>; // Define the type for handleChange
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

// Used in molecule and organism
export interface FormTypes {
  key: number;
  htmlFor: string;
  labelValue: string;
  id: string;
  inputType: string;
  inputName: string;
  isSelect?: boolean;
  toggleHide?: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

// Used in organism
export interface FormValues {
  fullname: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
}
