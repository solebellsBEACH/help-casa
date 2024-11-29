import styled from "styled-components";

export const EscolhaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f9f9f9;
  font-family: Arial, sans-serif;
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
  color: #070707;
  margin-bottom: 20px;
  font-size: 1.8rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  margin-right: 10px;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: #555;
`;

export const Button = styled.button`
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

export const RadioContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;
