import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-item {
    min-width: 200px;
    min-height: 100px;
    margin-top: -50px;
    background: white;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

interface CategoryItemProps {
  category: string;
  description: string;
  imageUrl: string;
}

const Item = ({ category, description, imageUrl }: CategoryItemProps) => {
  return (
    <Container className="rounded">
      <img src={imageUrl} className="rounded" alt={category} />
      <div className="content-item rounded shadow-2xl flex justify-center items-center flex-col p-10">
        <h3 className="text-primary text-sm">{category}</h3>
        <h1 className="font-bold">{description}</h1>
        <button className="bg-primary w-full mt-6 rounded details-button p-2 text-background text-sm">
          Ver detalhes
        </button>
      </div>
    </Container>
  );
};

const CategoryItemList = () => {
  const categories = [
    {
      category: "Babysitter",
      description: "Cuidador de crianças",
      imageUrl:
        "https://raw.githubusercontent.com/Lucas-Morais-Gomes/HelpCasa-Imgs/refs/heads/main/images/Babysitter.jpg",
    },
    {
      category: "Cozinheiro",
      description: "Chef particular",
      imageUrl:
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Cozinheiro.jpg?raw=true",
    },
    {
      category: "Limpeza de casas",
      description: "Serviço de limpeza doméstica",
      imageUrl:
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Limpeza-de-casas.jpg?raw=true",
    },
    {
      category: "Limpeza de escritórios",
      description: "Limpeza profissional de escritórios",
      imageUrl:
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Limpeza-de-escritorios.png?raw=true",
    },
    {
      category: "Limpeza de vidros",
      description: "Limpeza e manutenção de vidros",
      imageUrl:
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Limpeza-de-vidros.jpg?raw=true",
    },
    {
      category: "Limpeza e organização",
      description: "Organização e limpeza geral",
      imageUrl:
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Limpeza-e-organiza%C3%A7%C3%A3o.jpg?raw=true",
    },
  ];

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, i) => (
        <Item key={`category-item-${i}`} {...category} />
      ))}
    </div>
  );
};

export default CategoryItemList;
