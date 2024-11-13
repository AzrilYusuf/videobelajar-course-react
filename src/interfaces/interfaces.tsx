// used in atoms
export interface InputProps {
  id?: string;
  type: string;
  name: string;
  style?: React.CSSProperties;
  placeholder?: string;
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
  labelChildren: string;
  id: string;
  inputType: string;
  inputName: string;
  isSelect?: boolean;
  toggleHide?: boolean;
  placeholder?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface FooterList {
  target: string;
  pChildren: React.ReactNode;
  id: string;
  ulChildren: React.ReactNode;
}

// Used in organism
export interface FormValues {
  fullname: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
}

// Used in organism
export interface Cards {
  id: number;
  image: string;
  title: string;
  description: string;
  tutorImage: string;
  tutorName: string;
  tutorPosition: string;
  rating: string;
  price: string;
}

// Used in UserProfile
export interface UserProfile {
  fullname: string;
  email: string;
  phone_number: string;
}