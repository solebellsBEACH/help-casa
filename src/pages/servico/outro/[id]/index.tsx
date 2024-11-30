import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ServiceService } from "@/pages/shared/services/service.service";
import { Service } from "@/pages/shared/entities/Service";
import { useUserContext } from "@/pages/shared/context/UserContext";
import { LibComponents } from "@/pages/shared/components";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #555;
  margin: 10px 0;

  strong {
    color: #333;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button:not(:last-child) {
    margin-right: 10px;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const AcceptServiceButton = styled(StyledButton)`
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3e8e41;
  }
`;

const RejectServiceButton = styled(StyledButton)`
  background-color: #f44336;
  color: white;

  &:hover {
    background-color: #e53935;
  }

  &:active {
    background-color: #d32f2f;
  }
`;

const GoToProfileButton = styled(StyledButton)`
  background-color: var(--primary);
  color: white;

`;

const ServiceDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [service, setService] = useState<Service | null>(null);
  const { user } = useUserContext();

  const loadServiceDetails = async () => {
    if (id) {
      try {
        const response = await ServiceService.getServiceById(Number(id));
        setService(response);
      } catch (error) {
        console.error("Erro ao carregar o serviço:", error);
      }
    }
  };

  const handleAcceptService = async () => {
    if (user?.userType === "Empregado" && service) {
      try {
        await ServiceService.acceptService(service.id, user.id);
        alert("Serviço aceito com sucesso!");
        router.push("/pagamento");
      } catch (error) {
        console.error("Erro ao aceitar serviço:", error);
        alert("Erro ao aceitar o serviço.");
      }
    } else {
      alert("Somente empregados podem aceitar serviços.");
    }
  };

  const handleRejectService = async () => {
    if (service) {
      try {
        alert("Serviço negado com sucesso!");
        router.push("/perfil");
      } catch (error) {
        console.error("Erro ao negar serviço:", error);
        alert("Erro ao negar o serviço.");
      }
    }
  };

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
      <Container>
        <Title>{service.serviceName}</Title>
        <InfoText>
          <strong>Categoria:</strong> {service.category}
        </InfoText>
        <InfoText>
          <strong>Valor:</strong> R${service.servicePrice}
        </InfoText>
        <InfoText>
          <strong>Descrição:</strong> {service.serviceDescription}
        </InfoText>
        {user?.userType === "Empregado" && (
          <ButtonGroup>
            <AcceptServiceButton onClick={handleAcceptService}>
              Aceitar Serviço
            </AcceptServiceButton>
            <RejectServiceButton onClick={handleRejectService}>
              Negar Serviço
            </RejectServiceButton>
          </ButtonGroup>
        )}
        <ButtonGroup>
          <GoToProfileButton onClick={handleGoToProfile}>
            Ir para o Perfil do Dono
          </GoToProfileButton>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default ServiceDetails;
