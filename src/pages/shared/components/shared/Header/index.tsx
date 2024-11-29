import { PiBuildingsBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { Container, LeftContent, RigthContent, TabsList } from "./styles"
import { Banner } from "../Banner";
import Sidebar from "../Sidebar";

interface IHeaderProps {
    bannerData: {
        title: string;
        description: string;
        buttonLabel: string;
        imageId: number;
    }
    onClickBanner: () => void
}


const Header = ({ bannerData, onClickBanner }: IHeaderProps) => {

    const tabsItens = [
        {
            label: "Home",
            href: "/login"
        },
        {
            label: "Buscar Servicos",
            href: "/login"
        },
        {
            label: "Chat",
            href: "/login"
        },
        {
            label: "Buscar Propostas",
            href: "/login"
        },
    ]

    return <>
        <Sidebar />
        <Container className="w-full">
            <LeftContent>
                <PiBuildingsBold size={35} />
                <h1>HelpCasa</h1>
            </LeftContent>
            <RigthContent>
                <TabsList>
                    {tabsItens.map((item, index) => {
                        return <a className={index === 0 ? "active" : ""} key={`tabsItens-${index}`}>{item.label}</a>
                    })}
                </TabsList>
                <div>
                    <FaUserCircle size={40} />
                    <section>
                        <h1>Olá Lucas</h1>
                        <p>Seja bem vindo de volta</p>
                    </section>
                </div>
            </RigthContent>
        </Container>

        <Banner data={bannerData} onSubmit={onClickBanner} />
    </>
}

export default Header;
