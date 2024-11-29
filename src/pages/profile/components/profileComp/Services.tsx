// src/pages/profile/components/profileComp/Services.tsx
import React, { useEffect, useState } from "react";
import { ServiceService } from "@/pages/shared/services/service.service"; // Importe o serviço
import {
  ActivitiesContainer,
  ActivityList,
  ActivityItem,
  ActivityAvatar,
  ActivityInfo,
  ViewMoreButton,
  CreateServiceButton,
} from "./style";
import { useRouter } from "next/router";
import { Service } from "@/pages/shared/entities/Service";
import { useUserContext } from "@/pages/shared/context/UserContext";

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]); // Alterado para Service
  const router = useRouter();
  const { user } = useUserContext();

  const loadServices = async () => {
    try {
      const response = await ServiceService.getServicesByAuthor(user?.id || 0);
      setServices(response);
    } catch (error) {
      console.error("Erro ao carregar serviços:", error);
    }
  };

  const handleServiceClick = (serviceId: number) => {
    router.push(`/servico/outro/${serviceId}`); // Redireciona para a página de detalhes do serviço
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <ActivitiesContainer>
      <h2
        style={{ marginBottom: "10px", fontSize: "1.5em", fontWeight: "bold" }}
      >
        Meus Serviços
      </h2>
      <ActivityList>
        {services.map((service) => (
          <ActivityItem key={service.id}>
            <ActivityAvatar
              src="https://via.placeholder.com/50"
              alt="Service"
            />
            <ActivityInfo>
              <p>
                <strong>Nome:</strong> {service.serviceName}
              </p>
              <p>
                <strong>Valor:</strong> R${service.servicePrice}
              </p>
            </ActivityInfo>
            <ViewMoreButton onClick={() => handleServiceClick(service.id)}>
              Ver Mais
            </ViewMoreButton>
          </ActivityItem>
        ))}
      </ActivityList>
      <CreateServiceButton onClick={() => router.push("/servico/criar")}>
        Criar Serviço
      </CreateServiceButton>
    </ActivitiesContainer>
  );
};

export default Services;
