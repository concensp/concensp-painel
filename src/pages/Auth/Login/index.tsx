import React from "react";
import { UserContext } from "../../../contexts/UserContext";
import { ButtonLogin, Container, Input, Title } from "./styles";

const Login: React.FC = () => {
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const { userLogin } = React.useContext(UserContext);

  const onSubmit = () => {
    userLogin({ pass, user });
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        placeholder="Usuário"
        onChange={({ target }) => setUser(target.value)}
      />
      <Input
        placeholder="Senha"
        type={"password"}
        onChange={({ target }) => setPass(target.value)}
      />
      <ButtonLogin disabled={!user || !pass} onClick={onSubmit}>Login</ButtonLogin>
    </Container>
  );
};

export default Login;
