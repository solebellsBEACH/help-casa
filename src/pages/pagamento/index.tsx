import React, { useState } from "react";
import {
  EscolhaContainer,
  Title,
  Form,
  RadioInput,
  Label,
  Button,
  RadioContainer,
  FormWrapper,
} from "./style";
import { useRouter } from "next/router";

export default function Escolha() {
  const [formaPagamento, setFormaPagamento] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formaPagamento === "cartao") {
      router.push("/cartao");
    } else if (formaPagamento === "pix") {
      router.push("/pix");
    }
  };

  return (
    <EscolhaContainer>
      <FormWrapper>
        <Title>Escolha a forma de pagamento</Title>
        <Form onSubmit={handleSubmit}>
          <RadioContainer>
            <RadioInput
              value="cartao"
              checked={formaPagamento === "cartao"}
              onChange={() => setFormaPagamento("cartao")}
            />
            <Label>Cartão de Crédito</Label>
          </RadioContainer>
          <RadioContainer>
            <RadioInput
              value="pix"
              checked={formaPagamento === "pix"}
              onChange={() => setFormaPagamento("pix")}
            />
            <Label>Pix</Label>
          </RadioContainer>
          <Button type="submit">Continuar</Button>
        </Form>
      </FormWrapper>
    </EscolhaContainer>
  );
}
