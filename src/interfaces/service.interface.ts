export enum Role {
  Admin = "admin",
  User = "user",
}

export interface UserRegisterService {
  id?: number;
  fullname: string;
  email: string;
  phone_number: string;
  password: string;
  role: Role;
}

export interface UserUpdateService {
  fullname: string;
  email: string;
  phone_number: string;
}