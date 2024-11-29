import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação do spinner
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Backdrop (fundo escuro e semitransparente)
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// Spinner (círculo girando)
const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid white; /* Cor do spinner */
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingPage: React.FC = () => {
    return (
        <Backdrop>
            <Spinner />
        </Backdrop>
    );
};

export default LoadingPage;
