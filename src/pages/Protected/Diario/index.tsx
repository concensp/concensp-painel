import React, { useEffect } from "react";
import {
  ActionButton,
  Container,
  NewButton,
  SubTitle,
  Table,
  Td,
  Th,
  Title,
  Toolbar,
  Tr,
} from "./styles";
import Modal from "react-modal";
import AddModal from "./AddModal";
import { TrashIcon } from "@heroicons/react/24/solid";
import ExcludeModal from "./ExcludeModal";
import api from "../../../api/api";
import moment from "moment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Diario: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [excludeIsOpen, setExcludeIsOpen] = React.useState(false);
  const [diarios, setDiarios] = React.useState<any[]>([]);
  const [toExclude, setToExclude] = React.useState("");

  function openModal() {
    setIsOpen(true);
  }

  React.useEffect(() => {
    getDiarios();
  }, []);
  async function getDiarios() {
    const res = await api.getDiarios();
    const json = await res.json();
    setDiarios(json.data);
  }

  function openExclude(item: any) {
    setToExclude(item);
    setExcludeIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setExcludeIsOpen(false);
  }
  return (
    <Container>
      <Modal
        appElement={[]}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        onAfterClose={getDiarios}
      >
        <AddModal setModal={setIsOpen} />
      </Modal>
      <Modal
        appElement={[]}
        isOpen={excludeIsOpen}
        onRequestClose={closeModal}
        onAfterClose={getDiarios}
        style={customStyles}
      >
        <ExcludeModal item={toExclude} setModal={setExcludeIsOpen} />
      </Modal>
      <Toolbar>
        <Title>Diário Oficial Eletrônico</Title>
        <NewButton onClick={openModal}>+</NewButton>
      </Toolbar>
      <SubTitle>Cadastrados</SubTitle>
      <Table>
        <thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Data</Th>
            <Th>Arquivo</Th>
            <Th>Ações</Th>
          </Tr>
        </thead>
        <tbody>
          {diarios.map((item) => (
            <Tr key={item._id}>
              <Td>{item.nome}</Td>
              <Td>{moment(item.data).format("DD/MM/YYYY")}</Td>
              <Td>
                <a href={item.arquivo} target="__blank">
                  {item.arquivo
                    .split("/")
                    .pop()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")}
                </a>
              </Td>
              <Td>
                <ActionButton onClick={() => openExclude(item)}>
                  <TrashIcon />
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Diario;
