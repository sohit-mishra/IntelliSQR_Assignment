import axiosInstance from "@/config";
import { LoginUserModel } from "@/models/login.model";


export async function LoginUser(UserData:LoginUserModel) {
  try {
    const response = await axiosInstance.post(`/users/register`, UserData);
    return response.data;
  } catch (error) {
    return error;
  }
}