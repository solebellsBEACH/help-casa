import styled from "styled-components";
import { LibComponents } from "./shared/components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
align-items: center;
  padding: 3rem;
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
      </Content>
      <LibComponents.SharedComponents.Footer />
    </div>
  );
}
