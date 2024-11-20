import React, { useState, useEffect } from "react";
import { ProfileService } from "@/pages/shared/services/profile.service";
import { AxiosResponse } from "axios";
import { UpdateProfileDTO } from "@/pages/shared/dtos/profile";
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
import { useRouter } from "next/router";
import { useUserContext } from "@/pages/shared/context/UserContext";
import { Bounce, toast } from "react-toastify";

const UserInfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Dados completos do perfil exibidos na tela
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

  // Apenas dados editáveis para o formulário
  const [editedProfileData, setEditedProfileData] = useState<UpdateProfileDTO>({
    name: "",
    email: "",
    phone: "",
    profilePicture: "",
    description: "",
    address: "",
    areaOfExpertise: "",
    experience: "",
    availableTimeRange: "",
  });

  const router = useRouter();
  const { email } = useUserContext();

  // Função para carregar dados do perfil com base no e-mail
  const loadProfileData = async () => {
    if (!email || email === "") {
      console.error("Erro: E-mail não encontrado no contexto");
      return router.push("/login");
    }

    try {
      const response: AxiosResponse = await ProfileService.getUserByEmail(
        email
      );
      const userData = response.data;
      setProfileData(userData);
    } catch (error) {
      console.error("Erro ao carregar dados do perfil:", error);
    }
  };

  // Carregar dados ao montar o componente
  useEffect(() => {
    loadProfileData();
  }, []);

  // Atualizar os dados apenas no estado de edição
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setEditedProfileData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Abrir o modal e copiar apenas os campos editáveis para edição
  const handleOpenModal = () => {
    setEditedProfileData({
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone,
      profilePicture: profileData.profilePicture,
      description: profileData.description,
      address: profileData.address,
      areaOfExpertise: profileData.areaOfExpertise,
      experience: profileData.experience,
      availableTimeRange: profileData.availableTimeRange,
    });
    setIsModalOpen(true);
  };

  // Fechar o modal sem salvar alterações
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Salvar as alterações feitas no modal
  const handleSaveChanges = async () => {
    try {
      // Enviar apenas os dados editáveis para o backend
      await ProfileService.updateProfile(editedProfileData);
      setProfileData((prevData) => ({
        ...prevData,
        ...editedProfileData,
      }));
      toast.success("Dados salvos com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
      setIsModalOpen(false); // Fechar o modal após salvar
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      toast.error("Erro ao salvar dados.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <UserInfoContainer>
      <h2
        style={{ marginBottom: "10px", fontSize: "1.5em", fontWeight: "bold" }}
      >
        Informações da Conta
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
          {/* Exibe campos específicos conforme o tipo de usuário */}
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
      <EditButton onClick={handleOpenModal}>Editar Perfil</EditButton>

      {/* Modal para editar informações */}
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
            {/* Campos adicionais para empregados */}
            {profileData.userType === "Empregado" && (
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
