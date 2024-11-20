import React, { useState } from "react";
import * as S from "./styles";
import {
  RegisterLink,
  SignupText,
} from "@/pages/login/components/LoginForm/styles";
import { AuthService } from "@/pages/shared/services/auth.service";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await AuthService.sendForgotPasswordLink({ email });
      toast.success("Link de redefinição de senha enviado para o e-mail!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(
        "Erro ao enviar o link de redefinição de senha. Tente novamente",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        }
      );
      console.error(err);
    }
  };

  return (
    <S.Container>
      <S.ModalTitle>Redefinir Senha</S.ModalTitle>
      <form onSubmit={handleForgotPassword}>
        <label htmlFor="email">Digite Seu Email</label>
        <S.ModalInput
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <S.ModalButton type="submit">Enviar Link</S.ModalButton>
      </form>
      <SignupText>
        Voltar para o<RegisterLink href="/login"> Login</RegisterLink>
      </SignupText>
    </S.Container>
  );
};
