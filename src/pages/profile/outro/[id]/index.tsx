import { NextPage } from "next";
import UserInfo from "./components/UserInfo";
import Activities from "./components/Service";
import { Container, ProfileContainer } from "./style";
import { useState, useEffect } from "react";
import { ProfileService } from "@/pages/shared/services/profile.service";
import { LibComponents } from "@/pages/shared/components";

const Profile: NextPage = () => {
  const [userType, setUserType] = useState<string>("");

  // Função para carregar o tipo de usuário
  const loadUserProfile = async () => {
    try {
      const response = await ProfileService.getUserByEmail(""); // Exemplo de email, ajuste conforme necessário
      setUserType(response.data.userType); // Ajuste conforme a estrutura da resposta
    } catch (error) {
      console.error("Erro ao carregar perfil do usuário:", error);
    }
  };

  useEffect(() => {
    loadUserProfile();
  }, []);

  return (
    <>
      <LibComponents.SharedComponents.Header />
      <Container>
        <ProfileContainer>
          <UserInfo />
          {/* Condicionalmente renderiza o componente Activities com base no tipo de usuário */}
          {userType !== "Empregado" && <Activities />}
        </ProfileContainer>
      </Container>
    </>
  );
};

export default Profile;
