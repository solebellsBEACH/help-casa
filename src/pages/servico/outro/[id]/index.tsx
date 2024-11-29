import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ServiceService } from "@/pages/shared/services/service.service"; // Importe o serviço
import { Service } from "@/pages/shared/entities/Service";
import { useUserContext } from "@/pages/shared/context/UserContext";
import {
  AcceptServiceButton,
  RejectServiceButton,
  GoToProfileButton,
} from "./style"; // Estilo dos botões
import { LibComponents } from "@/pages/shared/components";

const ServiceDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Obtém o ID do serviço da URL
  const [service, setService] = useState<Service | null>(null);
  const { user } = useUserContext(); // Pega as informações do usuário logado

  // Carregar o serviço com base no ID
  const loadServiceDetails = async () => {
    if (id) {
      try {
        const response = await ServiceService.getServiceById(Number(id)); // Obtém o serviço pelo ID
        setService(response);
      } catch (error) {
        console.error("Erro ao carregar o serviço:", error);
      }
    }
  };

  // Função para aceitar o serviço (apenas para empregados)
  const handleAcceptService = async () => {
    if (user?.userType === "Empregado" && service) {
      try {
        await ServiceService.acceptService(service.id, user.id);
        alert("Serviço aceito com sucesso!");
        router.push("/pagamento"); // Exemplo de redirecionamento após aceitar o serviço
      } catch (error) {
        console.error("Erro ao aceitar serviço:", error);
        alert("Erro ao aceitar o serviço.");
      }
    } else {
      alert("Somente empregados podem aceitar serviços.");
    }
  };

  // Função para negar o serviço
  const handleRejectService = async () => {
    if (service) {
      try {
        alert("Serviço negado com sucesso!");
        router.push("/perfil"); // Redirecionar após negar o serviço, ou onde desejar
      } catch (error) {
        console.error("Erro ao negar serviço:", error);
        alert("Erro ao negar o serviço.");
      }
    }
  };

  // Redireciona para o perfil do dono do serviço
  const handleGoToProfile = () => {
    if (service) {
      router.push(`/profile/outro/${service.employer.id}`);
    }
  };

  useEffect(() => {
    loadServiceDetails();
  }, [id]);

  if (!service) return <div>Carregando...</div>;

  return (
    <>
      <LibComponents.SharedComponents.Header />
      <div style={{ padding: "20px" }}>
        <h1>{service.serviceName}</h1>
        <p>
          <strong>Categoria:</strong> {service.category}
        </p>
        <p>
          <strong>Valor:</strong> R${service.servicePrice}
        </p>
        <p>
          <strong>Descrição:</strong> {service.serviceDescription}
        </p>
        {user?.userType === "Empregado" && (
          <>
            <AcceptServiceButton onClick={handleAcceptService}>
              Aceitar Serviço
            </AcceptServiceButton>
            <RejectServiceButton onClick={handleRejectService}>
              Negar Serviço
            </RejectServiceButton>
          </>
        )}
        <GoToProfileButton onClick={handleGoToProfile}>
          Ir para o Perfil do Dono
        </GoToProfileButton>
      </div>
    </>
  );
};

export default ServiceDetails;
