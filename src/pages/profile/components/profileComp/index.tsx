import { NextPage } from "next";
import UserInfo from "./UserInfo";
import Activities from "./Activities";
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

  return (
    <Container>
      <LogoutButton onClick={handleLogout}>Sair do Perfil</LogoutButton>
      <HistoryButton>Histórico</HistoryButton>
      <ProfileContainer>
        <UserInfo />
        <Activities />
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
