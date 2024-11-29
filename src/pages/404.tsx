import React from "react";
import styled from "styled-components";
import { FaRegSadTear } from "react-icons/fa";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: var(--background);
  color: var(--foreground);
`;

const Icon = styled.div`
  font-size: 6rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: var(--foreground);
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: var(--gray);
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: var(--primary);
  color: var(--background);
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary);
    color: var(--foreground);
  }
`;

const NotFoundPage: React.FC = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push("/"); // Navega para a página inicial
    };

    return (
        <Container>
            <Icon>
                <FaRegSadTear />
            </Icon>
            <Title>404 - Página não encontrada</Title>
            <Description>
                Oops! A página que você está procurando não existe ou foi movida.
            </Description>
            <Button onClick={handleGoHome}>Voltar para a Página Inicial</Button>
        </Container>
    );
};

export default NotFoundPage;
