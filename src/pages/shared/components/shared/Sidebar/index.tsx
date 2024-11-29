import React, { useState } from "react";
import styled from "styled-components";
import { PiBuildingsBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

const SidebarContainer = styled.aside<{ isOpen: boolean }>`

@media (min-width: 769px) {
        display: none;
    }
  width: 250px;
  height: 100vh;
  background-color: #2a2717; /* Fundo escuro */
  color: #f9fafb; /* Texto claro */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-250px")}; /* Esconde quando fechado */
  z-index: 20;
  transition: left 0.3s ease-in-out;
`;

const Backdrop = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Menu = styled.nav`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;

  a {
    display: block;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    color: #f9fafb;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      background-color: var(--primary);
      color: #ffffff;
    }

  }
`;

const Footer = styled.div`
  margin-top: auto;
  padding: 1rem;
  text-align: center;

  p {
    font-size: 0.875rem;
    color: #9ca3af;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 30;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  @media (min-width: 769px) {
        display: none;
    }
`;

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: "Home", href: "/home" },
        { label: "Buscar Serviços", href: "/services" },
        { label: "Chat", href: "/chat" },
        { label: "Propostas", href: "/proposals" },
    ];

    return (
        <>
            <ToggleButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Fechar" : "Abrir"}
            </ToggleButton>
            <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
            <SidebarContainer isOpen={isOpen}>
                <Logo>
                    <PiBuildingsBold size={35} />
                    <h1>HelpCasa</h1>
                </Logo>
                <Menu>
                    {menuItems.map((item, index) => (
                        <a
                            key={`menu-item-${index}`}
                            href={item.href}
                            className={index === 0 ? "active" : ""}
                        >
                            {item.label}
                        </a>
                    ))}
                </Menu>
                <Footer>
                    <FaUserCircle size={40} />
                    <p>Olá Lucas! Seja bem-vindo!</p>
                </Footer>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
