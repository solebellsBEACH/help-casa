import { AxiosResponse } from 'axios';
import { apiInstance } from '../api/axios';
import { RegisterForm } from '../dtos/auth';

async function onRegister(formData: RegisterForm): Promise<AxiosResponse<any, any> | undefined> {
    try {
        const response = await apiInstance.post("/auth/register", formData)
        return response
    } catch (error) {
        console.error(error)
    }
}
export const AuthService = {
    onRegister
}