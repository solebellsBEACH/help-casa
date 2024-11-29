import { LibComponents } from "../shared/components";
import ServiceProposalCard from "./components/ServiceProposalCard";
import { Container, FormWrapper } from "./style";

const Home = () => {
  return (
    <>
      <LibComponents.SharedComponents.Header />
      <Container>
        <div className="bg-gray-100 min-h-screen py-10">
          <FormWrapper>
            <ServiceProposalCard
              userImage="/images/user.jpg"
              userName="João Silva"
              serviceType=""
              serviceName=""
              date=""
              time=""
              address=""
              description=""
              tasks={[]}
              value={0}
            />
          </FormWrapper>
        </div>
      </Container>
    </>
  );
};

export default Home;
