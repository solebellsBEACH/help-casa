import { AxiosResponse } from "axios";
import { apiInstance } from "../api/axios";
import { ForgotPasswordDto, LoginFormDto, RegisterFormDto } from "../dtos/auth";

async function onRegister(
  formData: RegisterFormDto
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<AxiosResponse<any, any> | undefined> {
  try {
    const response = await apiInstance.post("/auth/register", formData);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function onLogin(
  formData: LoginFormDto
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<AxiosResponse<any, any> | undefined> {
  try {
    const response = await apiInstance.post("/auth/login", formData);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Função para solicitar o envio de um link de redefinição de senha
async function sendForgotPasswordLink(
  forgotPasswordDto: ForgotPasswordDto
): Promise<AxiosResponse<{ message: string }>> {
  try {
    const response = await apiInstance.post(
      `/Auth/forgot-password`,
      forgotPasswordDto
    );
    return response;
  } catch (error) {
    console.error("Erro ao enviar link de redefinição de senha:", error);
    throw error;
  }
}

// Função para redefinir a senha usando o token
async function resetPassword(
  token: string,
  newPassword: string
): Promise<AxiosResponse<void>> {
  try {
    const response = await apiInstance.put(`/Auth/reset-password/${token}`, {
      newPassword,
    });

    return response;
  } catch (error) {
    console.error("Erro ao redefinir a senha:", error);
    throw error;
  }
}

export const AuthService = {
  onRegister,
  onLogin,
  resetPassword,
  sendForgotPasswordLink,
};
