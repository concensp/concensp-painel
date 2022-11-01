import React from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container, Disabled, Item, LogoutButton } from "./styles";

const SideMenu: React.FC = () => {
  const { userLogout } = React.useContext(UserContext);
  return (
    <Container>
      <Disabled>Licitações</Disabled>
      <Item to="/diario">Diário Eletrônico</Item>
      <Disabled>Municípios</Disabled>
      <Disabled>Arquivos</Disabled>
      <LogoutButton onClick={userLogout}>Sair</LogoutButton>
    </Container>
  );
};

export default SideMenu;
