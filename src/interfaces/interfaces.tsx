export interface FormTypes {
    htmlFor: string;
    labelValue: string;
    id: string;
    inputType: string;
    inputName: string;
    isSelect?: boolean;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
  }