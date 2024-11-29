import React, { useState } from "react";
import { ButtonAccept, ButtonDecline, Input, TextArea, Select } from "../style";
import Image from "next/image";
import { ServiceService } from "@/pages/shared/services/service.service";

interface ServiceProposalCardProps {
  userImage: string;
  userName: string;
}

const categories = [
  "Babysitter",
  "Cozinheiro",
  "Limpeza de casas",
  "Limpeza de escritórios",
  "Limpeza de vidros",
  "Limpeza e organização",
];

const ServiceProposalCard: React.FC<ServiceProposalCardProps> = ({
  userImage,
  userName,
}) => {
  const [formData, setFormData] = useState({
    serviceType: "",
    serviceName: "",
    date: "",
    time: "",
    address: "",
    description: "",
    value: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos (opcional)
    if (
      !formData.serviceType ||
      !formData.serviceName ||
      !formData.date ||
      !formData.time ||
      !formData.address ||
      !formData.description ||
      formData.value <= 0
    ) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    try {
      const newService = {
        employerId: 1, // ID do empregador (substituir com o real)
        ServiceName: formData.serviceName,
        ServiceDescription: formData.description,
        ServicePrice: parseFloat(formData.value.toString()),
        Location: formData.address,
        Category: formData.serviceType,
        dateTime: `${formData.date}T${formData.time}:00Z`,
      };

      const response = await ServiceService.createService(newService);
      alert("Serviço criado com sucesso!");
      console.log("Serviço criado:", response);
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
      alert("Erro ao criar serviço. Verifique os dados e tente novamente.");
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-semibold mb-6">Informação do Serviço</h1>
      <div className="flex items-start gap-6 mb-6">
        <Image
          src={userImage}
          alt={userName}
          className="w-16 h-16 rounded-full object-cover"
          width={100}
          height={100}
        />
        <div>
          <h2 className="text-lg font-semibold">{userName}</h2>
        </div>
      </div>
      <div className="space-y-4">
        {/* Categoria (Tipo de Serviço) */}
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Categoria
          </label>
          <Select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleSelectChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
          >
            <option value="">Selecione uma categoria</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </div>

        {/* Nome do Serviço */}
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Nome do Serviço
          </label>
          <Input
            type="text"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
          />
        </div>

        {/* Data */}
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Data
          </label>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
          />
        </div>

        {/* Hora */}
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Horário
          </label>
          <Input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
          />
        </div>

        {/* Endereço */}
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Endereço
          </label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
          />
        </div>

        {/* Descrição */}
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Descrição
          </label>
          <TextArea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
            rows={3}
          />
        </div>

        {/* Valor */}
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Valor
          </label>
          <Input
            type="number"
            name="value"
            value={formData.value}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
          />
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex justify-end mt-6">
        <ButtonDecline
          type="button"
          className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
        >
          Descartar Proposta
        </ButtonDecline>
        <ButtonAccept
          type="submit"
          className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
        >
          Adicionar Proposta
        </ButtonAccept>
      </div>
    </form>
  );
};

export default ServiceProposalCard;
