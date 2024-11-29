import { AxiosResponse } from "axios";
import { apiInstance } from "../api/axios";
import { CreateServiceDto } from "../dtos/service";
import { Service } from "../entities/Service";

// Service Service
export const ServiceService = {
  createService,
  acceptService,
  getServiceById,
  getAllServices,
  getServicesByCategory,
  getServicesByName,
  getServicesByPrice,
  getServicesByAuthor,
};

// Função para criar um serviço
async function createService(data: CreateServiceDto): Promise<Service> {
  try {
    const response: AxiosResponse<Service> = await apiInstance.post(
      "/Service",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao criar serviço:", error);
    throw error;
  }
}

// Função para aceitar um serviço
async function acceptService(
  serviceId: number,
  employeeId: number
): Promise<Service> {
  try {
    const response: AxiosResponse<Service> = await apiInstance.post(
      `/Service/accept/${serviceId}`,
      employeeId
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao aceitar serviço:", error);
    throw error;
  }
}

// Função para obter um serviço pelo ID
async function getServiceById(id: number): Promise<Service> {
  try {
    const response: AxiosResponse<Service> = await apiInstance.get(
      `/Service/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter serviço pelo ID:", error);
    throw error;
  }
}

// Função para obter todos os serviços
async function getAllServices(): Promise<Service[]> {
  try {
    const response: AxiosResponse<Service[]> = await apiInstance.get(
      "/Service"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter todos os serviços:", error);
    throw error;
  }
}

// Função para obter serviços por categoria
async function getServicesByCategory(category: string): Promise<Service[]> {
  try {
    const response: AxiosResponse<Service[]> = await apiInstance.get(
      `/Service/category/${category}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter serviços por categoria:", error);
    throw error;
  }
}

// Função para obter serviços pelo nome
async function getServicesByName(name: string): Promise<Service[]> {
  console.log(name)
  try {
    const response: AxiosResponse<Service[]> = await apiInstance.get(
      `/Service/name/${name}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter serviços pelo nome:", error);
    throw error;
  }
}

// Função para obter serviços pelo preço
async function getServicesByPrice(price: number): Promise<Service[]> {
  try {
    const response: AxiosResponse<Service[]> = await apiInstance.get(
      `/Service/price/${price}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter serviços pelo preço:", error);
    throw error;
  }
}

// Função para obter serviços pelo empregador
async function getServicesByAuthor(employerId: number): Promise<Service[]> {
  try {
    const response: AxiosResponse<Service[]> = await apiInstance.get(
      `/Service/author/${employerId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter serviços pelo autor:", error);
    throw error;
  }
}
