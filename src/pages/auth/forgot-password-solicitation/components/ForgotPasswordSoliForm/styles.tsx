import styled, { css } from "styled-components";
import Link from "next/link";

// Container principal para centralizar o conteúdo
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
`;

// Wrapper do formulário, aproveitando os estilos do RegisterForm
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: var(--background);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

// Título do modal
export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
`;

// Campo de entrada para senha
export const ModalInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.625rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  color: #374151;
  transition: border-color 0.3s ease;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

// Botão estilizado para redefinir senha
export const ModalButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary);
  color: var(--background);
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    filter: brightness(0.9);
  }
`;

// Mensagem de erro
export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

// Link de navegação reutilizando o estilo
export const BackToLoginLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #3b82f6;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
