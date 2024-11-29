import React, { useState } from "react";
import { useRouter } from "next/router";
import * as S from "./styles";
import { AuthService } from "@/pages/shared/services/auth.service";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { ResetPasswordDto } from "@/pages/shared/dtos/auth";
import { toastConfig } from "@/pages/shared/utils/toast";

// Estendendo o DTO para incluir confirmPassword
type ExtendedResetPasswordDto = ResetPasswordDto & {
  confirmPassword: string;
};

export const ForgotPasswordSoliForm = () => {
  const router = useRouter();
  const { token } = router.query;
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ExtendedResetPasswordDto>();

  const newPassword = watch("newPassword");

  // Função para redefinir senha
  const handlePasswordReset: SubmitHandler<ExtendedResetPasswordDto> = async (
    data
  ) => {
    const { newPassword, confirmPassword } = data;

    if (newPassword !== confirmPassword) {
      toastConfig.warning("As senhas não coincidem.");
      return;
    }

    try {
      setLoading(true);
      if (token) {
        await AuthService.resetPassword(token as string, newPassword);
        toastConfig.success("Senha redefinida com sucesso!");
        router.push("/auth/login");
      }
    } catch (error) {
      toastConfig.error("Erro ao redefinir a senha. Tente novamente.");
      console.error("Erro ao redefinir a senha:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.FormWrapper>
        <S.ModalTitle>Redefinir Senha</S.ModalTitle>
        <form onSubmit={handleSubmit(handlePasswordReset)}>
          <label htmlFor="newPassword">Digite sua nova senha</label>
          <S.ModalInput
            id="newPassword"
            type="password"
            placeholder="Nova Senha"
            hasError={!!errors.newPassword}
            {...register("newPassword", {
              required: "Senha é obrigatória",
              minLength: { value: 6, message: "Mínimo 6 caracteres" },
              maxLength: { value: 10, message: "Máximo 10 caracteres" },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                message: "Deve conter 1 letra maiúscula e 1 caractere especial",
              },
            })}
          />
          {errors.newPassword && (
            <S.ErrorMessage>{errors.newPassword.message}</S.ErrorMessage>
          )}

          <label htmlFor="confirmPassword">Confirme sua senha</label>
          <S.ModalInput
            id="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
            hasError={!!errors.confirmPassword}
            {...register("confirmPassword", {
              required: "Confirmação é obrigatória",
              validate: (value) =>
                value === newPassword || "As senhas não coincidem",
            })}
          />
          {errors.confirmPassword && (
            <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>
          )}

          <S.ModalButton type="submit" disabled={loading}>
            {loading ? "Redefinindo..." : "Redefinir Senha"}
          </S.ModalButton>
        </form>
        <S.BackToLoginLink href="/login">Voltar para o Login</S.BackToLoginLink>
      </S.FormWrapper>
    </S.Container>
  );
};
