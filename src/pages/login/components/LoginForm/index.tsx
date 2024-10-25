import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import {
  Button,
  Container,
  ForgotLink,
  FormWrapper,
  IconWrapper,
  Input,
  InputField,
  RegisterLink,
  SignupText,
  Title,
} from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { ErrorMessage } from "@/pages/register/components/RegisterForm/styles";

type FormValues = {
  Email: string;
  PasswordDto: string;
};

export function LoginForm() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5289/api/auth/login",
        data
      );
      if (response.status) {
        setStatusMessage("Login realizado com sucesso!");
      } else {
        setStatusMessage(null);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          setStatusMessage("Senha ou E-mail incorretos.");
        } else {
          setStatusMessage("Erro ao realizar o login,");
        }
      }
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        {statusMessage && <p>{statusMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Email">E-mail</label>
          <InputField>
            <IconWrapper>
              <FaUser />
            </IconWrapper>
            <Input
              id="Email"
              type="email"
              placeholder="E-mail"
              {...register("Email", { required: "E-mail é obrigatório" })}
              style={{
                borderColor: errors.Email ? "red" : "initial",
              }}
            />
            {errors.Email && (
              <span style={{ color: "red" }}>{errors.Email.message}</span>
            )}
          </InputField>
          <label htmlFor="password">Senha</label>
          <InputField>
            <IconWrapper>
              <FaLock />
            </IconWrapper>
            <Input
              id="password"
              type="password"
              placeholder="Senha"
              {...register("PasswordDto", {
                required: "Senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "A senha deve ter no mínimo 6 caracteres",
                },
                maxLength: {
                  value: 10,
                  message: "A senha deve ter no máximo 10 caracteres",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                  message:
                    "A senha deve conter ao menos 1 letra maiúscula e 1 caractere especial",
                },
              })}
              style={{
                borderColor: errors.PasswordDto ? "red" : "initial",
              }}
            />
            {errors.PasswordDto && (
              <ErrorMessage>{errors.PasswordDto.message}</ErrorMessage>
            )}
          </InputField>

          <ForgotLink href="#">Esqueceu sua senha?</ForgotLink>

          <Button type="submit">Login</Button>

          <SignupText>
            Não tem uma conta?{" "}
            <RegisterLink href="/register">Cadastrar</RegisterLink>{" "}
            {/* Corrigido: link para 'Cadastrar' */}
          </SignupText>
        </form>
      </FormWrapper>
    </Container>
  );
}

export default LoginForm;
