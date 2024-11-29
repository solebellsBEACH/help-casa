import styled from "styled-components";
import { LibComponents } from "./shared/components";

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
  .avaliacao-img{
    width: 200px;
    height: 220px;

    object-fit: cover;
    
  }
`

export default function Home() {

  const onSubmit = () => {

  }

  const bannerData = {
    title: "Conecte-se com os melhores profissionais nacionais",
    description: "Encontre ou ofereça serviços domésticos com facilidade. Junte-se à comunidade de profissionais domésticos qualificados e proprietários satisfeitos.",
    buttonLabel: "Explore Perfils",
    imageId: 1,
  }

  return (
    <div>
      <LibComponents.SharedComponents.Header bannerData={bannerData} onClickBanner={onSubmit} />
      <Content>
        <h1 className="content-title">
          Categorias mais buscadas
        </h1>
        <LibComponents.HomeComponents.CategoryItemList />
        <h1 className="content-title mt-10">
          Avaliações
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map(e => <section>
              <div className="text-lg p-5 ml-4 rounded name-section bg-primary shadow-xl">Nome aleatorio</div>
              <img src="/images/product-image-example.png" alt="ddd" className="avaliacao-img rounded" />
            </section>)}
          </div>
        </h1>
      </Content>
      <LibComponents.SharedComponents.Footer />
    </div>
  );
}
