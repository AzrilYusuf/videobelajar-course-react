import axios from "axios";
import { UserRegisterService } from "../interfaces/service.interface";
const APIendpoint = import.meta.env.VITE_MOCK_API_URL + "/users";

/**
 * @param params for the parameters to be sent to the API
 */

// API endpoints to register users
export const createUser = async (params: UserRegisterService) => {
  return await axios.post(APIendpoint, params);
};

// API endpoints to check if email is registered
export const getUserByEmail = async (email: string) => {
  return await axios.get(APIendpoint, {
    // For keyword search
    params: { email },
    // Set status to validate wether the email is valid
    validateStatus: (status) => status === 200 || status === 404,
  });
};

// API endpoints to check fullname
export const getUserByFullname = async (fullname: string) => {
  return await axios.get(APIendpoint, {
    // For keyword search
    params: { fullname },
    // Set status to validate wether the fullname is valid
    validateStatus: (status) => status === 200 || status === 404,
  });
};

// API endpoints to log in users
export const getUser = async (userId: number) => {
  return await axios.get(`${APIendpoint}/${userId}`);
};
