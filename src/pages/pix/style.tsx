import styled from "styled-components";

export const PixContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #e9f7ef;
  background-color: var(--secondary);
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: var(--background);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: #111110;
  margin-bottom: 20px;
`;

export const QRCodeWrapper = styled.div`
  margin: 20px 0;
`;

export const BackButton = styled.button`
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

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #225e9e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1a4680;
  }
`;
