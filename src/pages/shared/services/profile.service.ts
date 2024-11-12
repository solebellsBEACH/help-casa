import { AxiosResponse } from "axios";
import { apiInstance } from "../api/axios";
import { Employee, Employer } from "../entities/Users";
import { UpdateProfileDTO } from "../dtos/profile";

// Função para buscar o usuário por e-mail, podendo ser Employee ou Employer
async function getUserByEmail(
  email: string
): Promise<AxiosResponse<Employee | Employer>> {
  try {
    const response = await apiInstance.get(`/Profile/user/${email}`);
    return response;
  } catch (error) {
    console.error("Erro ao obter usuário por e-mail:", error);
    throw error;
  }
}

async function updateProfile(
  data: UpdateProfileDTO
): Promise<AxiosResponse<void>> {
  try {
    const response = await apiInstance.put("/Profile/user/update", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    throw error;
  }
}

export const ProfileService = {
  getUserByEmail,
  updateProfile,
};
