import React, { useState, useEffect } from "react";
import { ProfileService } from "@/pages/shared/services/profile.service";
import { AxiosResponse } from "axios";
import {
  UserInfoContainer,
  UserDetails,
  Avatar,
  Details,
  RatingButton,
  ActionButtonsContainer,
} from "../style";
import { useRouter } from "next/router";

const UserInfo: React.FC = () => {
  const [profileData, setProfileData] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    profilePicture: "",
    description: "",
    rating: 0,
    offeredServices: [],
    contractedServices: [],
    availableTimeRange: "",
    areaOfExpertise: "",
    experience: "",
    address: "",
    userType: "",
  });

  const router = useRouter();
  const { id } = router.query; // Obter o ID diretamente da URL

  const loadProfileData = async () => {
    if (!id) return; // Garantir que o ID está disponível

    try {
      const response: AxiosResponse = await ProfileService.getUserById(
        Number(id)
      ); // Alterado para buscar pelo ID
      const userData = response.data;
      setProfileData(userData);
    } catch (error) {
      console.error("Erro ao carregar dados do perfil:", error);
    }
  };

  useEffect(() => {
    loadProfileData();
  }, [id]); // Recarregar os dados quando o ID mudar

  const handleRateProfile = () => {
    const rating = prompt("Avalie o perfil de 0 a 5 estrelas:");
    if (rating && Number(rating) >= 0 && Number(rating) <= 5) {
      alert(`Você avaliou este perfil com ${rating} estrelas.`);
    } else {
      alert("Por favor, insira uma avaliação válida entre 0 e 5.");
    }
  };

  return (
    <UserInfoContainer>
      <h2
        style={{ marginBottom: "10px", fontSize: "1.5em", fontWeight: "bold" }}
      >
        Perfil de {profileData.name}
      </h2>
      <UserDetails>
        <Avatar src={profileData.profilePicture} alt="User Avatar" />
        <div>
          <Details>
            <strong>Nome:</strong> <br />
            <span>{profileData.name}</span>
          </Details>
          <Details>
            <strong>E-mail:</strong> <br />
            <span>{profileData.email}</span>
          </Details>
          <Details>
            <strong>Telefone:</strong> <br />
            <span>{profileData.phone}</span>
          </Details>
          <Details>
            <strong>Avaliação:</strong> <br />
            <span>{profileData.rating}</span>
          </Details>
          {profileData.userType === "Empregado" ? (
            <>
              <Details>
                <strong>Descrição:</strong> <br />
                <span>{profileData.description}</span>
              </Details>
              <Details>
                <strong>Área de Especialização:</strong> <br />
                <span>{profileData.areaOfExpertise}</span>
              </Details>
              <Details>
                <strong>Experiência:</strong> <br />
                <span>{profileData.experience}</span>
              </Details>
            </>
          ) : (
            <Details>
              <strong>Descrição:</strong> <br />
              <span>{profileData.description}</span>
            </Details>
          )}
        </div>
      </UserDetails>

      {/* Botões de ação */}
      <ActionButtonsContainer>
        <RatingButton onClick={handleRateProfile}>
          Avaliar Perfil (0-5)
        </RatingButton>
      </ActionButtonsContainer>
    </UserInfoContainer>
  );
};

export default UserInfo;
