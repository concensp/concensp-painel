import React from "react";
import api from "../../../api/api";
import { Container, OptionButton, Text } from "./styles";

interface Props {
  item: any;
  setModal(value: boolean): void;
}

const ExcludeModal: React.FC<Props> = ({ item, setModal }) => {
  const onDelete = async () => {
    await api.deleteDiario(item._id);
    setModal(false);
  };
  return (
    <Container>
      <Text>
        Deseja excluir a <b>{item.nome}</b>
      </Text>
      <OptionButton onClick={onDelete}>Sim</OptionButton>
      <OptionButton onClick={() => setModal(false)}>Não</OptionButton>
    </Container>
  );
};

export default ExcludeModal;
