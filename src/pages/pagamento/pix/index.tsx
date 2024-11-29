import React from "react";
import QRCode from "react-qr-code";
import {
  PixContainer,
  Title,
  QRCodeWrapper,
  Button,
  FormWrapper,
  BackButton,
} from "./style";
import { useRouter } from "next/router";

export default function Pix() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <PixContainer>
      <FormWrapper>
        <Title>Pagamento com Pix</Title>
        <QRCodeWrapper>
          <QRCode value="google.com.br" />
        </QRCodeWrapper>
        <BackButton onClick={handleBack}>Voltar</BackButton>
        <Button onClick={handleHome}>Home</Button>
      </FormWrapper>
    </PixContainer>
  );
}
