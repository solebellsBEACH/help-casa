import { PiBuildingsBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { Container, LeftContent, RightContent, TabsList } from "./styles";
import { Banner } from "../Banner";
import { useRouter } from "next/router";

interface IHeaderProps {
  bannerData: {
    title: string;
    description: string;
    buttonLabel: string;
    imageId: number;
  };
  onClickBanner: () => void;
}

const HeaderBanner = ({ bannerData, onClickBanner }: IHeaderProps) => {
  const router = useRouter();
  const tabsItens = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Buscar Servicos",
      href: "/vaga/buscar",
    },
    {
      label: "Chat",
      href: "/chat",
    },
  ];

  const handleTabClick = (href: string) => {
    router.push(href);
  };

  return (
    <>
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
          <div>
            <FaUserCircle size={40} />
            <section>
              <h2>Olá Lucas</h2>
              <p>Seja bem-vindo de volta</p>
            </section>
          </div>
        </RightContent>
      </Container>

      <Banner data={bannerData} onSubmit={onClickBanner} />
    </>
  );
};

export default HeaderBanner;
