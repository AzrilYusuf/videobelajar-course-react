import { create } from "zustand";
import { AuthState} from "../interfaces/component.interface";

export const useAuthStore = create<AuthState>((set, get) => ({
  fullname: "",
  email: "",
  phone_number: "",
  setUserData: (data) => {
    set(() => ({
      fullname: data.fullname,
      email: data.email,
      phone_number: data.phone_number,
    }));
    localStorage.setItem(
      "user",
      JSON.stringify(data.fullname)
    );
    localStorage.setItem("isLoggedIn", "true");
  },
  getUserData: () => {
    const storedUserData = get();
    return storedUserData;
  }
  // login: () => {
  //   const { email, password } = get();
  //   const storedProfile = localStorage.getItem("userProfile");
  //   if (storedProfile) {
  //     const { email: storedEmail, password: storedPassword } =
  //       JSON.parse(storedProfile);
  //     if (email === storedEmail && password === storedPassword) {
  //       localStorage.setItem("isLoggedIn", "true");
  //       return true;
  //     }
  //   }
  //   return false;
  // },
}));
