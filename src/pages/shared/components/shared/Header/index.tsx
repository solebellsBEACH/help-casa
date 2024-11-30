import { PiBuildingsBold } from "react-icons/pi";
import {
  Avatar,
  Container,
  LeftContent,
  RightContent,
  TabsList,
} from "./styles";
import { useRouter } from "next/router";
import { useUserContext } from "@/pages/shared/context/UserContext";

const DEFAULT_AVATAR = "/default-avatar.png";

const Header = () => {
  const router = useRouter();
  const { user } = useUserContext();

  // if (!user) {
  //   return <div>Carregando...</div>;
  // }

  const tabsItens = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Buscar Servicos",
      href: "/servico/buscar",
    },
    {
      label: "Chat",
      href: "/chat",
    },
    {
      label: "Assinaturas",
      href: "/teladeplanos",
    },
  ];

  const handleTabClick = (href: string) => {
    router.push(href);
  };

  const handleClick = () => {
    router.push("/profile");
  };

  return (
    <Container className="w-full">
      <LeftContent>
        <PiBuildingsBold size={35} />
        <h1>HelpCasa</h1>
      </LeftContent>
      <RightContent>
        <TabsList>
          {tabsItens.map((item, index) => {
            const isActive = router.pathname === item.href;

            return (
              <a
                key={`tabsItens-${index}`}
                onClick={() => handleTabClick(item.href)}
                className={isActive ? "active" : ""}
              >
                {item.label}
              </a>
            );
          })}
        </TabsList>
        <div onClick={handleClick}>
          <Avatar
            src={user?.profilePicture || DEFAULT_AVATAR}
            alt="User Avatar"
          />
          <section>
            <h2>Olá {user?.name}</h2>
            <p>Seja bem-vindo de volta</p>
          </section>
        </div>
      </RightContent>
    </Container>
  );
};

export default Header;
