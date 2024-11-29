import React from "react";
import { LibComponents } from "../shared/components";

export default function SubscriptionScreen() {
  return (
    <>
      <LibComponents.SharedComponents.Header />
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://example.com/background-image.jpg")',
        }}
      >
        <div className="flex justify-center items-center space-x-8 my-12">
          <div className="bg-white rounded-lg shadow-lg p-6 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Gratuito</h3>
            <p className="text-gray-600 mb-6">
              Acesso as ferramentas padrões da plataforma.
            </p>
            <button className="bg-[#d39430] text-white font-medium py-2 px-4 rounded-md hover:bg-[#b07827]">
              Selecionar
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Premium - R$20,00/mês
            </h3>
            <p className="text-gray-600 mb-6">
              Prioridade na escolha dos serviços
            </p>
            <button className="bg-[#d39430] text-white font-medium py-2 px-4 rounded-md hover:bg-[#b07827]">
              Selecionar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
