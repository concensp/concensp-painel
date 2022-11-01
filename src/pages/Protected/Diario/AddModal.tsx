import React from "react";
import api from "../../../api/api";
import { Input } from "../../Auth/Login/styles";
import { Container, DateInput, OptionButton } from "./styles";
interface Props {
  setModal(value: boolean): void;
}
const AddModal: React.FC<Props> = ({ setModal }) => {
  const [nome, setNome] = React.useState("");
  const [arquivo, setArquivo] = React.useState<any>();
  const [data, setData] = React.useState("");
  const newDiario = async () => {
    var body = new FormData();
    body.append("arquivo", arquivo);
    body.append("nome", nome);
    body.append("data", data);

    await api.newDiario(body);
    setModal(false);
  };
  return (
    <Container>
      <Input
        placeholder="Nome"
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="Arquivo"
        type="file"
        onChange={({ target }) => {
          if (target.files) {
            setArquivo(target.files[0]);
          }
        }}
      />
      <DateInput onChange={({ target }) => setData(target.value)} />
      <OptionButton disabled={!nome || !arquivo || !data} onClick={newDiario}>
        Cadastrar
      </OptionButton>
    </Container>
  );
};

export default AddModal;
