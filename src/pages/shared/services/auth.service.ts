import { AxiosResponse } from 'axios';
import { apiInstance } from '../api/axios';
import { LoginFormDto, RegisterFormDto } from '../dtos/auth';

async function onRegister(formData: RegisterFormDto): Promise<AxiosResponse<any, any> | undefined> {
    try {
        const response = await apiInstance.post("/auth/register", formData)
        return response
    } catch (error) {
        console.error(error)
    }
}

async function onLogin(formData: LoginFormDto): Promise<AxiosResponse<any, any> | undefined> {
    try {
        const response = await apiInstance.post("/auth/login", formData)
        return response
    } catch (error) {
        console.error(error)
    }
}
export const AuthService = {
    onRegister,
    onLogin
}