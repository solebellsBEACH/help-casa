import styled from "styled-components";
import { useState } from "react";
import { LibComponents } from "@/pages/shared/components";
import { useSelector } from "react-redux";
import { selectServicesState } from "@/store/features/servicesSlice";

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  padding: 3rem;
`;

export default function BuscarVagaComponent() {
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = useSelector(selectServicesState)

  const totalPages = 5;

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const scrollToElement = () => {
    const element = document.getElementById("servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const bannerData = {
    title: "Explore os filtros para buscar o serviço perfeito",
    description:
      "Encontre ou ofereça serviços domésticos com facilidade. Junte-se à comunidade de profissionais domésticos qualificados e proprietários satisfeitos.",
    buttonLabel: "Explore Serviços",
    imageId: 0,
  };

  return (
    <>
      {loading && <LibComponents.SharedComponents.LoadingPage />}
      <div>
        <LibComponents.SharedComponents.HeaderBanner
          bannerData={bannerData}
          onClickBanner={scrollToElement}
        />
        <Content>
          <LibComponents.SharedComponents.SearchContent
            setState={setSearchName}
            state={searchName}
          />
          <LibComponents.SharedComponents.ItensList data={data} />
          <LibComponents.SharedComponents.Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Content>
        <LibComponents.SharedComponents.Footer />
      </div>
    </>
  );
}
