import styled from "styled-components";

export const CartaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
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
  color: #975b5b;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #cca112;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c9b021;
  }
`;

export const BackButton = styled.button`
  margin-top: 10px;
  padding: 8px 15px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;
