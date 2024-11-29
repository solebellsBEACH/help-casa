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
import { LibComponents } from "@/pages/shared/components";

const Profile: NextPage = () => {
  const { logout } = useUserContext();
  const router = useRouter();

  const handleHist = () => {
    router.push("/profile/historico");
  };

  return (
    <>
      <LibComponents.SharedComponents.Header />
      <Container>
        <LogoutButton onClick={logout}>Sair do Perfil</LogoutButton>
        <HistoryButton onClick={handleHist}>Histórico</HistoryButton>
        <ProfileContainer>
          <UserInfo />
          <Activities />
        </ProfileContainer>
      </Container>
    </>
  );
};

export default Profile;
