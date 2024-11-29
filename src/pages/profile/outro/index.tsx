import { NextPage } from "next";
import UserInfo from "./components/UserInfo";
import Activities from "./components/Activities";
import {
  Container,
  LogoutButton,
  HistoryButton,
  ProfileContainer,
} from "./style";
import { useRouter } from "next/router";
import { useUserContext } from "@/pages/shared/context/UserContext";

const Profile: NextPage = () => {
  const { setEmail } = useUserContext();
  const router = useRouter();
  const handleLogout = () => {
    setEmail("");
    router.push("/login");
  };

  const handleHist = () => {
    router.push("/historico");
  };

  return (
    <Container>
      <LogoutButton onClick={handleLogout}>Sair do Perfil</LogoutButton>
      <HistoryButton onClick={handleHist}>Histórico</HistoryButton>
      <ProfileContainer>
        <UserInfo />
        <Activities />
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
