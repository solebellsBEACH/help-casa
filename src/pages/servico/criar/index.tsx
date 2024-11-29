import { LibComponents } from "@/pages/shared/components";
import ServiceProposalCard from "./components/ServiceProposalCard";
import { Container, FormWrapper } from "./style";

const Home = () => {
  return (
    <>
      <LibComponents.SharedComponents.Header />
      <Container>
        <div className="bg-gray-100 min-h-screen py-10">
          <FormWrapper>
            <ServiceProposalCard />
          </FormWrapper>
        </div>
      </Container>
    </>
  );
};

export default Home;
