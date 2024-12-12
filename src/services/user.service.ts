import axios from "axios";
import { UserRegisterService } from "../interfaces/service.interface";
const APIendpoint = import.meta.env.VITE_MOCK_API_URL + "/users";

/**
 * @param params for the parameters to be sent to the API
 */

export const createUser = async (params: UserRegisterService) => {
  return await axios.post(APIendpoint, params);
};

export const checkUserByEmail = async (email: string) => {
  return await axios.get(APIendpoint, {
    // For keyword search
    params: { email },
    // Set status to validate wether the email is valid
    validateStatus: (status) => status === 200 || status === 404,
  })
}
