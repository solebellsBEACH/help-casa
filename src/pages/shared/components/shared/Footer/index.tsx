import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary);
  color: #f9fafb;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0;
    font-size: 0.875rem; /* Texto menor */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    font-size: 1.5rem; /* Ícones maiores */
    transition: color 0.2s;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>&copy; {new Date().getFullYear()} My Website. Todos os direitos reservados.</p>
            <SocialLinks>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
            </SocialLinks>
        </FooterContainer>
    );
};

export default Footer;
