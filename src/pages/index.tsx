import styled from "styled-components";
import { LibComponents } from "./shared/components";
import Image from "next/image";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  .name-section {
    position: absolute;
    margin-top: 160px;
    background: white;
  }

  .avaliacao-img {
    width: 200px;
    height: 220px;
    object-fit: cover;
  }
`;

export default function Home() {
  const scrollToElement = () => {
    const element = document.getElementById("categories");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const bannerData = {
    title: "Conecte-se com os melhores profissionais nacionais",
    description:
      "Encontre ou ofereça serviços domésticos com facilidade. Junte-se à comunidade de profissionais domésticos qualificados e proprietários satisfeitos.",
    buttonLabel: "Explore Categorias",
    imageId: 1,
  };

  const reviews = [
    {
      name: "Roberto",
      image: "https://www.designi.com.br/images/preview/12161376.jpg",
    },
    {
      name: "Carlos Silva",
      image: "https://www.designi.com.br/images/preview/12161378.jpg",
    },
    {
      name: "Ana Souza",
      image:
        "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg",
    },
    {
      name: "Fernanda Lima",
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
    },
    {
      name: "João Pedro",
      image:
        "https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg",
    },
  ];

  return (
    <div>
      <LibComponents.SharedComponents.HeaderBanner
        bannerData={bannerData}
        onClickBanner={scrollToElement}
      />
      <Content>
        <h1 className="content-title" id="categories">
          Categorias mais buscadas
        </h1>
        <LibComponents.HomeComponents.CategoryItemList />
        <h1 className="content-title mt-10">
          Avaliações
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <section key={`avaliacao-${i}`}>
                <div className="text-lg p-5 ml-4 rounded name-section bg-primary shadow-xl">
                  {review.name}
                </div>
                <Image
                  src={review.image}
                  alt={`Avatar de ${review.name}`}
                  className="avaliacao-img rounded"
                  width={9000}
                  height={9000}
                />
              </section>
            ))}
          </div>
        </h1>
      </Content>
      <LibComponents.SharedComponents.Footer />
    </div>
  );
}
