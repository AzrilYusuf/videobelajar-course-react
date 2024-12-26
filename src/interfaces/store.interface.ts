// userStore
export interface UserData {
  id?: number;
  fullname: string;
  email: string;
  phone_number: string;
  password?: string;
  avatar_url?: string;
  role?: string;
}

export interface UserStoreState {
  id?: number;
  fullname: string;
  email: string;
  phone_number: string;
  avatar_url?: string;
  role: string;
  setUserData: (data: UserData) => void;
  getUserData: () => UserData;
  clearUserData: () => void;
}

// adminStore
export interface AdminStoreState {
  role: string;
  allAdmins: UserData[];
  allUsers: UserData[];
  setAllAdmins: (data: UserData[]) => void;
  setAllUsers: (data: UserData[]) => void;
  removeAdmin: (userId: number) => void;
  removeUser: (userId: number) => void;
}
