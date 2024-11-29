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
import { LoginFormDto } from "@/pages/shared/dtos/auth";
import { AuthService } from "@/pages/shared/services/auth.service";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { toastConfig } from "@/pages/shared/utils/toast";
import { ErrorMessage } from "@/pages/auth/register/components/RegisterForm/styles";
import { useUserContext } from "@/pages/shared/context/UserContext";

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormDto>();

  const { setUser } = useUserContext();

  const onSubmit: SubmitHandler<LoginFormDto> = async (data) => {
    try {
      const response = await AuthService.onLogin(data);
      if (response) {
        setUser(response.data); // Atualiza o contexto global com os dados do usuário
        toastConfig.success("Login realizado com sucesso!");
        router.push("/profile");
      }
    } catch (error) {
      toastConfig.error("Erro ao realizar o login.");
      console.log(error);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
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
              {...register("Password", {
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
                borderColor: errors.Password ? "red" : "initial",
              }}
            />
            {errors.Password && (
              <ErrorMessage>{errors.Password.message}</ErrorMessage>
            )}
          </InputField>

          <ForgotLink href="/forgot-password">Esqueceu sua senha?</ForgotLink>

          <Button type="submit">Login</Button>

          <SignupText>
            Não tem uma conta?{" "}
            <RegisterLink href="/register">Cadastrar</RegisterLink>{" "}
          </SignupText>
        </form>
      </FormWrapper>
    </Container>
  );
}
