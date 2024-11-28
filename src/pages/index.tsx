import styled from "styled-components";
import { LibComponents } from "./shared/components";
import { useState } from "react";

export const Content = styled.section`

  display: flex;
  flex-direction: column;

  padding: 3rem;

  .content-title{
    font-weight: 600;
    color: red;
    font-size: 2rem;
    color: var(--gray-dark);
    

    text-align: center;
  }
`

export default function Home() {

  const [searchName, setSearchName] = useState("")

  const onSubmit = () => {

  }

  const bannerData = {
    title: "Explore os filtros para buscar o perfil perfeito",
    description: "Encontre ou ofereça serviços domésticos com facilidade. Junte-se à comunidade de profissionais domésticos qualificados e proprietários satisfeitos.",
    buttonLabel: "Explore Perfils"
  }

  const fakeData = {
    name: "Product Example",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 10.57
  }

  const itensListData = Array.from({ length: 10 }, () => fakeData);

  return (
    <div>
      <LibComponents.SharedComponents.Header bannerData={bannerData} onClickBanner={onSubmit} />
      <Content>
        <LibComponents.SharedComponents.SearchContent setState={setSearchName} state={searchName} />
        <LibComponents.SharedComponents.ItensList data={itensListData} />
      </Content>
    </div>
  );
}
