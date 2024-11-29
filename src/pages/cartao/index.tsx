import React, { useState } from "react";
import {
  CartaoContainer,
  Title,
  Form,
  Input,
  Button,
  BackButton,
  FormWrapper,
} from "./styles";
import { useRouter } from "next/router";
import { toastConfig } from "../shared/utils/toast";
import "react-toastify/dist/ReactToastify.css";

export default function Cartao() {
  const [titular, setTitular] = useState<string>("");
  const [cnpjCpf, setCnpjCpf] = useState<string>("");
  const [validade, setValidade] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [parcela, setParcela] = useState<string>("");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toastConfig.success("Pagamento concluído");
    router.push("/");
  };

  return (
    <CartaoContainer>
      <FormWrapper>
        <Title>Pagamento com Cartão de Crédito</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Titular"
            value={titular}
            onChange={(e) => setTitular(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="CNPJ/CPF"
            value={cnpjCpf}
            onChange={(e) => setCnpjCpf(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Validade (MM/AA)"
            value={validade}
            onChange={(e) => setValidade(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Código (CVV)"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Número de Parcelas"
            value={parcela}
            onChange={(e) => setParcela(e.target.value)}
            required
          />
          <Button type="submit">Concluir Pagamento</Button>
        </Form>
        <BackButton onClick={handleBack}>Voltar</BackButton>
      </FormWrapper>
    </CartaoContainer>
  );
}
