import styled from "styled-components";

// Container principal para centralizar o conteúdo
export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background: var(--background);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 100px auto;
`;

// Título do modal
export const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

// Input estilizado para entrada de dados
export const ModalInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

// Botão estilizado para enviar
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

  &:hover {
    filter: brightness(0.8);
  }
`;
