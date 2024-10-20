import { useForm, SubmitHandler } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";
import { Button, Container, FormWrapper, IconWrapper, Input, InputField, RegisterLink, SignupText, Title } from "./styles";
import { useRouter } from "next/router";

type FormValues = {
    name: string;
    email: string;
    address: string;
    description: string;
    phone: string;
    rate: number;
    hour_range: {
        init_hour: string;
        finish_hour: string;
    };
    available_services: string[];
    experience: string;
};

export function RegisterForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
    const router = useRouter();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Dados de Registro:", data);
        router.push("/");
    };

    return (
        <Container>
            <FormWrapper>
                <Title>Registrar</Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="text"
                            placeholder="Nome Completo"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span>Nome é obrigatório</span>}
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="email"
                            placeholder="E-mail"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>E-mail é obrigatório</span>}
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="text"
                            placeholder="Endereço"
                            {...register("address", { required: true })}
                        />
                        {errors.address && <span>Endereço é obrigatório</span>}
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="text"
                            placeholder="Descrição"
                            {...register("description", { required: true })}
                        />
                        {errors.description && <span>Descrição é obrigatória</span>}
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="text"
                            placeholder="Telefone"
                            {...register("phone", { required: true })}
                        />
                        {errors.phone && <span>Telefone é obrigatório</span>}
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="number"
                            placeholder="Taxa (R$)"
                            {...register("rate", { required: true })}
                        />
                        {errors.rate && <span>Taxa é obrigatória</span>}
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="text"
                            placeholder="Hora de Início"
                            {...register("hour_range.init_hour", { required: true })}
                        />
                        {errors.hour_range?.init_hour && <span>Hora de início é obrigatória</span>}
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="text"
                            placeholder="Hora de Término"
                            {...register("hour_range.finish_hour", { required: true })}
                        />
                        {errors.hour_range?.finish_hour && <span>Hora de término é obrigatória</span>}
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <select
                            {...register("available_services", { required: true })}
                            multiple
                            style={{
                                width: "100%",
                                padding: "0.625rem 2.5rem 0.625rem 2.5rem",
                                border: "1px solid #d1d5db",
                                borderRadius: "0.5rem",
                                fontSize: "1rem",
                                color: "#374151",
                                outline: "none",
                            }}
                        >
                            <option value="Serviço 1">Serviço 1</option>
                            <option value="Serviço 2">Serviço 2</option>
                            <option value="Serviço 3">Serviço 3</option>
                        </select>
                        {errors.available_services && <span>Selecione ao menos um serviço</span>}
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="text"
                            placeholder="Experiência"
                            {...register("experience", { required: true })}
                        />
                        {errors.experience && <span>Experiência é obrigatória</span>}
                    </InputField>

                    <Button type="submit">Registrar</Button>

                    <SignupText>
                        Já tem uma conta?{" "}
                        <RegisterLink href="/login">Login</RegisterLink>
                    </SignupText>
                </form>
            </FormWrapper>
        </Container>
    );
}

export default RegisterForm;
