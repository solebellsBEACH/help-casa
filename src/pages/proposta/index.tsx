import styled from "styled-components";
import { LibComponents } from "../shared/components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 4vw;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.section`
  min-height: 50vh;
  width: 44vw;
  background-color: var(--background);
  border-radius: 0.5rem;
  padding: 1.5rem;

  @media (max-width: 769px) {
    width: 100%;
  }

  .image-container {
    width: 100px;
    height: 100px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details {
    margin-bottom: 1rem;
    p {
      margin: 0.5rem 0;
      color: var(--foreground);
    }
    .label {
      font-weight: bold;
      color: var(--primary);
    }
  }
`;

export const RightContent = styled.section`
  min-height: 50vh;
  width: 44vw;
  background-color: var(--background);
  border-radius: 0.5rem;
  padding: 1.5rem;
  
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 769px) {
    width: 100%;
    margin-top: 2rem;
  }

  .profile-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    .profile-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .profile-name {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--foreground);
    }
  }

  .chat-button {
    display: block;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary);
    color: var(--background);
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--secondary);
    }
  }
`;

const Proposta = () => {
    const data = {
        service: {
            image: "/images/product-image-example.png",
            type: "Elétrico",
            name: "Reparação de Tomadas",
            date: "10/12/2024 às 14:00",
            address: "Rua das Flores, 123",
            description: "Trocar e reparar tomadas danificadas.",
            value: "R$ 150,00",
        },
        professional: {
            image: "/images/product-image-example.png",
            name: "Marcos Silva - Pinto",
        },
    };

    const serviceDetails = [
        { label: "Tipo de Concerto", value: data.service.type },
        { label: "Nome do Serviço", value: data.service.name },
        { label: "Data e Hora", value: data.service.date },
        { label: "Endereço", value: data.service.address },
        { label: "Descrição", value: data.service.description },
        { label: "Valor", value: data.service.value },
    ];

    return (
        <>
            <LibComponents.SharedComponents.Header />
            <Container >
                <LeftContent className="shadow-2xl">
                    <div className="image-container">
                        <img src={data.service.image} alt={data.service.name} />
                    </div>
                    <div className="details">
                        {serviceDetails.map((detail, index) => (
                            <p key={index}>
                                <span className="label">{detail.label}:</span> {detail.value}
                            </p>
                        ))}
                    </div>
                </LeftContent>
                <RightContent >
                    <div className="shadow-2xl p-5">
                        <div className="profile-header">
                            <div className="profile-image">
                                <img src={data.professional.image} alt={data.professional.name} />
                            </div>
                            <div className="profile-name">{data.professional.name}</div>
                        </div>
                        <button className="chat-button">Conversar com {data.professional.name.split(" ")[0]}</button>
                    </div>

                    <button className="chat-button">Aceitar proposta</button>
                </RightContent>
            </Container>
        </>
    );
};

export default Proposta;
