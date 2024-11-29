import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../style";

interface HistoryCardProps {
  userImage: string;
  userName: string;
  userTitle: string;
  serviceType: string;
  serviceName: string;
  observations: string;
  tasks: string[];
  price: number;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  userImage,
  userName,
  userTitle,
  serviceType,
  serviceName,
  observations,
  tasks,
  price,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Image
        src={userImage}
        alt={userName}
        className="w-16 h-16 rounded-full object-cover"
        width={100}
        height={100}
      />
      <div>
        <div>
          <h2 className="text-lg font-semibold">{userName}</h2>
          <p>{userTitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Tipo de Serviço
            </label>
            <p className="bg-gray-100 rounded-md px-3 py-2 mt-1 text-gray-800">
              {serviceType}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Nome do Serviço
            </label>
            <p className="bg-gray-100 rounded-md px-3 py-2 mt-1 text-gray-800">
              {serviceName}
            </p>
          </div>
        </div>
        {isExpanded && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-500">
              Observações
            </label>
            <p className="bg-gray-100 rounded-md px-3 py-2 mt-1 text-gray-800">
              {observations}
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-800">
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col items-end">
        {isExpanded && (
          <p className="text-xl font-bold text-gray-800">
            R${price.toFixed(2)}
          </p>
        )}
        <Button
          className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
          onClick={toggleView}
        >
          {isExpanded ? "Ver Menos" : "Ver Mais"}
        </Button>
      </div>
    </div>
  );
};

export default HistoryCard;
