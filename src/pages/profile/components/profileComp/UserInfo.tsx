import React, { useState } from "react";
import {
  UserInfoContainer,
  UserDetails,
  Avatar,
  EditButton,
  Details,
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalInput,
  ModalButton,
} from "./style";
import { useUserContext } from "@/pages/shared/context/UserContext";
import { toastConfig } from "@/pages/shared/utils/toast";
import { ProfileService } from "@/pages/shared/services/profile.service";

const DEFAULT_AVATAR = "/default-avatar.png";

const UserInfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useUserContext();

  // Estado local para os dados editados
  const [editedProfileData, setEditedProfileData] = useState({
    id: user?.id || 0,
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
    phone: user?.phone || "",
    profilePicture: user?.profilePicture || "",
    description: user?.description || "",
    rating: user?.rating || 0,
    availableTimeRange: user?.availableTimeRange || "",
    areaOfExpertise: user?.areaOfExpertise || "",
    experience: user?.experience || "",
    offeredServices: user?.offeredServices || "",
    userType: user?.userType || "",
    subscription: user?.subscription || false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = async () => {
    try {
      // Atualize os dados no contexto e no localStorage
      const updatedUser = { ...user, ...editedProfileData };
      setUser(updatedUser); // Atualiza o contexto
      localStorage.setItem("user", JSON.stringify(updatedUser)); // Atualiza o localStorage
      await ProfileService.updateProfile(updatedUser);

      toastConfig.success("Dados atualizados com sucesso!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
      toastConfig.error("Erro ao salvar alterações.");
    }
  };

  if (!user) {
    return <p>Carregando informações do perfil...</p>;
  }

  return (
    <UserInfoContainer>
      <h2
        style={{ marginBottom: "10px", fontSize: "1.5em", fontWeight: "bold" }}
      >
        Informações da Conta
      </h2>
      <UserDetails>
        <Avatar src={user.profilePicture || DEFAULT_AVATAR} alt="User Avatar" />
        <div>
          <Details>
            <strong>Nome:</strong> <br />
            <span>{user.name}</span>
          </Details>
          <Details>
            <strong>E-mail:</strong> <br />
            <span>{user.email}</span>
          </Details>
          <Details>
            <strong>Telefone:</strong> <br />
            <span>{user.phone}</span>
          </Details>
          <Details>
            <strong>Descrição:</strong> <br />
            <span>{user.description}</span>
          </Details>
          {user.userType === "Empregado" && (
            <>
              <Details>
                <strong>Área de Especialização:</strong> <br />
                <span>{user.areaOfExpertise}</span>
              </Details>
              <Details>
                <strong>Experiência:</strong> <br />
                <span>{user.experience}</span>
              </Details>
            </>
          )}
        </div>
      </UserDetails>
      <EditButton onClick={handleOpenModal}>Editar Perfil</EditButton>

      {/* Modal de edição */}
      {isModalOpen && (
        <ModalBackground>
          <ModalContainer>
            <ModalTitle>Editar Informações</ModalTitle>
            <ModalInput
              type="text"
              name="name"
              value={editedProfileData.name}
              onChange={handleInputChange}
              placeholder="Nome"
            />
            <ModalInput
              type="email"
              name="email"
              value={editedProfileData.email}
              onChange={handleInputChange}
              placeholder="E-mail"
            />
            <ModalInput
              type="text"
              name="phone"
              value={editedProfileData.phone}
              onChange={handleInputChange}
              placeholder="Telefone"
            />
            <ModalInput
              type="text"
              name="description"
              value={editedProfileData.description}
              onChange={handleInputChange}
              placeholder="Descrição"
            />
            <ModalInput
              type="url"
              name="profilePicture"
              value={editedProfileData.profilePicture}
              onChange={handleInputChange}
              placeholder="URL da Foto de Perfil"
            />
            {user.userType === "Empregado" && (
              <>
                <ModalInput
                  type="text"
                  name="areaOfExpertise"
                  value={editedProfileData.areaOfExpertise}
                  onChange={handleInputChange}
                  placeholder="Área de Especialização"
                />
                <ModalInput
                  type="text"
                  name="experience"
                  value={editedProfileData.experience}
                  onChange={handleInputChange}
                  placeholder="Experiência"
                />
              </>
            )}
            <ModalButton onClick={handleSaveChanges}>
              Salvar Alterações
            </ModalButton>
            <ModalButton onClick={handleCloseModal}>Fechar</ModalButton>
          </ModalContainer>
        </ModalBackground>
      )}
    </UserInfoContainer>
  );
};

export default UserInfo;
