import { LibComponents } from "@/pages/shared/components";
import HistoryCard from "./components/HistoryCard";
import { Container, FormWrapper } from "./style";

const Home = () => {
  return (
    <>
      <LibComponents.SharedComponents.Header />
      <Container>
        <div className="bg-gray-100 min-h-screen py-10">
          <h1 className="text-2xl font-bold text-center mb-8">Histórico</h1>
          <FormWrapper>
            <HistoryCard
              userImage="/images/user.jpg"
              serviceType="Conserto"
              serviceName="Conserto de Móveis"
              observations="Conserto de móveis gerais do apartamento, incluindo móveis da sala e cozinha."
              tasks={["Conserto do sofá", "Conserto do armário da pia"]}
              price={180.0}
              userName={""}
              userTitle={""}
            />
            <HistoryCard
              userImage="/images/user.jpg"
              serviceType="Conserto"
              serviceName="Conserto de Móveis"
              observations="Conserto de móveis gerais do apartamento, incluindo móveis da sala e cozinha."
              tasks={["Conserto do sofá", "Conserto do armário da pia"]}
              price={180.0}
              userName={""}
              userTitle={""}
            />
            <HistoryCard
              userTitle="Founder - Dallousm"
              serviceType="Conserto"
              serviceName="Conserto de Móveis"
              observations="Conserto de móveis gerais do apartamento, incluindo móveis da sala e cozinha."
              tasks={["Conserto do sofá", "Conserto do armário da pia"]}
              price={180.0}
              userImage={""}
              userName={""}
            />
          </FormWrapper>
        </div>
      </Container>
    </>
  );
};

export default Home;
