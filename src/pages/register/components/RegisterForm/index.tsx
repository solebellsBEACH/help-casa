import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Button, Container, FormWrapper, IconWrapper, Input, InputField, RegisterLink, SignupText, Title } from "./styles";
import { useRouter } from "next/router";

export function RegisterForm() {
    const router = useRouter();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("Cliente");

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        console.log("Dados de Registro:", { fullName, email, password, role });

        router.push("/");
    };

    return (
        <Container>
            <FormWrapper>
                <Title>Registrar</Title>
                <form onSubmit={handleSubmit}>
                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="text"
                            placeholder="Nome Completo"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <Input
                            type="email"
                            placeholder="E-mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaLock />
                        </IconWrapper>
                        <Input
                            type="password"
                            placeholder="Senha"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaLock />
                        </IconWrapper>
                        <Input
                            type="password"
                            placeholder="Confirmar Senha"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </InputField>

                    <InputField>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
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
                            <option value="Cliente">Cliente</option>
                            <option value="Prestador">Prestador</option>
                        </select>
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
