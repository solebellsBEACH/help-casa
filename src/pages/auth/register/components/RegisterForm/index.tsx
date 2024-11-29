import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import InputMask from "react-input-mask";
import {
  Button,
  Container,
  ErrorMessage,
  FormWrapper,
  IconWrapper,
  Input,
  InputField,
  RegisterLink,
  SignupText,
  Title,
} from "./styles";
import { AuthService } from "@/pages/shared/services/auth.service";
import { RegisterFormDto } from "@/pages/shared/dtos/auth";

export function RegisterForm() {
  const [userType, setuserType] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormDto>();

  const onSubmit: SubmitHandler<RegisterFormDto> = async (data) => {
    try {
      const formData = {
        ...data,
        userType,
      };

      const response = await AuthService.onRegister(formData);
      if (response) {
        setStatusMessage("Usuário cadastrado com sucesso!");
      } else {
        setStatusMessage(null);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 409) {
          setStatusMessage("Email já em uso.");
        } else {
          setStatusMessage("Erro ao cadastrar usuário.");
        }
      } else {
        setStatusMessage("Erro de rede.");
      }
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Cadastrar</Title>
        {statusMessage && <p>{statusMessage}</p>}
        {!userType ? (
          <>
            <Button onClick={() => setuserType("employee")}>
              Sou Empregado
            </Button>
            <Button onClick={() => setuserType("employer")}>
              Sou Empregador
            </Button>
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Renderização condicional para Empregado */}
            {userType === "employee" && (
              <>
                <label htmlFor="Name">Nome Completo</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <Input
                    id="Name"
                    type="text"
                    placeholder="Nome Completo"
                    {...register("Name", { required: "Nome é obrigatório" })}
                    style={{
                      borderColor: errors.Name ? "red" : "initial",
                    }}
                  />
                  {errors.Name && (
                    <span style={{ color: "red" }}>{errors.Name.message}</span>
                  )}
                </InputField>

                <label htmlFor="Email">E-mail</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <Input
                    id="Email"
                    type="Email"
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

                {/* Campo de senha com mensagens fixas */}
                <div style={{ color: "red", marginBottom: "8px" }}>
                  A senha deve ter:
                  <ul>
                    <li>Entre 6 a 10 caracteres</li>
                    <li>Ao menos uma letra maiúscula</li>
                    <li>Ao menos um caractere especial</li>
                  </ul>
                </div>

                <label htmlFor="password">Senha</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
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

                <label htmlFor="Address">Endereço</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <Input
                    id="Address"
                    type="text"
                    placeholder="Endereço"
                    {...register("Address", {
                      required: "Endereço é obrigatório",
                    })}
                    style={{
                      borderColor: errors.Address ? "red" : "initial",
                    }}
                  />
                  {errors.Address && (
                    <span style={{ color: "red" }}>
                      {errors.Address.message}
                    </span>
                  )}
                </InputField>
                <label htmlFor="Phone">Telefone</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <InputMask
                    mask="(99) 99999-9999"
                    {...register("Phone", {
                      required: "Telefone é obrigatório",
                    })}
                    id="Phone"
                    placeholder="(99) 99999-9999"
                    style={{
                      borderColor: errors.Phone ? "red" : "initial",
                    }}
                  >
                    {(inputProps: any) => <Input {...inputProps} />}
                  </InputMask>
                  {errors.Phone && (
                    <span style={{ color: "red" }}>{errors.Phone.message}</span>
                  )}
                </InputField>

                <label htmlFor="AreaOfExpertise">Área de Especialização</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <Input
                    id="AreaOfExpertise"
                    type="text"
                    placeholder="Área de Especialização"
                    {...register("AreaOfExpertise", {
                      required: "Área de especialização é obrigatória",
                    })}
                    style={{
                      borderColor: errors.AreaOfExpertise ? "red" : "initial",
                    }}
                  />
                  {errors.AreaOfExpertise && (
                    <span style={{ color: "red" }}>
                      {errors.AreaOfExpertise.message}
                    </span>
                  )}
                </InputField>

                <label htmlFor="Experience">Experiência</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <Input
                    id="Experience"
                    type="text"
                    placeholder="Experiência"
                    {...register("Experience", {
                      required: "Experiência é obrigatória",
                    })}
                    style={{
                      borderColor: errors.Experience ? "red" : "initial",
                    }}
                  />
                  {errors.Experience && (
                    <span style={{ color: "red" }}>
                      {errors.Experience.message}
                    </span>
                  )}
                </InputField>
              </>
            )}

            {userType === "employer" && (
              <>
                {/* Renderização condicional para Empregador */}
                <label htmlFor="Name">Nome Completo</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <Input
                    id="Name"
                    type="text"
                    placeholder="Nome Completo"
                    {...register("Name", { required: "Nome é obrigatório" })}
                    style={{
                      borderColor: errors.Name ? "red" : "initial",
                    }}
                  />
                  {errors.Name && (
                    <span style={{ color: "red" }}>{errors.Name.message}</span>
                  )}
                </InputField>
                <label htmlFor="Email">E-mail</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <Input
                    id="Email"
                    type="Email"
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

                {/* Campo de senha com mensagens fixas */}
                <div style={{ color: "red", marginBottom: "8px" }}>
                  A senha deve ter:
                  <ul>
                    <li>Entre 6 a 10 caracteres</li>
                    <li>Ao menos uma letra maiúscula</li>
                    <li>Ao menos um caractere especial</li>
                  </ul>
                </div>
                <label htmlFor="password">Senha</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
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
                <label htmlFor="Address">Endereço</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <Input
                    id="Address"
                    type="text"
                    placeholder="Endereço"
                    {...register("Address", {
                      required: "Endereço é obrigatório",
                    })}
                    style={{
                      borderColor: errors.Address ? "red" : "initial",
                    }}
                  />
                  {errors.Address && (
                    <span style={{ color: "red" }}>
                      {errors.Address.message}
                    </span>
                  )}
                </InputField>
                <label htmlFor="Phone">Telefone</label>
                <InputField>
                  <IconWrapper>
                    <FaUser />
                  </IconWrapper>
                  <InputMask
                    mask="(99) 99999-9999"
                    {...register("Phone", {
                      required: "Telefone é obrigatório",
                    })}
                    id="Phone"
                    placeholder="(99) 99999-9999"
                    style={{
                      borderColor: errors.Phone ? "red" : "initial",
                    }}
                  >
                    {(inputProps: any) => <Input {...inputProps} />}
                  </InputMask>
                  {errors.Phone && (
                    <span style={{ color: "red" }}>{errors.Phone.message}</span>
                  )}
                </InputField>
              </>
            )}

            <Button type="submit">Cadastrar</Button>
            <SignupText>
              Já tem uma conta?{" "}
              <RegisterLink href="/login">Faça login</RegisterLink>
            </SignupText>
          </form>
        )}
      </FormWrapper>
    </Container>
  );
}
