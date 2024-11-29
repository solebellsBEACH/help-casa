import React, { useState } from "react";
import { ButtonAccept, ButtonDecline, Input, TextArea } from "../style";
import Image from "next/image";

interface ServiceProposalCardProps {
  userImage: string;
  userName: string;
  serviceType: string;
  serviceName: string;
  date: string;
  time: string;
  address: string;
  description: string;
  tasks: string[];
  value: number;
}

const ServiceProposalCard: React.FC<ServiceProposalCardProps> = ({
  userImage,
  userName,
  serviceType,
  serviceName,
  date,
  time,
  address,
  description,
  tasks,
  value,
}) => {
  const [formData, setFormData] = useState({
    serviceType,
    serviceName,
    date,
    time,
    address,
    description,
    value,
    tasks: tasks.join("\n"), // Converte a lista de tarefas em string separada por quebras de linha
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
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
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Tipo de Serviço
          </label>
          <Input
            type="text"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
          />
        </div>
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
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Data
          </label>
          <Input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Horário
          </label>
          <Input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
          />
        </div>
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
        <div>
          <label className="block text-sm font-medium text-gray-500">
            Tarefas Realizadas
          </label>
          <TextArea
            name="tasks"
            value={formData.tasks}
            onChange={handleInputChange}
            className="bg-gray-100 rounded-md px-3 py-2 mt-1 w-full text-gray-800"
            rows={3}
          />
        </div>
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
      <div className="flex justify-end mt-6">
        <ButtonDecline className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
          Descartar Proposta
        </ButtonDecline>
        <ButtonAccept className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
          Adicionar Proposta
        </ButtonAccept>
      </div>
    </form>
  );
};

export default ServiceProposalCard;
